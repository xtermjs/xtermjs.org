---
category: API-interfaces
layout: docs
---


***

[@xterm/xterm]({% link _docs/api/terminal/readme.md %}) / IBuffer

# Interface: IBuffer

Represents a terminal buffer.

## Properties

### baseY

> **`readonly`** **baseY**: `number`

The line within the buffer where the top of the bottom page is (when
fully scrolled down).

#### Source

[xterm.d.ts:1472](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1472)

***

### cursorX

> **`readonly`** **cursorX**: `number`

The x position of the cursor. This ranges between `0` (left side) and
`Terminal.cols` (after last cell of the row).

#### Source

[xterm.d.ts:1461](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1461)

***

### cursorY

> **`readonly`** **cursorY**: `number`

The y position of the cursor. This ranges between `0` (when the
cursor is at baseY) and `Terminal.rows - 1` (when the cursor is on the
last row).

#### Source

[xterm.d.ts:1455](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1455)

***

### length

> **`readonly`** **length**: `number`

The amount of lines in the buffer.

#### Source

[xterm.d.ts:1477](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1477)

***

### type

> **`readonly`** **type**: `"normal"` \| `"alternate"`

The type of the buffer.

#### Source

[xterm.d.ts:1448](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1448)

***

### viewportY

> **`readonly`** **viewportY**: `number`

The line within the buffer where the top of the viewport is.

#### Source

[xterm.d.ts:1466](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1466)

## Methods

### getLine()

> **getLine**(`y`): [`IBufferLine`]({% link _docs/api/terminal/interfaces/ibufferline.md %})

Gets a line from the buffer, or undefined if the line index does not
exist.

Note that the result of this function should be used immediately after
calling as when the terminal updates it could lead to unexpected
behavior.

#### Parameters

• **y**: `number`

The line index to get.

#### Returns

[`IBufferLine`]({% link _docs/api/terminal/interfaces/ibufferline.md %})

#### Source

[xterm.d.ts:1489](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1489)

***

### getNullCell()

> **getNullCell**(): [`IBufferCell`]({% link _docs/api/terminal/interfaces/ibuffercell.md %})

Creates an empty cell object suitable as a cell reference in
`line.getCell(x, cell)`. Use this to avoid costly recreation of
cell objects when dealing with tons of cells.

#### Returns

[`IBufferCell`]({% link _docs/api/terminal/interfaces/ibuffercell.md %})

#### Source

[xterm.d.ts:1496](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1496)
