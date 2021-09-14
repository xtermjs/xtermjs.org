---
title: IBuffer
category: API-interfaces
layout: docs
---


# Interface: IBuffer

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

*Defined in [xterm.d.ts:1281](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1281)*

___

###  cursorX

• **cursorX**: *number*

*Defined in [xterm.d.ts:1270](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1270)*

___

###  cursorY

• **cursorY**: *number*

*Defined in [xterm.d.ts:1264](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1264)*

___

###  length

• **length**: *number*

*Defined in [xterm.d.ts:1286](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1286)*

___

###  type

• **type**: *"normal" | "alternate"*

*Defined in [xterm.d.ts:1257](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1257)*

___

###  viewportY

• **viewportY**: *number*

*Defined in [xterm.d.ts:1275](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1275)*

## Methods

###  getLine

▸ **getLine**(`y`: number): *[IBufferLine]({% link _docs/api/terminal/interfaces/ibufferline.md %}) | undefined*

*Defined in [xterm.d.ts:1298](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1298)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`y` | number | The line index to get.  |

**Returns:** *[IBufferLine]({% link _docs/api/terminal/interfaces/ibufferline.md %}) | undefined*

___

###  getNullCell

▸ **getNullCell**(): *[IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %})*

*Defined in [xterm.d.ts:1305](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1305)*

**Returns:** *[IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %})*
