---
title: ILink
category: API-interfaces
layout: docs
---


# Interface: ILink

A link within the terminal.

## Hierarchy

* **ILink**

## Index

### Properties

* [decorations]({% link _docs/api/terminal/interfaces/ilink.md %}#optional-decorations)
* [range]({% link _docs/api/terminal/interfaces/ilink.md %}#range)
* [text]({% link _docs/api/terminal/interfaces/ilink.md %}#text)

### Methods

* [activate]({% link _docs/api/terminal/interfaces/ilink.md %}#activate)
* [dispose]({% link _docs/api/terminal/interfaces/ilink.md %}#optional-dispose)
* [hover]({% link _docs/api/terminal/interfaces/ilink.md %}#optional-hover)
* [leave]({% link _docs/api/terminal/interfaces/ilink.md %}#optional-leave)

## Properties

### `Optional` decorations

• **decorations**? : *[ILinkDecorations]({% link _docs/api/terminal/interfaces/ilinkdecorations.md %})*

*Defined in [xterm.d.ts:1155](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1155)*

What link decorations to show when hovering the link, this property is tracked and changes
made after the link is provided will trigger changes. If not set, all decroations will be
enabled.

___

###  range

• **range**: *[IBufferRange]({% link _docs/api/terminal/interfaces/ibufferrange.md %})*

*Defined in [xterm.d.ts:1143](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1143)*

The buffer range of the link.

___

###  text

• **text**: *string*

*Defined in [xterm.d.ts:1148](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1148)*

The text of the link.

## Methods

###  activate

▸ **activate**(`event`: MouseEvent, `text`: string): *void*

*Defined in [xterm.d.ts:1162](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1162)*

Calls when the link is activated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | The mouse event triggering the callback. |
`text` | string | The text of the link.  |

**Returns:** *void*

___

### `Optional` dispose

▸ **dispose**(): *void*

*Defined in [xterm.d.ts:1183](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1183)*

Called when the link is released and no longer used by xterm.js.

**Returns:** *void*

___

### `Optional` hover

▸ **hover**(`event`: MouseEvent, `text`: string): *void*

*Defined in [xterm.d.ts:1171](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1171)*

Called when the mouse hovers the link. To use this to create a DOM-based hover tooltip,
create the hover element within `Terminal.element` and add the `xterm-hover` class to it,
that will cause mouse events to not fall through and activate other links.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | The mouse event triggering the callback. |
`text` | string | The text of the link.  |

**Returns:** *void*

___

### `Optional` leave

▸ **leave**(`event`: MouseEvent, `text`: string): *void*

*Defined in [xterm.d.ts:1178](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1178)*

Called when the mouse leaves the link.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | The mouse event triggering the callback. |
`text` | string | The text of the link.  |

**Returns:** *void*
