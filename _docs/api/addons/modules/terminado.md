---
category: addons-modules
layout: docs
---

## Index

### Functions

* [apply]({% link _docs/api/addons/modules/terminado.md %}#apply)
* [terminadoAttach]({% link _docs/api/addons/modules/terminado.md %}#terminadoattach)
* [terminadoDetach]({% link _docs/api/addons/modules/terminado.md %}#terminadodetach)



---

## Functions

<a id="apply"></a>

###  apply

▸ **apply**(terminalConstructor: *`Terminal`*): `void`



*Defined in [terminado/terminado.ts:91](https://github.com/xtermjs/xterm.js/blob/master/src/addons/terminado/terminado.ts#L91)*



**Parameters:**

| Param | Type |
| ------ | ------ |
| terminalConstructor | `Terminal` |




**Returns:** `void`





___
<a id="terminadoattach"></a>

###  terminadoAttach

▸ **terminadoAttach**(term: *`Terminal`*, socket: *`WebSocket`*, bidirectional: *`boolean`*, buffered: *`boolean`*): `void`



*Defined in [terminado/terminado.ts:23](https://github.com/xtermjs/xterm.js/blob/master/src/addons/terminado/terminado.ts#L23)*



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
<a id="terminadodetach"></a>

###  terminadoDetach

▸ **terminadoDetach**(term: *`Terminal`*, socket: *`WebSocket`*): `void`



*Defined in [terminado/terminado.ts:78](https://github.com/xtermjs/xterm.js/blob/master/src/addons/terminado/terminado.ts#L78)*



Detaches the given terminal from the given socket


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| term | `Terminal` |  The terminal to be detached from the given socket. |
| socket | `WebSocket` |  The socket from which to detach the current terminal. |




**Returns:** `void`





___

