---
title: IUnicodeVersionProvider
category: API-interfaces
layout: docs
---


# Interface: IUnicodeVersionProvider

## Hierarchy

* **IUnicodeVersionProvider**

## Index

### Properties

* [version]({% link _docs/api/terminal/interfaces/iunicodeversionprovider.md %}#version)

### Methods

* [charProperties]({% link _docs/api/terminal/interfaces/iunicodeversionprovider.md %}#charproperties)
* [wcwidth]({% link _docs/api/terminal/interfaces/iunicodeversionprovider.md %}#wcwidth)

## Properties

###  version

• **version**: *string*

*Defined in [xterm.d.ts:1770](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1770)*

## Methods

###  charProperties

▸ **charProperties**(`codepoint`: number, `preceding`: number): *number*

*Defined in [xterm.d.ts:1776](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1776)*

**Parameters:**

Name | Type |
------ | ------ |
`codepoint` | number |
`preceding` | number |

**Returns:** *number*

___

###  wcwidth

▸ **wcwidth**(`codepoint`: number): *0 | 1 | 2*

*Defined in [xterm.d.ts:1775](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1775)*

**Parameters:**

Name | Type |
------ | ------ |
`codepoint` | number |

**Returns:** *0 | 1 | 2*
