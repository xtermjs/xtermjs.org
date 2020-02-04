---
title: IParser
category: API-interfaces
layout: docs
---


# Interface: IParser

Allows hooking into the parser for custom handling of escape sequences.

## Hierarchy

**IParser**

## Index

### Methods

* [registerCsiHandler]({% link _docs/api/terminal/interfaces/iparser.md %}#registercsihandler)
* [registerDcsHandler]({% link _docs/api/terminal/interfaces/iparser.md %}#registerdcshandler)
* [registerEscHandler]({% link _docs/api/terminal/interfaces/iparser.md %}#registereschandler)
* [registerOscHandler]({% link _docs/api/terminal/interfaces/iparser.md %}#registeroschandler)

---

## Methods

<a id="registercsihandler"></a>

###  registerCsiHandler

▸ **registerCsiHandler**(id: *[IFunctionIdentifier]({% link _docs/api/terminal/interfaces/ifunctionidentifier.md %})*, callback: *`function`*): [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})

*Defined in [xterm.d.ts:1331](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1331)*

Adds a handler for CSI escape sequences.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | [IFunctionIdentifier]({% link _docs/api/terminal/interfaces/ifunctionidentifier.md %}) |  Specifies the function identifier under which the callback gets registered, e.g. {final: 'm'} for SGR. |
| callback | `function` |  The function to handle the sequence. The callback is called with the numerical params. If the sequence has subparams the array will contain subarrays with their numercial values. Return true if the sequence was handled; false if we should try a previous handler (set by addCsiHandler or setCsiHandler). The most recently added handler is tried first. |

**Returns:** [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})
An IDisposable you can call to remove this handler.

___
<a id="registerdcshandler"></a>

###  registerDcsHandler

▸ **registerDcsHandler**(id: *[IFunctionIdentifier]({% link _docs/api/terminal/interfaces/ifunctionidentifier.md %})*, callback: *`function`*): [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})

*Defined in [xterm.d.ts:1350](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1350)*

Adds a handler for DCS escape sequences.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | [IFunctionIdentifier]({% link _docs/api/terminal/interfaces/ifunctionidentifier.md %}) |  Specifies the function identifier under which the callback gets registered, e.g. {intermediates: '$' final: 'q'} for DECRQSS. |
| callback | `function` |  The function to handle the sequence. Note that the function will only be called once if the sequence finished sucessfully. There is currently no way to intercept smaller data chunks, data chunks will be stored up until the sequence is finished. Since DCS sequences are not limited by the amount of data this might impose a problem for big payloads. Currently xterm.js limits DCS payload to 10 MB which should give enough room for most use cases. The function gets the payload and numerical parameters as arguments. Return true if the sequence was handled; false if we should try a previous handler (set by addDcsHandler or setDcsHandler). The most recently added handler is tried first. |

**Returns:** [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})
An IDisposable you can call to remove this handler.

___
<a id="registereschandler"></a>

###  registerEscHandler

▸ **registerEscHandler**(id: *[IFunctionIdentifier]({% link _docs/api/terminal/interfaces/ifunctionidentifier.md %})*, handler: *`function`*): [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})

*Defined in [xterm.d.ts:1363](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1363)*

Adds a handler for ESC escape sequences.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| id | [IFunctionIdentifier]({% link _docs/api/terminal/interfaces/ifunctionidentifier.md %}) |  Specifies the function identifier under which the callback gets registered, e.g. {intermediates: '%' final: 'G'} for default charset selection. |
| handler | `function` |

**Returns:** [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})
An IDisposable you can call to remove this handler.

___
<a id="registeroschandler"></a>

###  registerOscHandler

▸ **registerOscHandler**(ident: *`number`*, callback: *`function`*): [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})

*Defined in [xterm.d.ts:1381](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1381)*

Adds a handler for OSC escape sequences.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| ident | `number` |  The number (first parameter) of the sequence. |
| callback | `function` |  The function to handle the sequence. Note that the function will only be called once if the sequence finished sucessfully. There is currently no way to intercept smaller data chunks, data chunks will be stored up until the sequence is finished. Since OSC sequences are not limited by the amount of data this might impose a problem for big payloads. Currently xterm.js limits OSC payload to 10 MB which should give enough room for most use cases. The callback is called with OSC data string. Return true if the sequence was handled; false if we should try a previous handler (set by addOscHandler or setOscHandler). The most recently added handler is tried first. |

**Returns:** [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})
An IDisposable you can call to remove this handler.

___

