---
category: API-interfaces
layout: docs
---


***

[@xterm/xterm]({% link _docs/api/terminal/readme.md %}) / ILink

# Interface: ILink

A link within the terminal.

## Properties

### decorations?

> **`optional`** **decorations**: [`ILinkDecorations`]({% link _docs/api/terminal/interfaces/ilinkdecorations.md %})

What link decorations to show when hovering the link, this property is
tracked and changes made after the link is provided will trigger changes.
If not set, all decroations will be enabled.

#### Source

[xterm.d.ts:1381](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1381)

***

### range

> **range**: [`IBufferRange`]({% link _docs/api/terminal/interfaces/ibufferrange.md %})

The buffer range of the link.

#### Source

[xterm.d.ts:1369](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1369)

***

### text

> **text**: `string`

The text of the link.

#### Source

[xterm.d.ts:1374](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1374)

## Methods

### activate()

> **activate**(`event`, `text`): `void`

Calls when the link is activated.

#### Parameters

• **event**: `MouseEvent`

The mouse event triggering the callback.

• **text**: `string`

The text of the link.

#### Returns

`void`

#### Source

[xterm.d.ts:1388](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1388)

***

### dispose()?

> **`optional`** **dispose**(): `void`

Called when the link is released and no longer used by xterm.js.

#### Returns

`void`

#### Source

[xterm.d.ts:1410](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1410)

***

### hover()?

> **`optional`** **hover**(`event`, `text`): `void`

Called when the mouse hovers the link. To use this to create a DOM-based
hover tooltip, create the hover element within `Terminal.element` and add
the `xterm-hover` class to it, that will cause mouse events to not fall
through and activate other links.

#### Parameters

• **event**: `MouseEvent`

The mouse event triggering the callback.

• **text**: `string`

The text of the link.

#### Returns

`void`

#### Source

[xterm.d.ts:1398](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1398)

***

### leave()?

> **`optional`** **leave**(`event`, `text`): `void`

Called when the mouse leaves the link.

#### Parameters

• **event**: `MouseEvent`

The mouse event triggering the callback.

• **text**: `string`

The text of the link.

#### Returns

`void`

#### Source

[xterm.d.ts:1405](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1405)
