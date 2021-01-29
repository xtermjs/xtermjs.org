---
title: IParser
category: API-interfaces
layout: docs
---


# Interface: IParser

Allows hooking into the parser for custom handling of escape sequences.

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

*Defined in [xterm.d.ts:1518](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1518)*

Adds a handler for CSI escape sequences.

**Parameters:**

▪ **id**: *[IFunctionIdentifier]({% link _docs/api/terminal/interfaces/ifunctionidentifier.md %})*

Specifies the function identifier under which the callback
gets registered, e.g. {final: 'm'} for SGR.

▪ **callback**: *function*

The function to handle the sequence. The callback is
called with the numerical params. If the sequence has subparams the
array will contain subarrays with their numercial values.
Return true if the sequence was handled; false if we should try
a previous handler (set by addCsiHandler or setCsiHandler).
The most recently added handler is tried first.

▸ (`params`: number | number[][]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`params` | number &#124; number[][] |

**Returns:** *[IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})*

An IDisposable you can call to remove this handler.

___

###  registerDcsHandler

▸ **registerDcsHandler**(`id`: [IFunctionIdentifier]({% link _docs/api/terminal/interfaces/ifunctionidentifier.md %}), `callback`: function): *[IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})*

*Defined in [xterm.d.ts:1537](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1537)*

Adds a handler for DCS escape sequences.

**Parameters:**

▪ **id**: *[IFunctionIdentifier]({% link _docs/api/terminal/interfaces/ifunctionidentifier.md %})*

Specifies the function identifier under which the callback
gets registered, e.g. {intermediates: '$' final: 'q'} for DECRQSS.

▪ **callback**: *function*

The function to handle the sequence. Note that the
function will only be called once if the sequence finished sucessfully.
There is currently no way to intercept smaller data chunks, data chunks
will be stored up until the sequence is finished. Since DCS sequences
are not limited by the amount of data this might impose a problem for
big payloads. Currently xterm.js limits DCS payload to 10 MB
which should give enough room for most use cases.
The function gets the payload and numerical parameters as arguments.
Return true if the sequence was handled; false if we should try
a previous handler (set by addDcsHandler or setDcsHandler).
The most recently added handler is tried first.

▸ (`data`: string, `param`: number | number[][]): *boolean*

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

*Defined in [xterm.d.ts:1550](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1550)*

Adds a handler for ESC escape sequences.

**Parameters:**

▪ **id**: *[IFunctionIdentifier]({% link _docs/api/terminal/interfaces/ifunctionidentifier.md %})*

Specifies the function identifier under which the callback
gets registered, e.g. {intermediates: '%' final: 'G'} for
default charset selection.

▪ **handler**: *function*

▸ (): *boolean*

**Returns:** *[IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})*

An IDisposable you can call to remove this handler.

___

###  registerOscHandler

▸ **registerOscHandler**(`ident`: number, `callback`: function): *[IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})*

*Defined in [xterm.d.ts:1568](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1568)*

Adds a handler for OSC escape sequences.

**Parameters:**

▪ **ident**: *number*

The number (first parameter) of the sequence.

▪ **callback**: *function*

The function to handle the sequence. Note that the
function will only be called once if the sequence finished sucessfully.
There is currently no way to intercept smaller data chunks, data chunks
will be stored up until the sequence is finished. Since OSC sequences
are not limited by the amount of data this might impose a problem for
big payloads. Currently xterm.js limits OSC payload to 10 MB
which should give enough room for most use cases.
The callback is called with OSC data string.
Return true if the sequence was handled; false if we should try
a previous handler (set by addOscHandler or setOscHandler).
The most recently added handler is tried first.

▸ (`data`: string): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |

**Returns:** *[IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})*

An IDisposable you can call to remove this handler.
