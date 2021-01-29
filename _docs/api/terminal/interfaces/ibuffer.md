---
title: IBuffer
category: API-interfaces
layout: docs
---


# Interface: IBuffer

Represents a terminal buffer.

## Hierarchy

* **IBuffer**

## Index

### Properties

* [baseY]({% link _docs/api/terminal/interfaces/ibuffer.md %}#basey)
* [cursorX]({% link _docs/api/terminal/interfaces/ibuffer.md %}#cursorx)
* [cursorY]({% link _docs/api/terminal/interfaces/ibuffer.md %}#cursory)
* [length]({% link _docs/api/terminal/interfaces/ibuffer.md %}#length)
* [type]({% link _docs/api/terminal/interfaces/ibuffer.md %}#type)
* [viewportY]({% link _docs/api/terminal/interfaces/ibuffer.md %}#viewporty)

### Methods

* [getLine]({% link _docs/api/terminal/interfaces/ibuffer.md %}#getline)
* [getNullCell]({% link _docs/api/terminal/interfaces/ibuffer.md %}#getnullcell)

## Properties

###  baseY

• **baseY**: *number*

*Defined in [xterm.d.ts:1262](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1262)*

The line within the buffer where the top of the bottom page is (when
fully scrolled down).

___

###  cursorX

• **cursorX**: *number*

*Defined in [xterm.d.ts:1251](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1251)*

The x position of the cursor. This ranges between `0` (left side) and
`Terminal.cols` (after last cell of the row).

___

###  cursorY

• **cursorY**: *number*

*Defined in [xterm.d.ts:1245](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1245)*

The y position of the cursor. This ranges between `0` (when the
cursor is at baseY) and `Terminal.rows - 1` (when the cursor is on the
last row).

___

###  length

• **length**: *number*

*Defined in [xterm.d.ts:1267](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1267)*

The amount of lines in the buffer.

___

###  type

• **type**: *"normal" | "alternate"*

*Defined in [xterm.d.ts:1238](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1238)*

The type of the buffer.

___

###  viewportY

• **viewportY**: *number*

*Defined in [xterm.d.ts:1256](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1256)*

The line within the buffer where the top of the viewport is.

## Methods

###  getLine

▸ **getLine**(`y`: number): *[IBufferLine]({% link _docs/api/terminal/interfaces/ibufferline.md %}) | undefined*

*Defined in [xterm.d.ts:1279](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1279)*

Gets a line from the buffer, or undefined if the line index does not
exist.

Note that the result of this function should be used immediately after
calling as when the terminal updates it could lead to unexpected
behavior.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`y` | number | The line index to get.  |

**Returns:** *[IBufferLine]({% link _docs/api/terminal/interfaces/ibufferline.md %}) | undefined*

___

###  getNullCell

▸ **getNullCell**(): *[IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %})*

*Defined in [xterm.d.ts:1286](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1286)*

Creates an empty cell object suitable as a cell reference in
`line.getCell(x, cell)`. Use this to avoid costly recreation of
cell objects when dealing with tons of cells.

**Returns:** *[IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %})*
