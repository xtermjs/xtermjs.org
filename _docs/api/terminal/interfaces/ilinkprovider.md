---
category: API-interfaces
layout: docs
---


***

[@xterm/xterm]({% link _docs/api/terminal/readme.md %}) / ILinkProvider

# Interface: ILinkProvider

A custom link provider.

## Methods

### provideLinks()

> **provideLinks**(`bufferLineNumber`, `callback`): `void`

Provides a link a buffer position

#### Parameters

• **bufferLineNumber**: `number`

The y position of the buffer to check for links
within.

• **callback**

The callback to be fired when ready with the resulting
link(s) for the line or `undefined`.

#### Returns

`void`

#### Source

[xterm.d.ts:1342](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1342)
