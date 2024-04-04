---
category: API-interfaces
layout: docs
---


***

[@xterm/xterm]({% link _docs/api/terminal/readme.md %}) / IBufferNamespace

# Interface: IBufferNamespace

Represents the terminal's set of buffers.

## Properties

### active

> **`readonly`** **active**: [`IBuffer`]({% link _docs/api/terminal/interfaces/ibuffer.md %})

The active buffer, this will either be the normal or alternate buffers.

#### Source

[xterm.d.ts:1514](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1514)

***

### alternate

> **`readonly`** **alternate**: [`IBuffer`]({% link _docs/api/terminal/interfaces/ibuffer.md %})

The alternate buffer, this becomes the active buffer when an application
enters this mode via DECSET (`CSI ? 4 7 h`)

#### Source

[xterm.d.ts:1525](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1525)

***

### normal

> **`readonly`** **normal**: [`IBuffer`]({% link _docs/api/terminal/interfaces/ibuffer.md %})

The normal buffer.

#### Source

[xterm.d.ts:1519](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1519)

***

### onBufferChange

> **onBufferChange**: [`IEvent`]({% link _docs/api/terminal/interfaces/ievent.md %})\<[`IBuffer`]({% link _docs/api/terminal/interfaces/ibuffer.md %}), `void`\>

Adds an event listener for when the active buffer changes.

#### Source

[xterm.d.ts:1531](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1531)
