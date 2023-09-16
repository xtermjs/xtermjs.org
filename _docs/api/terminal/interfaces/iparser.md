---
title: IParser
category: API-interfaces
layout: docs
---


# Interface: IParser

## Hierarchy

* **IParser**

## Index

### Methods

* [registerCsiHandler]({% link _docs/api/terminal/interfaces/iparser.md %}#registercsihandler)
* [registerDcsHandler]({% link _docs/api/terminal/interfaces/iparser.md %}#registerdcshandler)
* [registerEscHandler]({% link _docs/api/terminal/interfaces/iparser.md %}#registereschandler)
* [registerOscHandler]({% link _docs/api/terminal/interfaces/iparser.md %}#registeroschandler)

## Methods

###  registerCsiHandler

▸ **registerCsiHandler**(`id`: [IFunctionIdentifier]({% link _docs/api/terminal/interfaces/ifunctionidentifier.md %}), `callback`: function): *[IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})*

*Defined in [xterm.d.ts:1712](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1712)*

**Parameters:**

▪ **id**: *[IFunctionIdentifier]({% link _docs/api/terminal/interfaces/ifunctionidentifier.md %})*

▪ **callback**: *function*

▸ (`params`: number | number[][]): *boolean | Promise‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`params` | number &#124; number[][] |

**Returns:** *[IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})*

An IDisposable you can call to remove this handler.

___

###  registerDcsHandler

▸ **registerDcsHandler**(`id`: [IFunctionIdentifier]({% link _docs/api/terminal/interfaces/ifunctionidentifier.md %}), `callback`: function): *[IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})*

*Defined in [xterm.d.ts:1730](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1730)*

**Parameters:**

▪ **id**: *[IFunctionIdentifier]({% link _docs/api/terminal/interfaces/ifunctionidentifier.md %})*

▪ **callback**: *function*

▸ (`data`: string, `param`: number | number[][]): *boolean | Promise‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |
`param` | number &#124; number[][] |

**Returns:** *[IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})*

An IDisposable you can call to remove this handler.

___

###  registerEscHandler

▸ **registerEscHandler**(`id`: [IFunctionIdentifier]({% link _docs/api/terminal/interfaces/ifunctionidentifier.md %}), `handler`: function): *[IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})*

*Defined in [xterm.d.ts:1742](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1742)*

**Parameters:**

▪ **id**: *[IFunctionIdentifier]({% link _docs/api/terminal/interfaces/ifunctionidentifier.md %})*

▪ **handler**: *function*

▸ (): *boolean | Promise‹boolean›*

**Returns:** *[IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})*

An IDisposable you can call to remove this handler.

___

###  registerOscHandler

▸ **registerOscHandler**(`ident`: number, `callback`: function): *[IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})*

*Defined in [xterm.d.ts:1759](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L1759)*

**Parameters:**

▪ **ident**: *number*

▪ **callback**: *function*

▸ (`data`: string): *boolean | Promise‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |

**Returns:** *[IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})*

An IDisposable you can call to remove this handler.
