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

*Defined in [xterm.d.ts:1331](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1331)*

___

###  cursorX

• **cursorX**: *number*

*Defined in [xterm.d.ts:1320](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1320)*

___

###  cursorY

• **cursorY**: *number*

*Defined in [xterm.d.ts:1314](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1314)*

___

###  length

• **length**: *number*

*Defined in [xterm.d.ts:1336](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1336)*

___

###  type

• **type**: *"normal" | "alternate"*

*Defined in [xterm.d.ts:1307](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1307)*

___

###  viewportY

• **viewportY**: *number*

*Defined in [xterm.d.ts:1325](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1325)*

## Methods

###  getLine

▸ **getLine**(`y`: number): *[IBufferLine]({% link _docs/api/terminal/interfaces/ibufferline.md %}) | undefined*

*Defined in [xterm.d.ts:1348](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1348)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`y` | number | The line index to get.  |

**Returns:** *[IBufferLine]({% link _docs/api/terminal/interfaces/ibufferline.md %}) | undefined*

___

###  getNullCell

▸ **getNullCell**(): *[IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %})*

*Defined in [xterm.d.ts:1355](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1355)*

**Returns:** *[IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %})*
