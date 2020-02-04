---
title: IBufferLine
category: API-interfaces
layout: docs
---


# Interface: IBufferLine

Represents a line in the terminal's buffer.

## Hierarchy

**IBufferLine**

## Index

### Properties

* [isWrapped]({% link _docs/api/terminal/interfaces/ibufferline.md %}#iswrapped)
* [length]({% link _docs/api/terminal/interfaces/ibufferline.md %}#length)

### Methods

* [getCell]({% link _docs/api/terminal/interfaces/ibufferline.md %}#getcell)
* [translateToString]({% link _docs/api/terminal/interfaces/ibufferline.md %}#translatetostring)

---

## Properties

<a id="iswrapped"></a>

###  isWrapped

**● isWrapped**: *`boolean`*

*Defined in [xterm.d.ts:1136](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1136)*

Whether the line is wrapped from the previous line.

___
<a id="length"></a>

###  length

**● length**: *`number`*

*Defined in [xterm.d.ts:1142](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1142)*

The length of the line, all call to getCell beyond the length will result in `undefined`.

___

## Methods

<a id="getcell"></a>

###  getCell

▸ **getCell**(x: *`number`*, cell?: *[IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %})*): [IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %}) \| `undefined`

*Defined in [xterm.d.ts:1156](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1156)*

Gets a cell from the line, or undefined if the line index does not exist.

Note that the result of this function should be used immediately after calling as when the terminal updates it could lead to unexpected behavior.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| x | `number` |  The character index to get. |
| `Optional` cell | [IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %}) |  Optional cell object to load data into for performance reasons. This is mainly useful when every cell in the buffer is being looped over to avoid creating new objects for every cell. |

**Returns:** [IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %}) \| `undefined`

___
<a id="translatetostring"></a>

###  translateToString

▸ **translateToString**(trimRight?: *`boolean`*, startColumn?: *`number`*, endColumn?: *`number`*): `string`

*Defined in [xterm.d.ts:1166](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1166)*

Gets the line as a string. Note that this is gets only the string for the line, not taking isWrapped into account.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` trimRight | `boolean` |  Whether to trim any whitespace at the right of the line. |
| `Optional` startColumn | `number` |  The column to start from (inclusive). |
| `Optional` endColumn | `number` |  The column to end at (exclusive). |

**Returns:** `string`

___

