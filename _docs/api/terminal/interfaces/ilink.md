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

*Defined in [xterm.d.ts:1181](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1181)*

___

###  range

• **range**: *[IBufferRange]({% link _docs/api/terminal/interfaces/ibufferrange.md %})*

*Defined in [xterm.d.ts:1169](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1169)*

___

###  text

• **text**: *string*

*Defined in [xterm.d.ts:1174](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1174)*

## Methods

###  activate

▸ **activate**(`event`: MouseEvent, `text`: string): *void*

*Defined in [xterm.d.ts:1188](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1188)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | The mouse event triggering the callback. |
`text` | string | The text of the link.  |

**Returns:** *void*

___

### `Optional` dispose

▸ **dispose**(): *void*

*Defined in [xterm.d.ts:1209](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1209)*

**Returns:** *void*

___

### `Optional` hover

▸ **hover**(`event`: MouseEvent, `text`: string): *void*

*Defined in [xterm.d.ts:1197](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1197)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | The mouse event triggering the callback. |
`text` | string | The text of the link.  |

**Returns:** *void*

___

### `Optional` leave

▸ **leave**(`event`: MouseEvent, `text`: string): *void*

*Defined in [xterm.d.ts:1204](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1204)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | The mouse event triggering the callback. |
`text` | string | The text of the link.  |

**Returns:** *void*
