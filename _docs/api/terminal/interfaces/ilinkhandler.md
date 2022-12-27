---
title: ILinkHandler
category: API-interfaces
layout: docs
---


# Interface: ILinkHandler

## Hierarchy

* **ILinkHandler**

## Index

### Properties

* [allowNonHttpProtocols]({% link _docs/api/terminal/interfaces/ilinkhandler.md %}#optional-allownonhttpprotocols)

### Methods

* [activate]({% link _docs/api/terminal/interfaces/ilinkhandler.md %}#activate)
* [hover]({% link _docs/api/terminal/interfaces/ilinkhandler.md %}#optional-hover)
* [leave]({% link _docs/api/terminal/interfaces/ilinkhandler.md %}#optional-leave)

## Properties

### `Optional` allowNonHttpProtocols

• **allowNonHttpProtocols**? : *boolean*

*Defined in [xterm.d.ts:1188](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1188)*

## Methods

###  activate

▸ **activate**(`event`: MouseEvent, `text`: string, `range`: [IBufferRange]({% link _docs/api/terminal/interfaces/ibufferrange.md %})): *void*

*Defined in [xterm.d.ts:1163](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1163)*

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

*Defined in [xterm.d.ts:1173](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1173)*

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

*Defined in [xterm.d.ts:1181](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1181)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | The mouse event triggering the callback. |
`text` | string | The text of the link. |
`range` | [IBufferRange]({% link _docs/api/terminal/interfaces/ibufferrange.md %}) | The buffer range of the link.  |

**Returns:** *void*
