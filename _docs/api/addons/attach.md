---
title: attach
category: addon
---

The attach addon provides methods for attaching a terminal to a WebSocket stream, such as [Docker's WebSocket attach endpoint](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.24/#/attach-to-a-container-websocket).

This allows easy hooking of the terminal front-end to background processes and interact with it, just like you would do with in a local terminal. This means that the front-end terminal (a [`Terminal`](/docs/api/Terminal/) instance) will render the stdout and stderr logs of the back-end process and will send to it all keyboard and mouse events captured.

```ts
import { Terminal } from '@xterm/xterm';
import { AttachAddon } from '@xterm/addon-attach';

const term = new Terminal();
const socket = new WebSocket('wss://docker.example.com/containers/mycontainerid/attach/ws');
const attachAddon = new AttachAddon(socket);

// Attach the socket to term
term.loadAddon(attachAddon);
```
