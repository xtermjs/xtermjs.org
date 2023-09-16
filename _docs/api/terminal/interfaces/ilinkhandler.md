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

*Defined in [xterm.d.ts:1282](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1282)*

## Methods

###  activate

▸ **activate**(`event`: MouseEvent, `text`: string, `range`: [IBufferRange]({% link _docs/api/terminal/interfaces/ibufferrange.md %})): *void*

*Defined in [xterm.d.ts:1255](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1255)*

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

*Defined in [xterm.d.ts:1266](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1266)*

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

*Defined in [xterm.d.ts:1274](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1274)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent | The mouse event triggering the callback. |
`text` | string | The text of the link. |
`range` | [IBufferRange]({% link _docs/api/terminal/interfaces/ibufferrange.md %}) | The buffer range of the link.  |

**Returns:** *void*
