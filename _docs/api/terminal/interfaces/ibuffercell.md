---
category: API-interfaces
layout: docs
---


***

[@xterm/xterm]({% link _docs/api/terminal/readme.md %}) / IBufferCell

# Interface: IBufferCell

Represents a single cell in the terminal's buffer.

## Methods

### getBgColor()

> **getBgColor**(): `number`

Gets a cell's background color number, this differs depending on what the
color mode of the cell is:

- Default: This should be 0, representing the default background color
  (CSI 49 m).
- Palette: This is a number from 0 to 255 of ANSI colors
  (CSI 4(0-7) m, CSI 10(0-7) m, CSI 48 ; 5 ; 0-255 m).
- RGB: A hex value representing a 'true color': 0xRRGGBB
  (CSI 4 8 ; 2 ; Pi ; Pr ; Pg ; Pb)

#### Returns

`number`

#### Source

[xterm.d.ts:1661](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1661)

***

### getBgColorMode()

> **getBgColorMode**(): `number`

Gets the number representation of the background color mode, this can be
used to perform quick comparisons of 2 cells to see if they're the same.
Use `isBgRGB`, `isBgPalette` and `isBgDefault` to check what color mode
a cell is.

#### Returns

`number`

#### Source

[xterm.d.ts:1635](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1635)

***

### getChars()

> **getChars**(): `string`

The character(s) within the cell. Examples of what this can contain:

- A normal width character
- A wide character (eg. CJK)
- An emoji

#### Returns

`string`

#### Source

[xterm.d.ts:1613](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1613)

***

### getCode()

> **getCode**(): `number`

Gets the UTF32 codepoint of single characters, if content is a combined
string it returns the codepoint of the last character in the string.

#### Returns

`number`

#### Source

[xterm.d.ts:1619](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1619)

***

### getFgColor()

> **getFgColor**(): `number`

Gets a cell's foreground color number, this differs depending on what the
color mode of the cell is:

- Default: This should be 0, representing the default foreground color
  (CSI 39 m).
- Palette: This is a number from 0 to 255 of ANSI colors (CSI 3(0-7) m,
  CSI 9(0-7) m, CSI 38 ; 5 ; 0-255 m).
- RGB: A hex value representing a 'true color': 0xRRGGBB.
  (CSI 3 8 ; 2 ; Pi ; Pr ; Pg ; Pb)

#### Returns

`number`

#### Source

[xterm.d.ts:1648](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1648)

***

### getFgColorMode()

> **getFgColorMode**(): `number`

Gets the number representation of the foreground color mode, this can be
used to perform quick comparisons of 2 cells to see if they're the same.
Use `isFgRGB`, `isFgPalette` and `isFgDefault` to check what color mode
a cell is.

#### Returns

`number`

#### Source

[xterm.d.ts:1627](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1627)

***

### getWidth()

> **getWidth**(): `number`

The width of the character. Some examples:

- `1` for most cells.
- `2` for wide character like CJK glyphs.
- `0` for cells immediately following cells with a width of `2`.

#### Returns

`number`

#### Source

[xterm.d.ts:1604](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1604)

***

### isAttributeDefault()

> **isAttributeDefault**(): `boolean`

Whether the cell has the default attribute (no color or style).

#### Returns

`boolean`

#### Source

[xterm.d.ts:1696](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1696)

***

### isBgDefault()

> **isBgDefault**(): `boolean`

Whether the cell is using the default background color mode.

#### Returns

`boolean`

#### Source

[xterm.d.ts:1693](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1693)

***

### isBgPalette()

> **isBgPalette**(): `boolean`

Whether the cell is using the palette background color mode.

#### Returns

`boolean`

#### Source

[xterm.d.ts:1689](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1689)

***

### isBgRGB()

> **isBgRGB**(): `boolean`

Whether the cell is using the RGB background color mode.

#### Returns

`boolean`

#### Source

[xterm.d.ts:1685](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1685)

***

### isBlink()

> **isBlink**(): `number`

Whether the cell has the blink attribute (CSI 5 m).

#### Returns

`number`

#### Source

[xterm.d.ts:1672](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1672)

***

### isBold()

> **isBold**(): `number`

Whether the cell has the bold attribute (CSI 1 m).

#### Returns

`number`

#### Source

[xterm.d.ts:1664](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1664)

***

### isDim()

> **isDim**(): `number`

Whether the cell has the dim attribute (CSI 2 m).

#### Returns

`number`

#### Source

[xterm.d.ts:1668](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1668)

***

### isFgDefault()

> **isFgDefault**(): `boolean`

Whether the cell is using the default foreground color mode.

#### Returns

`boolean`

#### Source

[xterm.d.ts:1691](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1691)

***

### isFgPalette()

> **isFgPalette**(): `boolean`

Whether the cell is using the palette foreground color mode.

#### Returns

`boolean`

#### Source

[xterm.d.ts:1687](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1687)

***

### isFgRGB()

> **isFgRGB**(): `boolean`

Whether the cell is using the RGB foreground color mode.

#### Returns

`boolean`

#### Source

[xterm.d.ts:1683](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1683)

***

### isInverse()

> **isInverse**(): `number`

Whether the cell has the inverse attribute (CSI 7 m).

#### Returns

`number`

#### Source

[xterm.d.ts:1674](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1674)

***

### isInvisible()

> **isInvisible**(): `number`

Whether the cell has the invisible attribute (CSI 8 m).

#### Returns

`number`

#### Source

[xterm.d.ts:1676](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1676)

***

### isItalic()

> **isItalic**(): `number`

Whether the cell has the italic attribute (CSI 3 m).

#### Returns

`number`

#### Source

[xterm.d.ts:1666](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1666)

***

### isOverline()

> **isOverline**(): `number`

Whether the cell has the overline attribute (CSI 53 m).

#### Returns

`number`

#### Source

[xterm.d.ts:1680](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1680)

***

### isStrikethrough()

> **isStrikethrough**(): `number`

Whether the cell has the strikethrough attribute (CSI 9 m).

#### Returns

`number`

#### Source

[xterm.d.ts:1678](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1678)

***

### isUnderline()

> **isUnderline**(): `number`

Whether the cell has the underline attribute (CSI 4 m).

#### Returns

`number`

#### Source

[xterm.d.ts:1670](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1670)
