---
title: IBuffer
category: API-interfaces
layout: docs
---


# Interface: IBuffer

Represents a terminal buffer.

## Hierarchy

**IBuffer**

## Index

### Properties

* [baseY]({% link _docs/api/terminal/interfaces/ibuffer.md %}#basey)
* [cursorX]({% link _docs/api/terminal/interfaces/ibuffer.md %}#cursorx)
* [cursorY]({% link _docs/api/terminal/interfaces/ibuffer.md %}#cursory)
* [length]({% link _docs/api/terminal/interfaces/ibuffer.md %}#length)
* [viewportY]({% link _docs/api/terminal/interfaces/ibuffer.md %}#viewporty)

### Methods

* [getLine]({% link _docs/api/terminal/interfaces/ibuffer.md %}#getline)

---

## Properties

<a id="basey"></a>

###  baseY

**● baseY**: *`number`*

*Defined in [xterm.d.ts:946](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L946)*

The line within the buffer where the top of the bottom page is (when fully scrolled down).

___
<a id="cursorx"></a>

###  cursorX

**● cursorX**: *`number`*

*Defined in [xterm.d.ts:935](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L935)*

The x position of the cursor. This ranges between `0` (left side) and `Terminal.cols - 1` (right side).

___
<a id="cursory"></a>

###  cursorY

**● cursorY**: *`number`*

*Defined in [xterm.d.ts:929](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L929)*

The y position of the cursor. This ranges between `0` (when the cursor is at baseY) and `Terminal.rows - 1` (when the cursor is on the last row).

___
<a id="length"></a>

###  length

**● length**: *`number`*

*Defined in [xterm.d.ts:951](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L951)*

The amount of lines in the buffer.

___
<a id="viewporty"></a>

###  viewportY

**● viewportY**: *`number`*

*Defined in [xterm.d.ts:940](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L940)*

The line within the buffer where the top of the viewport is.

___

## Methods

<a id="getline"></a>

###  getLine

▸ **getLine**(y: *`number`*): [IBufferLine]({% link _docs/api/terminal/interfaces/ibufferline.md %}) \| `undefined`

*Defined in [xterm.d.ts:963](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L963)*

Gets a line from the buffer, or undefined if the line index does not exist.

Note that the result of this function should be used immediately after calling as when the terminal updates it could lead to unexpected behavior.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| y | `number` |  The line index to get. |

**Returns:** [IBufferLine]({% link _docs/api/terminal/interfaces/ibufferline.md %}) \| `undefined`

___

