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

[xterm.d.ts:1842](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1842)

***

### versions

> **`readonly`** **versions**: readonly `string`[]

Registered Unicode versions.

#### Source

[xterm.d.ts:1837](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1837)

## Methods

### register()

> **register**(`provider`): `void`

Register a custom Unicode version provider.

#### Parameters

• **provider**: [`IUnicodeVersionProvider`]({% link _docs/api/terminal/interfaces/iunicodeversionprovider.md %})

#### Returns

`void`

#### Source

[xterm.d.ts:1832](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1832)
