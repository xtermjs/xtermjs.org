---
category: API-interfaces
layout: docs
---


***

[@xterm/xterm]({% link _docs/api/terminal/readme.md %}) / IUnicodeVersionProvider

# Interface: IUnicodeVersionProvider

(EXPERIMENTAL) Unicode version provider.
Used to register custom Unicode versions with `Terminal.unicode.register`.

## Properties

### version

> **`readonly`** **version**: `string`

String indicating the Unicode version provided.

#### Source

[xterm.d.ts:1816](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1816)

## Methods

### charProperties()

> **charProperties**(`codepoint`, `preceding`): `number`

#### Parameters

• **codepoint**: `number`

• **preceding**: `number`

#### Returns

`number`

#### Source

[xterm.d.ts:1822](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1822)

***

### wcwidth()

> **wcwidth**(`codepoint`): `0` \| `1` \| `2`

Unicode version dependent wcwidth implementation.

#### Parameters

• **codepoint**: `number`

#### Returns

`0` \| `1` \| `2`

#### Source

[xterm.d.ts:1821](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1821)
