---
title: ILinkHandler
category: API-interfaces
layout: docs
---


# Interface: ILinkHandler

## Hierarchy

* **ILinkHandler**

## Index

### Methods

* [activate]({% link _docs/api/terminal/interfaces/ilinkhandler.md %}#activate)
* [hover]({% link _docs/api/terminal/interfaces/ilinkhandler.md %}#optional-hover)
* [leave]({% link _docs/api/terminal/interfaces/ilinkhandler.md %}#optional-leave)

## Methods

###  activate

▸ **activate**(`event`: MouseEvent, `text`: string, `range`: [IBufferRange]({% link _docs/api/terminal/interfaces/ibufferrange.md %})): *void*

*Defined in [xterm.d.ts:1127](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1127)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | The mouse event triggering the callback. |
`text` | string | The text of the link. |
`range` | [IBufferRange]({% link _docs/api/terminal/interfaces/ibufferrange.md %}) | The buffer range of the link.  |

**Returns:** *void*

___

### `Optional` hover

▸ **hover**(`event`: MouseEvent, `text`: string, `range`: [IBufferRange]({% link _docs/api/terminal/interfaces/ibufferrange.md %})): *void*

*Defined in [xterm.d.ts:1137](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1137)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | The mouse event triggering the callback. |
`text` | string | The text of the link. |
`range` | [IBufferRange]({% link _docs/api/terminal/interfaces/ibufferrange.md %}) | The buffer range of the link.  |

**Returns:** *void*

___

### `Optional` leave

▸ **leave**(`event`: MouseEvent, `text`: string, `range`: [IBufferRange]({% link _docs/api/terminal/interfaces/ibufferrange.md %})): *void*

*Defined in [xterm.d.ts:1145](https://github.com/xtermjs/xterm.js/blob/5.0.0/typings/xterm.d.ts#L1145)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | The mouse event triggering the callback. |
`text` | string | The text of the link. |
`range` | [IBufferRange]({% link _docs/api/terminal/interfaces/ibufferrange.md %}) | The buffer range of the link.  |

**Returns:** *void*
