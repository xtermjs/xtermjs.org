---
title: Flowcontrol
category: Guides
---

# Flow Control for xterm.js

Very fast producers on application side can overwhelm xterm.js with to much data per time. If that happens, the emulator will get sluggish, might not respond to keystrokes anymore or even worse, some transport buffers might overflow and segfault. To get fast producers under control we need **flow control**.

## How xterm.js processes incoming data

To write stream data to the emulator we call `write` with chunks of a stream:

```Javascript
term.write(chunk_1);
...
term.write(chunk_n);
```

`write` itself is non-blocking, it buffers the data and returns immediately. The data will be processed with the next event loop invocation, the amount processed depends on a timer constraint and shall not take longer than 12ms (hardcoded, see [WriteBuffer.ts#L19-L25](https://github.com/xtermjs/xterm.js/blob/7f598a36753f4d950ee63dc91bd6a92290f7e037/src/common/input/WriteBuffer.ts#L19-L25)). This is needed to give the renderer time to update and draw the new content with decent FPS (varies between 30 and 60).

Compared to very fast producers (up to several GB/s) this system has a rather low throughput (between 5 - 35 MB/s), thus fast producers might keep growing the input write buffer. To avoid an OOM (out of memory exception) in xterm.js this buffer has a hardcoded limit of 50 MB (see [WriteBuffer.ts#L9-L17](https://github.com/xtermjs/xterm.js/blob/7f598a36753f4d950ee63dc91bd6a92290f7e037/src/common/input/WriteBuffer.ts#L9-L17)). Any data beyond that limit gets discarded.


## Most simple flow control mechanism (inefficient)

To place a handbrake on caller side, we can use the optional callback of `write`:

```Javascript
term.write(chunk, () => {
  // do something when finished processing `chunk`
});
```
The callback gets called once when the chunk was processed, thus every `write` call would wait for the previous one to be finished. This waiting condition can be appplied directly to incoming interfaces like the pty object of `node-pty`:

```Javascript
pty.onData(chunk => {
  pty.pause();
  term.write(chunk, () => {
    pty.resume();
  });
});
```
Here the `pause` and the `resume` methods will take care of the flow control propagation to the underlying OS-pty with back pressure and real blocking semantics. This will also work across several layers (for websockets see also [below](#flow-control-over-websockets)).

Still this simple mechanism is quite inefficient for several reasons - it stops the data flow on the OS-pty for every single chunk (worst case a single byte), waits a tiny bit for the processing to re-enabled the data flow. In the end the waits will sum up to a rather big idle time, furthermore the many needed kernel context switches for the blocking/unblocking of the OS-pty will create additional nonsense workload. In the consequence the total throughput will drop by far.

If more layers are involved (e.g. websockets), their processing/latency will further add on top resulting in a really bad throughput.


## Ideas for a better mechanism

A more advanced mechanism would try to lower the needs for `pause` and `resume` calls and thus the waits and nonsense workload created above. This can be achieved by measuring the written data as watermark, compare it with high and low limits and use write callbacks as a commit response:

```Javascript
const HIGH = 100000;
const LOW = 10000;

let watermark = 0;

pty.onData(chunk => {
  watermark += chunk.length;
  term.write(chunk, () => {
    watermark = Math.max(watermark - chunk.length, 0); // also avoid accidental negative watermark values
    if (watermark < LOW) {
      pty.resume();
    }
  });
  if (watermark > HIGH) {
    pty.pause();
  }
});
```

This mechanism avoid most `pause` and `resume` calls and tries to get a steady flow between LOW and HIGH watermark. Optimal values for HIGH and LOW will vary alot depending on the circumstances. Rule of thumb - to keep the emulator snappy for keystrokes under fast input HIGH should not be greater than 500K. A good test scenario is running `yes`, then pressing Ctrl-C and see if the response is within an acceptible range.

Note that is variant still does some nonsence work - it places a callback for every single chunk of data. There are several ways to reduce the callback pressure, e.g. place it only on every n-th chunk, or, as shown here, count pending callbacks instead:

```Javascript
const CALLBACK_BYTE_LIMIT = 100000;
const HIGH = 5;
const LOW = 2;

let written = 0;
let pendingCallbacks = 0;

pty.onData(chunk => {
  written += chunk.length;
  if (written > CALLBACK_BYTE_LIMIT) {
    term.write(chunk, () => {
      pendingCallbacks = Math.max(pendingCallbacks - 1, 0);
      if (pendingCallbacks < LOW) {
        pty.resume();
      }
    });
    pendingCallbacks++;
    written = 0;
    if (pendingCallbacks > HIGH) {
      pty.pause();
    }
  } else {
    term.write(chunk); // fast path for most chunks if chunk.length << CALLBACK_BYTE_LIMIT
  }
});
```

There might be more elegant or stricter solutions than these, depending on your needs. Feel free to come up with your solution as PR. For non `node-pty` backends you will most likely have to build a flow control mechanism based on websockets as an additional transport layer (see below). Also note that a custom flow control mechanism can easily stop the whole stream forever if not calculating/applying the limits correctly. Special care is needed if a lossy transport is involved (will be needed for data integrity checks anyway).


## Flow control over websockets

TODO...

- dont have a blocking interface
- needs a way to propagate the write callback...attach addon to the rescue
