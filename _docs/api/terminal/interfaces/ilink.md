---
title: ILink
category: API-interfaces
layout: docs
---


# Interface: ILink

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

*Defined in [xterm.d.ts:1318](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1318)*

___

###  range

• **range**: *[IBufferRange]({% link _docs/api/terminal/interfaces/ibufferrange.md %})*

*Defined in [xterm.d.ts:1306](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1306)*

___

###  text

• **text**: *string*

*Defined in [xterm.d.ts:1311](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1311)*

## Methods

###  activate

▸ **activate**(`event`: MouseEvent, `text`: string): *void*

*Defined in [xterm.d.ts:1325](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1325)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | The mouse event triggering the callback. |
`text` | string | The text of the link.  |

**Returns:** *void*

___

### `Optional` dispose

▸ **dispose**(): *void*

*Defined in [xterm.d.ts:1347](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1347)*

**Returns:** *void*

___

### `Optional` hover

▸ **hover**(`event`: MouseEvent, `text`: string): *void*

*Defined in [xterm.d.ts:1335](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1335)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | The mouse event triggering the callback. |
`text` | string | The text of the link.  |

**Returns:** *void*

___

### `Optional` leave

▸ **leave**(`event`: MouseEvent, `text`: string): *void*

*Defined in [xterm.d.ts:1342](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1342)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | The mouse event triggering the callback. |
`text` | string | The text of the link.  |

**Returns:** *void*
