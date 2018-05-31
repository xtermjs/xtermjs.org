---
title: IEventEmitter
category: terminal-interfaces
layout: docs
---

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

*Defined in [xterm.d.ts:252](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L252)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| handler | `function` |

**Returns:** [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})

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

