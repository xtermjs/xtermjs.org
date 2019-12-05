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

### Methods

* [getCell]({% link _docs/api/terminal/interfaces/ibufferline.md %}#getcell)
* [translateToString]({% link _docs/api/terminal/interfaces/ibufferline.md %}#translatetostring)

---

## Properties

<a id="iswrapped"></a>

###  isWrapped

**● isWrapped**: *`boolean`*

*Defined in [xterm.d.ts:973](https://github.com/xtermjs/xterm.js/blob/4.3.0/typings/xterm.d.ts#L973)*

Whether the line is wrapped from the previous line.

___

## Methods

<a id="getcell"></a>

###  getCell

▸ **getCell**(x: *`number`*): [IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %}) \| `undefined`

*Defined in [xterm.d.ts:984](https://github.com/xtermjs/xterm.js/blob/4.3.0/typings/xterm.d.ts#L984)*

Gets a cell from the line, or undefined if the line index does not exist.

Note that the result of this function should be used immediately after calling as when the terminal updates it could lead to unexpected behavior.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| x | `number` |  The character index to get. |

**Returns:** [IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %}) \| `undefined`

___
<a id="translatetostring"></a>

###  translateToString

▸ **translateToString**(trimRight?: *`boolean`*, startColumn?: *`number`*, endColumn?: *`number`*): `string`

*Defined in [xterm.d.ts:994](https://github.com/xtermjs/xterm.js/blob/4.3.0/typings/xterm.d.ts#L994)*

Gets the line as a string. Note that this is gets only the string for the line, not taking isWrapped into account.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` trimRight | `boolean` |  Whether to trim any whitespace at the right of the line. |
| `Optional` startColumn | `number` |  The column to start from (inclusive). |
| `Optional` endColumn | `number` |  The column to end at (exclusive). |

**Returns:** `string`

___

