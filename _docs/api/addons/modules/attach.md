---
category: addons-modules
layout: docs
---

## Index

### Functions

* [apply]({% link _docs/api/addons/modules/attach.md %}#apply)
* [attach]({% link _docs/api/addons/modules/attach.md %}#attach)
* [detach]({% link _docs/api/addons/modules/attach.md %}#detach)



---

## Functions

<a id="apply"></a>

###  apply

▸ **apply**(terminalConstructor: *`Terminal`*): `void`



*Defined in [attach/attach.ts:121](https://github.com/xtermjs/xterm.js/blob/master/src/addons/attach/attach.ts#L121)*



**Parameters:**

| Param | Type |
| ------ | ------ |
| terminalConstructor | `Terminal` |




**Returns:** `void`





___
<a id="attach"></a>

###  attach

▸ **attach**(term: *`Terminal`*, socket: *`WebSocket`*, bidirectional: *`boolean`*, buffered: *`boolean`*): `void`



*Defined in [attach/attach.ts:22](https://github.com/xtermjs/xterm.js/blob/master/src/addons/attach/attach.ts#L22)*



Attaches the given terminal to the given socket.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| term | `Terminal` |  The terminal to be attached to the given socket. |
| socket | `WebSocket` |  The socket to attach the current terminal. |
| bidirectional | `boolean` |  Whether the terminal should send data to the socket as well. |
| buffered | `boolean` |  Whether the rendering of incoming data should happen instantly or at a maximum frequency of 1 rendering per 10ms. |




**Returns:** `void`





___
<a id="detach"></a>

###  detach

▸ **detach**(term: *`Terminal`*, socket: *`WebSocket`*): `void`



*Defined in [attach/attach.ts:107](https://github.com/xtermjs/xterm.js/blob/master/src/addons/attach/attach.ts#L107)*



Detaches the given terminal from the given socket


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| term | `Terminal` |  The terminal to be detached from the given socket. |
| socket | `WebSocket` |  The socket from which to detach the current terminal. |




**Returns:** `void`





___

