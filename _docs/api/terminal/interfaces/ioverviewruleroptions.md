---
title: IOverviewRulerOptions
category: API-interfaces
layout: docs
---


# Interface: IOverviewRulerOptions

## Hierarchy

* **IOverviewRulerOptions**

## Index

### Properties

* [showBottomBorder]({% link _docs/api/terminal/interfaces/ioverviewruleroptions.md %}#optional-showbottomborder)
* [showTopBorder]({% link _docs/api/terminal/interfaces/ioverviewruleroptions.md %}#optional-showtopborder)
* [width]({% link _docs/api/terminal/interfaces/ioverviewruleroptions.md %}#optional-width)

## Properties

### `Optional` showBottomBorder

• **showBottomBorder**? : *boolean*

*Defined in [xterm.d.ts:650](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L650)*

Whether to show the bottom border of the overview ruler, which uses the
[ITheme.overviewRulerBorder]({% link _docs/api/terminal/interfaces/itheme.md %}#optional-overviewrulerborder) color.

___

### `Optional` showTopBorder

• **showTopBorder**? : *boolean*

*Defined in [xterm.d.ts:644](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L644)*

Whether to show the top border of the overview ruler, which uses the
[ITheme.overviewRulerBorder]({% link _docs/api/terminal/interfaces/itheme.md %}#optional-overviewrulerborder) color.

___

### `Optional` width

• **width**? : *number*

*Defined in [xterm.d.ts:638](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L638)*

When defined, renders decorations in the overview ruler to the right of
the terminal. This must be set in order to see the overview ruler.

**`param`** The color of the decoration.

**`param`** The position of the decoration.
