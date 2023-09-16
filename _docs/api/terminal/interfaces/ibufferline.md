---
title: IBufferLine
category: API-interfaces
layout: docs
---


# Interface: IBufferLine

## Hierarchy

* **IBufferLine**

## Index

### Properties

* [isWrapped]({% link _docs/api/terminal/interfaces/ibufferline.md %}#iswrapped)
* [length]({% link _docs/api/terminal/interfaces/ibufferline.md %}#length)

### Methods

* [getCell]({% link _docs/api/terminal/interfaces/ibufferline.md %}#getcell)
* [translateToString]({% link _docs/api/terminal/interfaces/ibufferline.md %}#translatetostring)

## Properties

###  isWrapped

• **isWrapped**: *boolean*

*Defined in [xterm.d.ts:1495](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1495)*

___

###  length

• **length**: *number*

*Defined in [xterm.d.ts:1503](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1503)*

## Methods

###  getCell

▸ **getCell**(`x`: number, `cell?`: [IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %})): *[IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %}) | undefined*

*Defined in [xterm.d.ts:1517](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1517)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | The character index to get. |
`cell?` | [IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %}) | Optional cell object to load data into for performance reasons. This is mainly useful when every cell in the buffer is being looped over to avoid creating new objects for every cell.  |

**Returns:** *[IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %}) | undefined*

___

###  translateToString

▸ **translateToString**(`trimRight?`: boolean, `startColumn?`: number, `endColumn?`: number): *string*

*Defined in [xterm.d.ts:1527](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1527)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`trimRight?` | boolean | Whether to trim any whitespace at the right of the line. |
`startColumn?` | number | The column to start from (inclusive). |
`endColumn?` | number | The column to end at (exclusive).  |

**Returns:** *string*
