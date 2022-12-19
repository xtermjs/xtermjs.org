---
title: IUnicodeHandling
category: API-interfaces
layout: docs
---


# Interface: IUnicodeHandling

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

*Defined in [xterm.d.ts:1647](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1647)*

___

###  versions

• **versions**: *ReadonlyArray‹string›*

*Defined in [xterm.d.ts:1642](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1642)*

## Methods

###  register

▸ **register**(`provider`: [IUnicodeVersionProvider]({% link _docs/api/terminal/interfaces/iunicodeversionprovider.md %})): *void*

*Defined in [xterm.d.ts:1637](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1637)*

**Parameters:**

Name | Type |
------ | ------ |
`provider` | [IUnicodeVersionProvider]({% link _docs/api/terminal/interfaces/iunicodeversionprovider.md %}) |

**Returns:** *void*
