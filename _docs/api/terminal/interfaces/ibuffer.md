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

*Defined in [xterm.d.ts:1426](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1426)*

___

###  cursorX

• **cursorX**: *number*

*Defined in [xterm.d.ts:1415](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1415)*

___

###  cursorY

• **cursorY**: *number*

*Defined in [xterm.d.ts:1409](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1409)*

___

###  length

• **length**: *number*

*Defined in [xterm.d.ts:1431](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1431)*

___

###  type

• **type**: *"normal" | "alternate"*

*Defined in [xterm.d.ts:1402](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1402)*

___

###  viewportY

• **viewportY**: *number*

*Defined in [xterm.d.ts:1420](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1420)*

## Methods

###  getLine

▸ **getLine**(`y`: number): *[IBufferLine]({% link _docs/api/terminal/interfaces/ibufferline.md %}) | undefined*

*Defined in [xterm.d.ts:1443](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1443)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`y` | number | The line index to get.  |

**Returns:** *[IBufferLine]({% link _docs/api/terminal/interfaces/ibufferline.md %}) | undefined*

___

###  getNullCell

▸ **getNullCell**(): *[IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %})*

*Defined in [xterm.d.ts:1450](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1450)*

**Returns:** *[IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %})*
