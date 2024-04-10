---
category: API-interfaces
layout: docs
---


***

[@xterm/xterm]({% link _docs/api/terminal/readme.md %}) / IDecorationOptions

# Interface: IDecorationOptions

## Properties

### anchor?

> **`optional`** **`readonly`** **anchor**: `"left"` \| `"right"`

#### Source

[xterm.d.ts:553](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L553)

***

### backgroundColor?

> **`optional`** **`readonly`** **backgroundColor**: `string`

The background color of the cell(s). When 2 decorations both set the
foreground color the last registered decoration will be used. Only the
`#RRGGBB` format is supported.

#### Source

[xterm.d.ts:576](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L576)

***

### foregroundColor?

> **`optional`** **`readonly`** **foregroundColor**: `string`

The foreground color of the cell(s). When 2 decorations both set the
foreground color the last registered decoration will be used. Only the
`#RRGGBB` format is supported.

#### Source

[xterm.d.ts:583](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L583)

***

### height?

> **`optional`** **`readonly`** **height**: `number`

The height of the decoration in cells, defaults to 1.

#### Source

[xterm.d.ts:569](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L569)

***

### layer?

> **`optional`** **`readonly`** **layer**: `"bottom"` \| `"top"`

What layer to render the decoration at when [backgroundColor]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}#backgroundcolor) or
[foregroundColor]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}#foregroundcolor) are used. `'bottom'` will render under the
selection, `'top`' will render above the selection\*.

*\* The selection will render on top regardless of layer on the canvas
renderer due to how it renders selection separately.*

#### Source

[xterm.d.ts:593](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L593)

***

### marker

> **`readonly`** **marker**: [`IMarker`]({% link _docs/api/terminal/interfaces/imarker.md %})

The line in the terminal where
the decoration will be displayed

#### Source

[xterm.d.ts:547](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L547)

***

### overviewRulerOptions?

> **`optional`** **overviewRulerOptions**: [`IDecorationOverviewRulerOptions`]({% link _docs/api/terminal/interfaces/idecorationoverviewruleroptions.md %})

When defined, renders the decoration in the overview ruler to the right
of the terminal. [ITerminalOptions.overviewRulerWidth]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#overviewrulerwidth) must be set
in order to see the overview ruler.

#### Param

The color of the decoration.

#### Param

The position of the decoration.

#### Source

[xterm.d.ts:602](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L602)

***

### width?

> **`optional`** **`readonly`** **width**: `number`

The width of the decoration in cells, defaults to 1.

#### Source

[xterm.d.ts:564](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L564)

***

### x?

> **`optional`** **`readonly`** **x**: `number`

The x position offset relative to the anchor

#### Source

[xterm.d.ts:558](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L558)
