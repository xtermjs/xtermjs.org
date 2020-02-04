---
title: IUnicodeHandling
category: API-interfaces
layout: docs
---


# Interface: IUnicodeHandling

(EXPERIMENTAL) Unicode handling interface.

## Hierarchy

**IUnicodeHandling**

## Index

### Properties

* [activeVersion]({% link _docs/api/terminal/interfaces/iunicodehandling.md %}#activeversion)
* [versions]({% link _docs/api/terminal/interfaces/iunicodehandling.md %}#versions)

### Methods

* [register]({% link _docs/api/terminal/interfaces/iunicodehandling.md %}#register)

---

## Properties

<a id="activeversion"></a>

###  activeVersion

**● activeVersion**: *`string`*

*Defined in [xterm.d.ts:1417](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1417)*

Getter/setter for active Unicode version.

___
<a id="versions"></a>

###  versions

**● versions**: *`ReadonlyArray`<`string`>*

*Defined in [xterm.d.ts:1412](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1412)*

Registered Unicode versions.

___

## Methods

<a id="register"></a>

###  register

▸ **register**(provider: *[IUnicodeVersionProvider]({% link _docs/api/terminal/interfaces/iunicodeversionprovider.md %})*): `void`

*Defined in [xterm.d.ts:1407](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1407)*

Register a custom Unicode version provider.

**Parameters:**

| Name | Type |
| ------ | ------ |
| provider | [IUnicodeVersionProvider]({% link _docs/api/terminal/interfaces/iunicodeversionprovider.md %}) |

**Returns:** `void`

___

