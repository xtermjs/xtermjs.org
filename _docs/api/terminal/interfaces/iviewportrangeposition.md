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

*Defined in [xterm.d.ts:1341](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1341)*

The x position of the cell. This is a 0-based index that refers to the
space in between columns, not the column itself. Index 0 refers to the
left side of the viewport, index `Terminal.cols` refers to the right side
of the viewport. This can be thought of as how a cursor is positioned in
a text editor.

___

###  y

• **y**: *number*

*Defined in [xterm.d.ts:1347](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1347)*

The y position of the cell. This is a 0-based index that refers to a
specific row.
