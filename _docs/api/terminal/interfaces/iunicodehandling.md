---
title: IUnicodeHandling
category: API-interfaces
layout: docs
---


# Interface: IUnicodeHandling

(EXPERIMENTAL) Unicode handling interface.

## Hierarchy

* **IUnicodeHandling**

## Index

### Properties

* [activeVersion]({% link _docs/api/terminal/interfaces/iunicodehandling.md %}#activeversion)
* [versions]({% link _docs/api/terminal/interfaces/iunicodehandling.md %}#versions)

### Methods

* [register]({% link _docs/api/terminal/interfaces/iunicodehandling.md %}#register)

## Properties

###  activeVersion

• **activeVersion**: *string*

*Defined in [xterm.d.ts:1604](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1604)*

Getter/setter for active Unicode version.

___

###  versions

• **versions**: *ReadonlyArray‹string›*

*Defined in [xterm.d.ts:1599](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1599)*

Registered Unicode versions.

## Methods

###  register

▸ **register**(`provider`: [IUnicodeVersionProvider]({% link _docs/api/terminal/interfaces/iunicodeversionprovider.md %})): *void*

*Defined in [xterm.d.ts:1594](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1594)*

Register a custom Unicode version provider.

**Parameters:**

Name | Type |
------ | ------ |
`provider` | [IUnicodeVersionProvider]({% link _docs/api/terminal/interfaces/iunicodeversionprovider.md %}) |

**Returns:** *void*
