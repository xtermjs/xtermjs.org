---
title: IDecorationOptions
category: API-interfaces
layout: docs
---


# Interface: IDecorationOptions

## Hierarchy

* **IDecorationOptions**

## Index

### Properties

* [anchor]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}#optional-readonly-anchor)
* [backgroundColor]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}#optional-readonly-backgroundcolor)
* [foregroundColor]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}#optional-readonly-foregroundcolor)
* [height]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}#optional-readonly-height)
* [layer]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}#optional-readonly-layer)
* [marker]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}#readonly-marker)
* [overviewRulerOptions]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}#optional-overviewruleroptions)
* [width]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}#optional-readonly-width)
* [x]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}#optional-readonly-x)

## Properties

### `Optional` `Readonly` anchor

• **anchor**? : *"right" | "left"*

*Defined in [xterm.d.ts:566](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L566)*

___

### `Optional` `Readonly` backgroundColor

• **backgroundColor**? : *string*

*Defined in [xterm.d.ts:589](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L589)*

The background color of the cell(s). When 2 decorations both set the
foreground color the last registered decoration will be used. Only the
`#RRGGBB` format is supported.

___

### `Optional` `Readonly` foregroundColor

• **foregroundColor**? : *string*

*Defined in [xterm.d.ts:596](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L596)*

The foreground color of the cell(s). When 2 decorations both set the
foreground color the last registered decoration will be used. Only the
`#RRGGBB` format is supported.

___

### `Optional` `Readonly` height

• **height**? : *number*

*Defined in [xterm.d.ts:582](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L582)*

The height of the decoration in cells, defaults to 1.

___

### `Optional` `Readonly` layer

• **layer**? : *"bottom" | "top"*

*Defined in [xterm.d.ts:603](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L603)*

What layer to render the decoration at when [backgroundColor]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}#optional-readonly-backgroundcolor) or
[foregroundColor]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}#optional-readonly-foregroundcolor) are used. `'bottom'` will render under the
selection, `'top`' will render above the selection\*.

___

### `Readonly` marker

• **marker**: *[IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})*

*Defined in [xterm.d.ts:560](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L560)*

The line in the terminal where
the decoration will be displayed

___

### `Optional` overviewRulerOptions

• **overviewRulerOptions**? : *[IDecorationOverviewRulerOptions]({% link _docs/api/terminal/interfaces/idecorationoverviewruleroptions.md %})*

*Defined in [xterm.d.ts:612](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L612)*

When defined, renders the decoration in the overview ruler to the right
of the terminal. [IOverviewRulerOptions.width]({% link _docs/api/terminal/interfaces/ioverviewruleroptions.md %}#optional-width) must be set in order
to see the overview ruler.

**`param`** The color of the decoration.

**`param`** The position of the decoration.

___

### `Optional` `Readonly` width

• **width**? : *number*

*Defined in [xterm.d.ts:577](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L577)*

The width of the decoration in cells, defaults to 1.

___

### `Optional` `Readonly` x

• **x**? : *number*

*Defined in [xterm.d.ts:571](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L571)*

The x position offset relative to the anchor
