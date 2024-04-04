---
category: API-interfaces
layout: docs
---


***

[@xterm/xterm]({% link _docs/api/terminal/readme.md %}) / ITheme

# Interface: ITheme

Contains colors to theme the terminal with.

## Properties

### background?

> **`optional`** **background**: `string`

The default background color

#### Source

[xterm.d.ts:338](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L338)

***

### black?

> **`optional`** **black**: `string`

ANSI black (eg. `\x1b[30m`)

#### Source

[xterm.d.ts:353](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L353)

***

### blue?

> **`optional`** **blue**: `string`

ANSI blue (eg. `\x1b[34m`)

#### Source

[xterm.d.ts:361](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L361)

***

### brightBlack?

> **`optional`** **brightBlack**: `string`

ANSI bright black (eg. `\x1b[1;30m`)

#### Source

[xterm.d.ts:369](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L369)

***

### brightBlue?

> **`optional`** **brightBlue**: `string`

ANSI bright blue (eg. `\x1b[1;34m`)

#### Source

[xterm.d.ts:377](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L377)

***

### brightCyan?

> **`optional`** **brightCyan**: `string`

ANSI bright cyan (eg. `\x1b[1;36m`)

#### Source

[xterm.d.ts:381](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L381)

***

### brightGreen?

> **`optional`** **brightGreen**: `string`

ANSI bright green (eg. `\x1b[1;32m`)

#### Source

[xterm.d.ts:373](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L373)

***

### brightMagenta?

> **`optional`** **brightMagenta**: `string`

ANSI bright magenta (eg. `\x1b[1;35m`)

#### Source

[xterm.d.ts:379](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L379)

***

### brightRed?

> **`optional`** **brightRed**: `string`

ANSI bright red (eg. `\x1b[1;31m`)

#### Source

[xterm.d.ts:371](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L371)

***

### brightWhite?

> **`optional`** **brightWhite**: `string`

ANSI bright white (eg. `\x1b[1;37m`)

#### Source

[xterm.d.ts:383](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L383)

***

### brightYellow?

> **`optional`** **brightYellow**: `string`

ANSI bright yellow (eg. `\x1b[1;33m`)

#### Source

[xterm.d.ts:375](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L375)

***

### cursor?

> **`optional`** **cursor**: `string`

The cursor color

#### Source

[xterm.d.ts:340](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L340)

***

### cursorAccent?

> **`optional`** **cursorAccent**: `string`

The accent color of the cursor (fg color for a block cursor)

#### Source

[xterm.d.ts:342](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L342)

***

### cyan?

> **`optional`** **cyan**: `string`

ANSI cyan (eg. `\x1b[36m`)

#### Source

[xterm.d.ts:365](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L365)

***

### extendedAnsi?

> **`optional`** **extendedAnsi**: `string`[]

ANSI extended colors (16-255)

#### Source

[xterm.d.ts:385](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L385)

***

### foreground?

> **`optional`** **foreground**: `string`

The default foreground color

#### Source

[xterm.d.ts:336](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L336)

***

### green?

> **`optional`** **green**: `string`

ANSI green (eg. `\x1b[32m`)

#### Source

[xterm.d.ts:357](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L357)

***

### magenta?

> **`optional`** **magenta**: `string`

ANSI magenta (eg. `\x1b[35m`)

#### Source

[xterm.d.ts:363](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L363)

***

### red?

> **`optional`** **red**: `string`

ANSI red (eg. `\x1b[31m`)

#### Source

[xterm.d.ts:355](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L355)

***

### selectionBackground?

> **`optional`** **selectionBackground**: `string`

The selection background color (can be transparent)

#### Source

[xterm.d.ts:344](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L344)

***

### selectionForeground?

> **`optional`** **selectionForeground**: `string`

The selection foreground color

#### Source

[xterm.d.ts:346](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L346)

***

### selectionInactiveBackground?

> **`optional`** **selectionInactiveBackground**: `string`

The selection background color when the terminal does not have focus (can
be transparent)

#### Source

[xterm.d.ts:351](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L351)

***

### white?

> **`optional`** **white**: `string`

ANSI white (eg. `\x1b[37m`)

#### Source

[xterm.d.ts:367](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L367)

***

### yellow?

> **`optional`** **yellow**: `string`

ANSI yellow (eg. `\x1b[33m`)

#### Source

[xterm.d.ts:359](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L359)
