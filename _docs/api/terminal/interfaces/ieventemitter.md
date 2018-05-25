---
title: IEventEmitter
category: API-interfaces
layout: docs
---


# Interface: IEventEmitter

## Hierarchy

**IEventEmitter**

## Implemented by

* [Terminal](../../classes/terminal)

## Index

### Methods

* [addDisposableListener](#adddisposablelistener)
* [emit](#emit)
* [off](#off)
* [on](#on)

---

## Methods

<a id="adddisposablelistener"></a>

###  addDisposableListener

▸ **addDisposableListener**(type: *`string`*, handler: *`function`*): [IDisposable](../idisposable)

*Defined in [xterm.d.ts:252](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L252)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| handler | `function` |

**Returns:** [IDisposable](../idisposable)

___
<a id="emit"></a>

###  emit

▸ **emit**(type: *`string`*, data?: *`any`*): `void`

*Defined in [xterm.d.ts:251](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L251)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| `Optional` data | `any` |

**Returns:** `void`

___
<a id="off"></a>

###  off

▸ **off**(type: *`string`*, listener: *`function`*): `void`

*Defined in [xterm.d.ts:250](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L250)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| listener | `function` |

**Returns:** `void`

___
<a id="on"></a>

###  on

▸ **on**(type: *`string`*, listener: *`function`*): `void`

*Defined in [xterm.d.ts:249](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L249)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| listener | `function` |

**Returns:** `void`

___

