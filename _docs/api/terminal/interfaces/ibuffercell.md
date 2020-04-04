---
title: IBufferCell
category: API-interfaces
layout: docs
---


# Interface: IBufferCell

Represents a single cell in the terminal's buffer.

## Hierarchy

* **IBufferCell**

## Index

### Methods

* [getBgColor]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#getbgcolor)
* [getBgColorMode]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#getbgcolormode)
* [getChars]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#getchars)
* [getCode]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#getcode)
* [getFgColor]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#getfgcolor)
* [getFgColorMode]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#getfgcolormode)
* [getWidth]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#getwidth)
* [isAttributeDefault]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#isattributedefault)
* [isBgDefault]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#isbgdefault)
* [isBgPalette]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#isbgpalette)
* [isBgRGB]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#isbgrgb)
* [isBlink]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#isblink)
* [isBold]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#isbold)
* [isDim]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#isdim)
* [isFgDefault]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#isfgdefault)
* [isFgPalette]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#isfgpalette)
* [isFgRGB]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#isfgrgb)
* [isInverse]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#isinverse)
* [isInvisible]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#isinvisible)
* [isItalic]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#isitalic)
* [isUnderline]({% link _docs/api/terminal/interfaces/ibuffercell.md %}#isunderline)

## Methods

###  getBgColor

▸ **getBgColor**(): *number*

*Defined in [xterm.d.ts:1237](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1237)*

Gets a cell's background color number, this differs depending on what the
color mode of the cell is:

- Default: This should be 0, representing the default background color
  (CSI 49 m).
- Palette: This is a number from 0 to 255 of ANSI colors
  (CSI 4(0-7) m, CSI 10(0-7) m, CSI 48 ; 5 ; 0-255 m).
- RGB: A hex value representing a 'true color': 0xRRGGBB
  (CSI 4 8 ; 2 ; Pi ; Pr ; Pg ; Pb)

**Returns:** *number*

___

###  getBgColorMode

▸ **getBgColorMode**(): *number*

*Defined in [xterm.d.ts:1211](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1211)*

Gets the number representation of the background color mode, this can be
used to perform quick comparisons of 2 cells to see if they're the same.
Use `isBgRGB`, `isBgPalette` and `isBgDefault` to check what color mode
a cell is.

**Returns:** *number*

___

###  getChars

▸ **getChars**(): *string*

*Defined in [xterm.d.ts:1189](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1189)*

The character(s) within the cell. Examples of what this can contain:

- A normal width character
- A wide character (eg. CJK)
- An emoji

**Returns:** *string*

___

###  getCode

▸ **getCode**(): *number*

*Defined in [xterm.d.ts:1195](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1195)*

Gets the UTF32 codepoint of single characters, if content is a combined
string it returns the codepoint of the last character in the string.

**Returns:** *number*

___

###  getFgColor

▸ **getFgColor**(): *number*

*Defined in [xterm.d.ts:1224](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1224)*

Gets a cell's foreground color number, this differs depending on what the
color mode of the cell is:

- Default: This should be 0, representing the default foreground color
  (CSI 39 m).
- Palette: This is a number from 0 to 255 of ANSI colors (CSI 3(0-7) m,
  CSI 9(0-7) m, CSI 38 ; 5 ; 0-255 m).
- RGB: A hex value representing a 'true color': 0xRRGGBB.
  (CSI 3 8 ; 2 ; Pi ; Pr ; Pg ; Pb)

**Returns:** *number*

___

###  getFgColorMode

▸ **getFgColorMode**(): *number*

*Defined in [xterm.d.ts:1203](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1203)*

Gets the number representation of the foreground color mode, this can be
used to perform quick comparisons of 2 cells to see if they're the same.
Use `isFgRGB`, `isFgPalette` and `isFgDefault` to check what color mode
a cell is.

**Returns:** *number*

___

###  getWidth

▸ **getWidth**(): *number*

*Defined in [xterm.d.ts:1180](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1180)*

The width of the character. Some examples:

- `1` for most cells.
- `2` for wide character like CJK glyphs.
- `0` for cells immediately following cells with a width of `2`.

**Returns:** *number*

___

###  isAttributeDefault

▸ **isAttributeDefault**(): *boolean*

*Defined in [xterm.d.ts:1268](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1268)*

Whether the cell has the default attribute (no color or style).

**Returns:** *boolean*

___

###  isBgDefault

▸ **isBgDefault**(): *boolean*

*Defined in [xterm.d.ts:1265](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1265)*

Whether the cell is using the default background color mode.

**Returns:** *boolean*

___

###  isBgPalette

▸ **isBgPalette**(): *boolean*

*Defined in [xterm.d.ts:1261](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1261)*

Whether the cell is using the palette background color mode.

**Returns:** *boolean*

___

###  isBgRGB

▸ **isBgRGB**(): *boolean*

*Defined in [xterm.d.ts:1257](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1257)*

Whether the cell is using the RGB background color mode.

**Returns:** *boolean*

___

###  isBlink

▸ **isBlink**(): *number*

*Defined in [xterm.d.ts:1248](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1248)*

Whether the cell has the inverse attribute (CSI 5 m).

**Returns:** *number*

___

###  isBold

▸ **isBold**(): *number*

*Defined in [xterm.d.ts:1240](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1240)*

Whether the cell has the bold attribute (CSI 1 m).

**Returns:** *number*

___

###  isDim

▸ **isDim**(): *number*

*Defined in [xterm.d.ts:1244](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1244)*

Whether the cell has the inverse attribute (CSI 2 m).

**Returns:** *number*

___

###  isFgDefault

▸ **isFgDefault**(): *boolean*

*Defined in [xterm.d.ts:1263](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1263)*

Whether the cell is using the default foreground color mode.

**Returns:** *boolean*

___

###  isFgPalette

▸ **isFgPalette**(): *boolean*

*Defined in [xterm.d.ts:1259](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1259)*

Whether the cell is using the palette foreground color mode.

**Returns:** *boolean*

___

###  isFgRGB

▸ **isFgRGB**(): *boolean*

*Defined in [xterm.d.ts:1255](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1255)*

Whether the cell is using the RGB foreground color mode.

**Returns:** *boolean*

___

###  isInverse

▸ **isInverse**(): *number*

*Defined in [xterm.d.ts:1250](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1250)*

Whether the cell has the inverse attribute (CSI 7 m).

**Returns:** *number*

___

###  isInvisible

▸ **isInvisible**(): *number*

*Defined in [xterm.d.ts:1252](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1252)*

Whether the cell has the inverse attribute (CSI 8 m).

**Returns:** *number*

___

###  isItalic

▸ **isItalic**(): *number*

*Defined in [xterm.d.ts:1242](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1242)*

Whether the cell has the inverse attribute (CSI 3 m).

**Returns:** *number*

___

###  isUnderline

▸ **isUnderline**(): *number*

*Defined in [xterm.d.ts:1246](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1246)*

Whether the cell has the underline attribute (CSI 4 m).

**Returns:** *number*
