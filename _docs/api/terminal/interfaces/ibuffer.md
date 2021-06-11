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

*Defined in [xterm.d.ts:1268](https://github.com/meganrogge/xterm.js/blob/4.13.0/typings/xterm.d.ts#L1268)*

___

###  cursorX

• **cursorX**: *number*

*Defined in [xterm.d.ts:1257](https://github.com/meganrogge/xterm.js/blob/4.13.0/typings/xterm.d.ts#L1257)*

___

###  cursorY

• **cursorY**: *number*

*Defined in [xterm.d.ts:1251](https://github.com/meganrogge/xterm.js/blob/4.13.0/typings/xterm.d.ts#L1251)*

___

###  length

• **length**: *number*

*Defined in [xterm.d.ts:1273](https://github.com/meganrogge/xterm.js/blob/4.13.0/typings/xterm.d.ts#L1273)*

___

###  type

• **type**: *"normal" | "alternate"*

*Defined in [xterm.d.ts:1244](https://github.com/meganrogge/xterm.js/blob/4.13.0/typings/xterm.d.ts#L1244)*

___

###  viewportY

• **viewportY**: *number*

*Defined in [xterm.d.ts:1262](https://github.com/meganrogge/xterm.js/blob/4.13.0/typings/xterm.d.ts#L1262)*

## Methods

###  getLine

▸ **getLine**(`y`: number): *[IBufferLine]({% link _docs/api/terminal/interfaces/ibufferline.md %}) | undefined*

*Defined in [xterm.d.ts:1285](https://github.com/meganrogge/xterm.js/blob/4.13.0/typings/xterm.d.ts#L1285)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`y` | number | The line index to get.  |

**Returns:** *[IBufferLine]({% link _docs/api/terminal/interfaces/ibufferline.md %}) | undefined*

___

###  getNullCell

▸ **getNullCell**(): *[IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %})*

*Defined in [xterm.d.ts:1292](https://github.com/meganrogge/xterm.js/blob/4.13.0/typings/xterm.d.ts#L1292)*

**Returns:** *[IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %})*
