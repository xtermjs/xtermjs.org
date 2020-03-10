---
title: Terminal Sequences & Parser Hooks
category: Guides
---

The following guide gives a short overview on how to extend xterm.js's functionality by using parser hooks. With these you can either modify the default behavior for certain terminal sequences or build custom sequences with custom functionality.

## What are terminal sequences?

Terminal sequences are instructions targeted at a terminal (emulator) to alter certain aspects of data processing and data presentation. They are directly embedded in the data stream (in-band) and can be seen as a kind of markup system for the terminal.

**Note:** Other than most modern document based markup languages, many terminal sequences do not enforce enclosing data (as seen in XML, e.g. &lt;command&gt;data&lt;/command&gt;), instead they operate in a more stream friendly manner by manipulating a terminal state immediately that stays active until another sequence might alter it.

Terminal sequences have a long history and originate in the need to control certain aspects of mechanical input/output devices like real typewriters, well known examples:
- **LF** (line feed `'\n'`)  
  instructs the typewriter to advance the paper by a line
- **CR** (carriage return `'\r'`)  
  instructs the typewriter to move the carriage back to the home position (beginning of the line)

In the 60s these basic control functions were specified as single byte control codes taking the lower 32 positions (**C0** control codes) and were later extended by 32 more codes (**C1** control codes). Many control codes were widely adopted and survived as fundamental design principles in data processing until now, others were more specific to how machines interacted in the 60s and are less likely to be seen these days.

Still in common use:
- **LF** (line feed `'\n'`)  
Moves the printing position one line down (sometimes also to the left). Used as end-of-line marker (EOL) in Unix and derived operating systems.
- **CR** (carriage return `'\r'`)  
Moves the printing position to the start of the line, allowing overprinting. Used in combination with line feed CRFL as end-of-line marker (EOL) in Windows and several protocols like HTTP, FTP and SMTP.
- **HT** (horizontal tab `'\t'`)  
Moves the printing position right to the next tab stop. Understood by most editors.
- **NUL** (null `'\0'`)  
Used to mark the end of a string by many programming languages known as "null termination".
- **ESC** (escape)  
Introducer of escape sequences. Also used by some editors to switch into a command mode (e.g. vim).
- **SUB** (substitute, Ctrl-Z)  
Used for job control in many POSIX shells to signal SIGSTP to a foreground process, end-of-file marker (EOF) under Windows.
- **ETX** (end of text, Ctrl-C)  
Used to interupt a running process from a controlling terminal.
- **EOT** (end of transmission, Ctrl-D)  
Used as end-of-file marker (EOF) under POSIX (exiting a foreground process).


With the upcoming of the more capable video terminals in the early 70s there was the need to handle new features that could not be controlled by a single byte anymore, which eventually led to the specification of longer sequences spanning multiple bytes (ECMA-48, first release in 1976, with several revisions up to 1991):
- **ESC - ESCAPE**
  - common form: `ESC <optional prefix byte> <optional intermediate byte> <final byte>`
  - usage: simple control functions without further params (similar to C0/C1)
- **CSI - CONTROL SEQUENCE INTRODUCER**
  - common form: `ESC <optional prefix byte> P1 ; P2 ; ... <optional intermediate byte> <final byte>`
  - usage: control functions with numerical params (P1, P2, ...)
- **OSC - OPERATING SYSTEM COMMAND**
  - common form: `OSC <identifier> ; <payload> ST`
  - usage: control functions meant to deal with certain OS aspects, with payload
  - note: The identifier is not part of any official specification, still using a numercial function identifier became a de-facto standard.
- **DCS - DEVICE CONTROL STRING**
  - common form: `DCS <optional prefix byte> P1 ; P2 ; ... <optional intermediate byte> <final byte> <payload> ST`
  - control functions meant to deal with the device (the terminal itself), with payload
- **APM/SOS/PM** (skipped here, since mostly unsupported by emulators)

These sequences are known as "ANSI escape sequences" (they all start with the escape control code `ESC` in 7-bit mode and were adopted by ANSI in 1979). They build the foundation of most control functions of a terminal long with the older C0/C1 control codes.

