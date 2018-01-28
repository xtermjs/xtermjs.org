---
title: terminado
category: addon
---

The terminado addon provides almost identical functionality with the [`attach`](/docs/api/addons/attach/) addon, but it connects to a [Terminado](https://github.com/takluyver/terminado) back-end, instead of a pure I/O stream.

You can read more about how to use this add on in the [Connecting with Terminado](/docs/guides/terminado/) guide.

```javascript
import * as Terminal from 'xterm';
import * as terminado from 'xterm/lib/addons/terminado/terminado';

Terminal.applyAddon(terminado);  // Apply the `terminado` addon

var term = new Terminal();
var socket = new WebSocket('wss://terminado.example.com/websocket');

term.terminadoAttach(socket);  // Attach the above socket to `term` using the Terminado protocol
```

## Methods

### `terminadoAttach(socket[, bidirectional[, bufferred]])`

- `socket` - WebSocket - The socket to attach to the current terminal
- `bidirectional` - Boolean - Whether the terminal should send data to the socket (defaults to `true`)
- `bufferred` - Boolean - Whether the terminal should buffer output rendering for better performance (defaults to `false`)

Attaches the given [Terminado](https://github.com/takluyver/terminado) WebSocket to the current terminal.

#### Example

```javascript
var socket = new WebSocket('wss://terminado.example.com/websocket');

// The following line of code:
//   1. Attaches the given socket to `term`
//   2. Sets up bidirectional communication (sends to stdin and renders stdout/stderr)
//   3. Buffers rendering for better performance
term.terminadoAttach(socket, true, true);
```

### `terminadoDetach(socket)`

- `socket` - WebSocket - The socket to detach from the current terminal

Detaches the given [Terminado](https://github.com/takluyver/terminado) WebSocket to the current terminal. After calling this method, no stdout or stderr will be rendered and no data will be sent to stdin.

#### Example

```javascript
var socket = new WebSocket('wss://terminado.example.com/websocket');

term.terminadoAttach(socket);

// ... user code here ...

term.terminadoDetach(socket);  // Now the socket is detached. Nothing will be rendered or sent back.
```
