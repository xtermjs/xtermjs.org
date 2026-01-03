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

*Defined in [xterm.d.ts:1423](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1423)*

What link decorations to show when hovering the link, this property is
tracked and changes made after the link is provided will trigger changes.
If not set, all decroations will be enabled.

___

###  range

• **range**: *[IBufferRange]({% link _docs/api/terminal/interfaces/ibufferrange.md %})*

*Defined in [xterm.d.ts:1411](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1411)*

The buffer range of the link.

___

###  text

• **text**: *string*

*Defined in [xterm.d.ts:1416](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1416)*

The text of the link.

## Methods

###  activate

▸ **activate**(`event`: MouseEvent, `text`: string): *void*

*Defined in [xterm.d.ts:1430](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1430)*

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

*Defined in [xterm.d.ts:1452](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1452)*

Called when the link is released and no longer used by xterm.js.

**Returns:** *void*

___

### `Optional` hover

▸ **hover**(`event`: MouseEvent, `text`: string): *void*

*Defined in [xterm.d.ts:1440](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1440)*

Called when the mouse hovers the link. To use this to create a DOM-based
hover tooltip, create the hover element within `Terminal.element` and add
the `xterm-hover` class to it, that will cause mouse events to not fall
through and activate other links.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | The mouse event triggering the callback. |
`text` | string | The text of the link.  |

**Returns:** *void*

___

### `Optional` leave

▸ **leave**(`event`: MouseEvent, `text`: string): *void*

*Defined in [xterm.d.ts:1447](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1447)*

Called when the mouse leaves the link.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | The mouse event triggering the callback. |
`text` | string | The text of the link.  |

**Returns:** *void*
