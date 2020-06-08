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
* [viewportY]({% link _docs/api/terminal/interfaces/ibuffer.md %}#viewporty)

### Methods

* [getLine]({% link _docs/api/terminal/interfaces/ibuffer.md %}#getline)
* [getNullCell]({% link _docs/api/terminal/interfaces/ibuffer.md %}#getnullcell)

## Properties

###  baseY

• **baseY**: *number*

*Defined in [xterm.d.ts:1102](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1102)*

The line within the buffer where the top of the bottom page is (when
fully scrolled down).

___

###  cursorX

• **cursorX**: *number*

*Defined in [xterm.d.ts:1091](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1091)*

The x position of the cursor. This ranges between `0` (left side) and
`Terminal.cols - 1` (right side).

___

###  cursorY

• **cursorY**: *number*

*Defined in [xterm.d.ts:1085](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1085)*

The y position of the cursor. This ranges between `0` (when the
cursor is at baseY) and `Terminal.rows - 1` (when the cursor is on the
last row).

___

###  length

• **length**: *number*

*Defined in [xterm.d.ts:1107](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1107)*

The amount of lines in the buffer.

___

###  viewportY

• **viewportY**: *number*

*Defined in [xterm.d.ts:1096](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1096)*

The line within the buffer where the top of the viewport is.

## Methods

###  getLine

▸ **getLine**(`y`: number): *[IBufferLine]({% link _docs/api/terminal/interfaces/ibufferline.md %}) | undefined*

*Defined in [xterm.d.ts:1119](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1119)*

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

*Defined in [xterm.d.ts:1126](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1126)*

Creates an empty cell object suitable as a cell reference in
`line.getCell(x, cell)`. Use this to avoid costly recreation of
cell objects when dealing with tons of cells.

**Returns:** *[IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %})*
