---
title: "xterm"
category: terminal-modules
layout: docs
---

*__license__*: MIT

This contains the type declarations for the xterm.js library. Note that some interfaces differ between this file and the actual implementation in src/, that's because this file declares the _public_ API which is intended to be stable and consumed by external programs.

## Index

### Classes

* [Terminal]({% link _docs/api/terminal/classes/terminal.md %})

### Interfaces

* [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})
* [IEventEmitter]({% link _docs/api/terminal/interfaces/ieventemitter.md %})
* [ILinkMatcherOptions]({% link _docs/api/terminal/interfaces/ilinkmatcheroptions.md %})
* [ILocalizableStrings]({% link _docs/api/terminal/interfaces/ilocalizablestrings.md %})
* [IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})
* [ITerminalOptions]({% link _docs/api/terminal/interfaces/iterminaloptions.md %})
* [ITheme]({% link _docs/api/terminal/interfaces/itheme.md %})

### Type aliases

* [FontWeight]({% link _docs/api/terminal/modules/xterm.md %}#fontweight)

---

## Type aliases

<a id="fontweight"></a>

###  FontWeight

**ΤFontWeight**: * "normal" &#124; "bold" &#124; "100" &#124; "200" &#124; "300" &#124; "400" &#124; "500" &#124; "600" &#124; "700" &#124; "800" &#124; "900"
*

*Defined in [xterm.d.ts:14](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L14)*

A string representing text font weight.

___

