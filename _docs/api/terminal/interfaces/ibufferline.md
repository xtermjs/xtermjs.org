---
category: API-interfaces
layout: docs
---


***

[@xterm/xterm]({% link _docs/api/terminal/readme.md %}) / IBufferLine

# Interface: IBufferLine

Represents a line in the terminal's buffer.

## Properties

### isWrapped

> **`readonly`** **isWrapped**: `boolean`

Whether the line is wrapped from the previous line.

#### Source

[xterm.d.ts:1541](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1541)

***

### length

> **`readonly`** **length**: `number`

The length of the line, all call to getCell beyond the length will result
in `undefined`. Note that this may exceed columns as the line array may
not be trimmed after a resize, compare against [Terminal.cols]({% link _docs/api/terminal/classes/terminal.md %}#cols) to
get the actual maximum length of a line.

#### Source

[xterm.d.ts:1549](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1549)

## Methods

### getCell()

> **getCell**(`x`, `cell`?): [`IBufferCell`]({% link _docs/api/terminal/interfaces/ibuffercell.md %})

Gets a cell from the line, or undefined if the line index does not exist.

Note that the result of this function should be used immediately after
calling as when the terminal updates it could lead to unexpected
behavior.

#### Parameters

• **x**: `number`

The character index to get.

• **cell?**: [`IBufferCell`]({% link _docs/api/terminal/interfaces/ibuffercell.md %})

Optional cell object to load data into for performance
reasons. This is mainly useful when every cell in the buffer is being
looped over to avoid creating new objects for every cell.

#### Returns

[`IBufferCell`]({% link _docs/api/terminal/interfaces/ibuffercell.md %})

#### Source

[xterm.d.ts:1563](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1563)

***

### translateToString()

> **translateToString**(`trimRight`?, `startColumn`?, `endColumn`?): `string`

Gets the line as a string. Note that this is gets only the string for the
line, not taking isWrapped into account.

#### Parameters

• **trimRight?**: `boolean`

Whether to trim any whitespace at the right of the line.

• **startColumn?**: `number`

The column to start from (inclusive).

• **endColumn?**: `number`

The column to end at (exclusive).

#### Returns

`string`

#### Source

[xterm.d.ts:1573](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1573)
