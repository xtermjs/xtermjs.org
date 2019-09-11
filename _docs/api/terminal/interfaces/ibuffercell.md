---
title: IBufferCell
category: API-interfaces
layout: docs
---


# Interface: IBufferCell

Represents a single cell in the terminal's buffer.

## Hierarchy

**IBufferCell**

## Index

### Properties

* [char]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#char)
* [width]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#width)

---

## Properties

<a id="char"></a>

###  char

**● char**: *`string`*

*Defined in [xterm.d.ts:921](https://github.com/Tyriar/xterm.js/blob/4.0.0/typings/xterm.d.ts#L921)*

The character within the cell.

___
<a id="width"></a>

###  width

**● width**: *`number`*

*Defined in [xterm.d.ts:930](https://github.com/Tyriar/xterm.js/blob/4.0.0/typings/xterm.d.ts#L930)*

The width of the character. Some examples:

*   This is `1` for most cells.
*   This is `2` for wide character like CJK glyphs.
*   This is `0` for cells immediately following cells with a width of `2`.

___

