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

*Defined in [xterm.d.ts:1636](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1636)*

___

###  versions

• **versions**: *ReadonlyArray‹string›*

*Defined in [xterm.d.ts:1631](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1631)*

## Methods

###  register

▸ **register**(`provider`: [IUnicodeVersionProvider]({% link _docs/api/terminal/interfaces/iunicodeversionprovider.md %})): *void*

*Defined in [xterm.d.ts:1626](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1626)*

**Parameters:**

Name | Type |
------ | ------ |
`provider` | [IUnicodeVersionProvider]({% link _docs/api/terminal/interfaces/iunicodeversionprovider.md %}) |

**Returns:** *void*
