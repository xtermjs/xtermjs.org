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

* [Terminal]({% link _docs/api/terminal/classes/terminal.md %})

### Interfaces

* [IBuffer]({% link _docs/api/terminal/interfaces/ibuffer.md %})
* [IBufferCell]({% link _docs/api/terminal/interfaces/ibuffercell.md %})
* [IBufferLine]({% link _docs/api/terminal/interfaces/ibufferline.md %})
* [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})
* [IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})
* [IFunctionIdentifier]({% link _docs/api/terminal/interfaces/ifunctionidentifier.md %})
* [ILinkMatcherOptions]({% link _docs/api/terminal/interfaces/ilinkmatcheroptions.md %})
* [ILocalizableStrings]({% link _docs/api/terminal/interfaces/ilocalizablestrings.md %})
* [IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})
* [IParser]({% link _docs/api/terminal/interfaces/iparser.md %})
* [ISelectionPosition]({% link _docs/api/terminal/interfaces/iselectionposition.md %})
* [ITerminalAddon]({% link _docs/api/terminal/interfaces/iterminaladdon.md %})
* [ITerminalOptions]({% link _docs/api/terminal/interfaces/iterminaloptions.md %})
* [ITheme]({% link _docs/api/terminal/interfaces/itheme.md %})
* [IUnicodeHandling]({% link _docs/api/terminal/interfaces/iunicodehandling.md %})
* [IUnicodeVersionProvider]({% link _docs/api/terminal/interfaces/iunicodeversionprovider.md %})
* [IViewportRange]({% link _docs/api/terminal/interfaces/iviewportrange.md %})
* [IViewportRangePosition]({% link _docs/api/terminal/interfaces/iviewportrangeposition.md %})
* [IWindowOptions]({% link _docs/api/terminal/interfaces/iwindowoptions.md %})

### Type aliases

* [FontWeight]({% link _docs/api/terminal/modules/xterm.md %}#fontweight)
* [LogLevel]({% link _docs/api/terminal/modules/xterm.md %}#loglevel)
* [RendererType]({% link _docs/api/terminal/modules/xterm.md %}#renderertype)

---

## Type aliases

<a id="fontweight"></a>

###  FontWeight

**Ƭ FontWeight**: *"normal" \| "bold" \| "100" \| "200" \| "300" \| "400" \| "500" \| "600" \| "700" \| "800" \| "900"*

*Defined in [xterm.d.ts:16](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L16)*

A string representing text font weight.

___
<a id="loglevel"></a>

###  LogLevel

**Ƭ LogLevel**: *"debug" \| "info" \| "warn" \| "error" \| "off"*

*Defined in [xterm.d.ts:21](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L21)*

A string representing log level.

___
<a id="renderertype"></a>

###  RendererType

**Ƭ RendererType**: *"dom" \| "canvas"*

*Defined in [xterm.d.ts:26](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L26)*

A string representing a renderer type.

___

