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

*Defined in [xterm.d.ts:1288](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1288)*

___

###  cursorX

• **cursorX**: *number*

*Defined in [xterm.d.ts:1277](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1277)*

___

###  cursorY

• **cursorY**: *number*

*Defined in [xterm.d.ts:1271](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1271)*

___

###  length

• **length**: *number*

*Defined in [xterm.d.ts:1293](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1293)*

___

###  type

• **type**: *"normal" | "alternate"*

*Defined in [xterm.d.ts:1264](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1264)*

___

###  viewportY

• **viewportY**: *number*

*Defined in [xterm.d.ts:1282](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1282)*

## Methods

###  getLine

▸ **getLine**(`y`: number): *[IBufferLine]({% link _docs/api/terminal/interfaces/ibufferline.md %}) | undefined*

*Defined in [xterm.d.ts:1305](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1305)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`y` | number | The line index to get.  |

**Returns:** *[IBufferLine]({% link _docs/api/terminal/interfaces/ibufferline.md %}) | undefined*

___

###  getNullCell

▸ **getNullCell**(): *[IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %})*

*Defined in [xterm.d.ts:1312](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1312)*

**Returns:** *[IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %})*
