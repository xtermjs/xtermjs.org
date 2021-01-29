---
title: IViewportRangePosition
category: API-interfaces
layout: docs
---


# Interface: IViewportRangePosition

An object representing a cell position within the viewport of the terminal.

## Hierarchy

* **IViewportRangePosition**

## Index

### Properties

* [x]({% link _docs/api/terminal/interfaces/iviewportrangeposition.md %}#x)
* [y]({% link _docs/api/terminal/interfaces/iviewportrangeposition.md %}#y)

## Properties

###  x

• **x**: *number*

*Defined in [xterm.d.ts:1113](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1113)*

The x position of the cell. This is a 0-based index that refers to the
space in between columns, not the column itself. Index 0 refers to the
left side of the viewport, index `Terminal.cols` refers to the right side
of the viewport. This can be thought of as how a cursor is positioned in
a text editor.

___

###  y

• **y**: *number*

*Defined in [xterm.d.ts:1119](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1119)*

The y position of the cell. This is a 0-based index that refers to a
specific row.
