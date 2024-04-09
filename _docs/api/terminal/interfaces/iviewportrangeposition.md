---
category: API-interfaces
layout: docs
---


***

[@xterm/xterm]({% link _docs/api/terminal/readme.md %}) / IViewportRangePosition

# Interface: IViewportRangePosition

An object representing a cell position within the viewport of the terminal.

## Properties

### x

> **x**: `number`

The x position of the cell. This is a 0-based index that refers to the
space in between columns, not the column itself. Index 0 refers to the
left side of the viewport, index `Terminal.cols` refers to the right side
of the viewport. This can be thought of as how a cursor is positioned in
a text editor.

#### Source

[xterm.d.ts:1299](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1299)

***

### y

> **y**: `number`

The y position of the cell. This is a 0-based index that refers to a
specific row.

#### Source

[xterm.d.ts:1305](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1305)
