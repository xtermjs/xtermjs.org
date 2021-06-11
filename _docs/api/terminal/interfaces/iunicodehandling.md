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

*Defined in [xterm.d.ts:1623](https://github.com/meganrogge/xterm.js/blob/4.13.0/typings/xterm.d.ts#L1623)*

___

###  versions

• **versions**: *ReadonlyArray‹string›*

*Defined in [xterm.d.ts:1618](https://github.com/meganrogge/xterm.js/blob/4.13.0/typings/xterm.d.ts#L1618)*

## Methods

###  register

▸ **register**(`provider`: [IUnicodeVersionProvider]({% link _docs/api/terminal/interfaces/iunicodeversionprovider.md %})): *void*

*Defined in [xterm.d.ts:1613](https://github.com/meganrogge/xterm.js/blob/4.13.0/typings/xterm.d.ts#L1613)*

**Parameters:**

Name | Type |
------ | ------ |
`provider` | [IUnicodeVersionProvider]({% link _docs/api/terminal/interfaces/iunicodeversionprovider.md %}) |

**Returns:** *void*
