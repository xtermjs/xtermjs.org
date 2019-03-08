---
title: IEventEmitter
category: API-interfaces
layout: docs
---


# Interface: IEventEmitter

## Hierarchy

**IEventEmitter**

## Implemented by

* [Terminal]({% link _docs/api/terminal/classes/terminal.md %})

## Index

### Methods

* [addDisposableListener]({% link _docs/api/terminal/interfaces/ieventemitter.md %}#adddisposablelistener)
* [emit]({% link _docs/api/terminal/interfaces/ieventemitter.md %}#emit)
* [off]({% link _docs/api/terminal/interfaces/ieventemitter.md %}#off)
* [on]({% link _docs/api/terminal/interfaces/ieventemitter.md %}#on)

---

## Methods

<a id="adddisposablelistener"></a>

###  addDisposableListener

▸ **addDisposableListener**(type: *`string`*, handler: *`function`*): [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})

*Defined in [xterm.d.ts:288](https://github.com/xtermjs/xterm.js/blob/3.12.0/typings/xterm.d.ts#L288)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| handler | `function` |

**Returns:** [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})

___
<a id="emit"></a>

###  emit

▸ **emit**(type: *`string`*, data?: *`any`*): `void`

*Defined in [xterm.d.ts:287](https://github.com/xtermjs/xterm.js/blob/3.12.0/typings/xterm.d.ts#L287)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| `Optional` data | `any` |

**Returns:** `void`

___
<a id="off"></a>

###  off

▸ **off**(type: *`string`*, listener: *`function`*): `void`

*Defined in [xterm.d.ts:286](https://github.com/xtermjs/xterm.js/blob/3.12.0/typings/xterm.d.ts#L286)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| listener | `function` |

**Returns:** `void`

___
<a id="on"></a>

###  on

▸ **on**(type: *`string`*, listener: *`function`*): `void`

*Defined in [xterm.d.ts:285](https://github.com/xtermjs/xterm.js/blob/3.12.0/typings/xterm.d.ts#L285)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| listener | `function` |

**Returns:** `void`

___

