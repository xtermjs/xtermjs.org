---
title: attach
category: addon
---

The attach addon provides methods for attaching a terminal to a WebSocket stream, such as [Docker's WebSocket attach endpoint](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/attach-to-a-container-websocket).

This allows easy hooking of the terminal front-end to background processes and interact with it, just like you would do with in a local terminal. This means that the front-end terminal (a [`Terminal`](/docs/api/Terminal/) instance) will render the stdout and stderr logs of the back-end process and will send to it all keyboard and mouse events captured.

```javascript
import * as Terminal from 'xterm';
import * as attach from 'xterm/addons/attach/attach';

Terminal.applyAddon(attach);  // Apply the `attach` addon

var term = new Terminal();
var socket = new WebSocket('wss://docker.example.com/containers/mycontainerid/attach/ws');

term.attach(socket);  // Attach the above socket to `term`
```

## Methods

### `attach(socket[, bidirectional[, bufferred]])`

- `socket` - WebSocket - The socket to attach to the current terminal
- `bidirectional` - Boolean - Whether the terminal should send data to the socket (defaults to `true`)
- `bufferred` - Boolean - Whether the terminal should buffer output rendering for better performance (defaults to `false`)

Attaches the given WebSocket to the current terminal.

#### Example

```javascript
var socket = new WebSocket('wss://docker.example.com/containers/mycontainerid/attach/ws');

// The following line of code:
//   1. Attaches the given socket to `term`
//   2. Sets up bidirectional communication (sends to stdin and renders stdout/stderr)
//   3. Buffers rendering for better performance
term.attach(socket, true, true);
```

### `detach(socket)`

- `socket` - WebSocket - The socket to detach from the current terminal

Detaches the given WebSocket to the current terminal. After calling this method, no stdout or stderr will be rendered and no data will be sent to stdin.

#### Example

```javascript
var socket = new WebSocket('wss://docker.example.com/containers/mycontainerid/attach/ws');

term.attach(socket);

// ... user code here ...

term.detach(socket);  // Now the socket is detached. Nothing will be rendered or sent back.
```