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

[xterm.d.ts:355](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L355)

***

### black?

> **`optional`** **black**: `string`

ANSI black (eg. `\x1b[30m`)

#### Source

[xterm.d.ts:370](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L370)

***

### blue?

> **`optional`** **blue**: `string`

ANSI blue (eg. `\x1b[34m`)

#### Source

[xterm.d.ts:378](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L378)

***

### brightBlack?

> **`optional`** **brightBlack**: `string`

ANSI bright black (eg. `\x1b[1;30m`)

#### Source

[xterm.d.ts:386](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L386)

***

### brightBlue?

> **`optional`** **brightBlue**: `string`

ANSI bright blue (eg. `\x1b[1;34m`)

#### Source

[xterm.d.ts:394](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L394)

***

### brightCyan?

> **`optional`** **brightCyan**: `string`

ANSI bright cyan (eg. `\x1b[1;36m`)

#### Source

[xterm.d.ts:398](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L398)

***

### brightGreen?

> **`optional`** **brightGreen**: `string`

ANSI bright green (eg. `\x1b[1;32m`)

#### Source

[xterm.d.ts:390](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L390)

***

### brightMagenta?

> **`optional`** **brightMagenta**: `string`

ANSI bright magenta (eg. `\x1b[1;35m`)

#### Source

[xterm.d.ts:396](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L396)

***

### brightRed?

> **`optional`** **brightRed**: `string`

ANSI bright red (eg. `\x1b[1;31m`)

#### Source

[xterm.d.ts:388](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L388)

***

### brightWhite?

> **`optional`** **brightWhite**: `string`

ANSI bright white (eg. `\x1b[1;37m`)

#### Source

[xterm.d.ts:400](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L400)

***

### brightYellow?

> **`optional`** **brightYellow**: `string`

ANSI bright yellow (eg. `\x1b[1;33m`)

#### Source

[xterm.d.ts:392](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L392)

***

### cursor?

> **`optional`** **cursor**: `string`

The cursor color

#### Source

[xterm.d.ts:357](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L357)

***

### cursorAccent?

> **`optional`** **cursorAccent**: `string`

The accent color of the cursor (fg color for a block cursor)

#### Source

[xterm.d.ts:359](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L359)

***

### cyan?

> **`optional`** **cyan**: `string`

ANSI cyan (eg. `\x1b[36m`)

#### Source

[xterm.d.ts:382](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L382)

***

### extendedAnsi?

> **`optional`** **extendedAnsi**: `string`[]

ANSI extended colors (16-255)

#### Source

[xterm.d.ts:402](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L402)

***

### foreground?

> **`optional`** **foreground**: `string`

The default foreground color

#### Source

[xterm.d.ts:353](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L353)

***

### green?

> **`optional`** **green**: `string`

ANSI green (eg. `\x1b[32m`)

#### Source

[xterm.d.ts:374](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L374)

***

### magenta?

> **`optional`** **magenta**: `string`

ANSI magenta (eg. `\x1b[35m`)

#### Source

[xterm.d.ts:380](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L380)

***

### red?

> **`optional`** **red**: `string`

ANSI red (eg. `\x1b[31m`)

#### Source

[xterm.d.ts:372](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L372)

***

### selectionBackground?

> **`optional`** **selectionBackground**: `string`

The selection background color (can be transparent)

#### Source

[xterm.d.ts:361](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L361)

***

### selectionForeground?

> **`optional`** **selectionForeground**: `string`

The selection foreground color

#### Source

[xterm.d.ts:363](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L363)

***

### selectionInactiveBackground?

> **`optional`** **selectionInactiveBackground**: `string`

The selection background color when the terminal does not have focus (can
be transparent)

#### Source

[xterm.d.ts:368](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L368)

***

### white?

> **`optional`** **white**: `string`

ANSI white (eg. `\x1b[37m`)

#### Source

[xterm.d.ts:384](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L384)

***

### yellow?

> **`optional`** **yellow**: `string`

ANSI yellow (eg. `\x1b[33m`)

#### Source

[xterm.d.ts:376](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L376)
