---
title: "xterm"
category: API-modules
layout: docs
---


# Module: "xterm"

*__license__*: MIT

This contains the type declarations for the xterm.js library. Note that some interfaces differ between this file and the actual implementation in src/, that's because this file declares the _public_ API which is intended to be stable and consumed by external programs.

## Index

### Classes

* [Terminal](../../classes/terminal)

### Interfaces

* [IDisposable](../../interfaces/idisposable)
* [IEventEmitter](../../interfaces/ieventemitter)
* [ILinkMatcherOptions](../../interfaces/ilinkmatcheroptions)
* [ILocalizableStrings](../../interfaces/ilocalizablestrings)
* [IMarker](../../interfaces/imarker)
* [ITerminalOptions](../../interfaces/iterminaloptions)
* [ITheme](../../interfaces/itheme)

### Type aliases

* [FontWeight](#fontweight)

---

## Type aliases

<a id="fontweight"></a>

###  FontWeight

**ΤFontWeight**: * "normal" &#124; "bold" &#124; "100" &#124; "200" &#124; "300" &#124; "400" &#124; "500" &#124; "600" &#124; "700" &#124; "800" &#124; "900"
*

*Defined in [xterm.d.ts:14](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L14)*

A string representing text font weight.

___

