---
title: IUnicodeVersionProvider
category: API-interfaces
layout: docs
---


# Interface: IUnicodeVersionProvider

(EXPERIMENTAL) Unicode version provider.
Used to register custom Unicode versions with `Terminal.unicode.register`.

## Hierarchy

* **IUnicodeVersionProvider**

## Index

### Properties

* [version]({% link _docs/api/terminal/interfaces/iunicodeversionprovider.md %}#version)

### Methods

* [wcwidth]({% link _docs/api/terminal/interfaces/iunicodeversionprovider.md %}#wcwidth)

## Properties

###  version

• **version**: *string*

*Defined in [xterm.d.ts:1579](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1579)*

String indicating the Unicode version provided.

## Methods

###  wcwidth

▸ **wcwidth**(`codepoint`: number): *0 | 1 | 2*

*Defined in [xterm.d.ts:1584](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1584)*

Unicode version dependent wcwidth implementation.

**Parameters:**

Name | Type |
------ | ------ |
`codepoint` | number |

**Returns:** *0 | 1 | 2*