In the late 70s and early 80s, many vendors came up with different terminal types and tons of control functions (most notably DEC with its [VT series](https://vt100.net/)). The number of partly incompatible devices was a major burden for software developers, which led to the idea to collect their features (`termcap`/`terminfo`) and to level out the differences by higher level TUI libraries (`curses`/`ncurses` under Unix). This made it possible to support several terminal types without the need to write terminal specific sequences yourself. Most advanced command-line applications on POSIX systems use those libraries or alternatives today.

With the upcoming of affordable, more capable graphical hardware in the 90s and the wider adoption of GUIs in general, hardware terminals became obsolete. ????? some notes about emulators....


Prominent early emulator examples are `DECTerm` and `xterm`, which both aimed primarily for DEC VT series compatibility. While the slightly superior `DECTerm` did not manage to escape the vendor locked-in golden cage of DEC operating systems, `xterm` soon closed the gap, was widely available and eventually became the de-facto standard of VT compatible emulation these days. Despite its age `xterm` is still under very active development by Thomas E. Dickey ([changelog](https://invisible-island.net/xterm/xterm.log.html)).


## Terminal Sequences in xterm.js

xterm.js tries to deliver support for most commonly seen terminal sequences 

## Parser in xterm.js

The parser in xterm.js closely resembles the parser described on [VT100.net](https://vt100.net/emu/dec_ansi_parser). It is mostly ANSI compatible with several DEC specific alterations.




## Lifecycle / Execution context of parser hooks

To work with parser hooks correctly it is important to understand, how and when they are executed. xterm.js maintains roughly 4 time slices of execution contexts:
1. Terminal input  
  Whenever a `term.write(data, callback)` is done, the data gets added synchronously to an input write buffer and will return immediately. This is the only action that is guaranteed to be synchronous to your calling context.
2. Input processing  
  Triggered asynchronously by a `setTimeout(..., 0)` call whenever there is pending write buffer data. Here the transformation of the input data into the terminal state happens, roughly:

    - The data gets decoded to UTF32 codepoints.
    - The parser walks the codepoints to identify sequences. For every finished sequence the parser stops parsing and calls the attached sequence handlers (in-band processing). The sequence handlers are hookable ("parser hooks").
    - For every sequence type the parser maintains a list of attached handlers. They are probed in reverse registering order until one returned `true` or the list was exhausted (with a default fallback).
    - A sequence handler does the needed state transformation on the terminal object (mainly involves terminal buffer changes) and returns.

    When the parser has finished processing a single chunk, the callback given by the `write` call gets triggered and indicates, that this particular chunk was finally processed and the chunk gets discarded. So far no screen updates have happened. Still some of the changes already might have scheduled screen update needs.

    **Note:** The whole parsing and state manipulation process is synchronous to a position in a chunk of data and cannot be interupted. This is important to note and somewhat limits the possibilities to postpone heavy work from within a sequence handler. If you have to do use async interfaces, keep in mind that the terminal state will have progessed by the time the call returns.

3. Screen updates  
  Step 2. is only allowed to run for a certain time. After that it gets interrupted (at chunk borders) and the screen update happens. The renderer code will evaluate the terminal state and decide, what has to be redrawn. It is not possible to conclude, whether or when a certain chunk of data will finally appear on the screen. Note that there is a chance under heavy input that a chunk will never make it the screen, just because the terminal state already progressed further before any screen update happened. Slow scroll mode is not supported by xterm.js. Further note that the screen updates involves multiple async calls itself, thus it is not executed as a synchronous block (other than step 2. which is always executed synchronously itself).

4. Event processing  
  Any browser event (e.g. mouse movements, keystrokes) will be processed between the other 3 steps.

Takeaway:
  - Parser hooks should only contain synchronous code.
  - Parser hooks should return a truish value, if a sequence was successfully handled.
  - Parser hooks are blocking, the terminal state will not mutate by any other actions during their invocation.
  - Assumptions about the terminal state are only valid within a single hook invocation.
  - Parser hooks should finish quickly to not slow down input processing too much.

### What to do, if an async call shall alter the terminal buffer?

First - avoid this at any cost, as it violates the in-band principle of a terminal - any data/sequence should take immediately effect on a terminal. Let's make up a not very useful example to illustrate this further:

Given you want to create a sequence that pulls content of an URL into the terminal output. We first define a sequence that is capable to hold the needed bits. For this we take a sequence type, that can have payload, like OSC:

  `OSC 12345 ; <URL> BEL`

The URL here is the payload, '12345' is our own function identifier that would trigger our new control function (see paragraph about designing custom sequences to make the sequence bullet proof):

```typescript
term.addOscHandler(12345, url => {
  url = sanitizeUrl(url);
  const content = fetch(url); // async call - content is a promise
  // what to do about terminal state here?
  ...
  return true;
});

```
Now if the terminal data stream contains anything like `'\x1b]12345;http://example.com\x07'` the parser would trigger our stub handler with `'http://example.com'` as url. The stub also would correctly fetch the resource (if allowed), but would not present it to JS before any further data parsing has finished. How to get the response into the terminal?

Well you cannot (at least not in a single pass). Note that a terminal is meant as an output device for the data coming from an application (pty). This basic rule binds anything that shall be shown on a terminal to the data stream. It also makes things shown predictable for the application side. Following this rule, the terminal should not be responsible to pull other content into its output. If the application wants to show content of a foreign URL resource, it should have pulled the content itself and placed it right into the data stream. This is a very fundamental principle of terminals, they are dumb devices in this regard and not "rich clients".

*"But I want that feature! Now!"*
Ok, you want a rich client, fine. Just keep in mind that any higher level functionality put on the terminal undermines the application side as controlling instance with all drawbacks (like security concerns about side channelling foreign stuff, screwed up screen assumptions).

Solutions to get this done:

1. Tell the application to wait with further output until some kind of confirmation was sent back. Ideally now that sequence is always the last one sent. Now you can attach a `Thenable` to the fetch promise above, that parses the URL content, writes it to the terminal with `.write` and finally sends a confirmation back to the application. Pros/Cons...

2. Make room in the terminal buffer to later hold the content. This can be done by placing markers at the current cursor position, inserting blank content and later during promise resolving using the marker to place the content there. Pros/Cons...

3. Write some fixed placeholder in the terminal buffer, thats identifyable by the user to have an additional effect (like hovering would open a popup with the contents).


## Designing custom sequences and parser hooks


