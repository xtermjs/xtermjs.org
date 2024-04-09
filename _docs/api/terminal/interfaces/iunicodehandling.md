---
category: API-interfaces
layout: docs
---


***

[@xterm/xterm]({% link _docs/api/terminal/readme.md %}) / IUnicodeHandling

# Interface: IUnicodeHandling

(EXPERIMENTAL) Unicode handling interface.

## Properties

### activeVersion

> **activeVersion**: `string`

Getter/setter for active Unicode version.

#### Source

[xterm.d.ts:1859](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1859)

***

### versions

> **`readonly`** **versions**: readonly `string`[]

Registered Unicode versions.

#### Source

[xterm.d.ts:1854](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1854)

## Methods

### register()

> **register**(`provider`): `void`

Register a custom Unicode version provider.

#### Parameters

• **provider**: [`IUnicodeVersionProvider`]({% link _docs/api/terminal/interfaces/iunicodeversionprovider.md %})

#### Returns

`void`

#### Source

[xterm.d.ts:1849](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1849)
