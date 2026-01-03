---
title: ILogger
category: API-interfaces
layout: docs
---


# Interface: ILogger

A replacement logger for `console`.

## Hierarchy

* **ILogger**

## Index

### Methods

* [debug]({% link _docs/api/terminal/interfaces/ilogger.md %}#debug)
* [error]({% link _docs/api/terminal/interfaces/ilogger.md %}#error)
* [info]({% link _docs/api/terminal/interfaces/ilogger.md %}#info)
* [trace]({% link _docs/api/terminal/interfaces/ilogger.md %}#trace)
* [warn]({% link _docs/api/terminal/interfaces/ilogger.md %}#warn)

## Methods

###  debug

▸ **debug**(`message`: string, ...`args`: any[]): *void*

*Defined in [xterm.d.ts:445](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L445)*

Log a debug message, this will only be called if
[ITerminalOptions.logLevel]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-loglevel) is set to debug or below.

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`...args` | any[] |

**Returns:** *void*

___

###  error

▸ **error**(`message`: string | Error, ...`args`: any[]): *void*

*Defined in [xterm.d.ts:460](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L460)*

Log a debug message, this will only be called if
[ITerminalOptions.logLevel]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-loglevel) is set to error or below.

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; Error |
`...args` | any[] |

**Returns:** *void*

___

###  info

▸ **info**(`message`: string, ...`args`: any[]): *void*

*Defined in [xterm.d.ts:450](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L450)*

Log a debug message, this will only be called if
[ITerminalOptions.logLevel]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-loglevel) is set to info or below.

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`...args` | any[] |

**Returns:** *void*

___

###  trace

▸ **trace**(`message`: string, ...`args`: any[]): *void*

*Defined in [xterm.d.ts:440](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L440)*

Log a trace message, this will only be called if
[ITerminalOptions.logLevel]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-loglevel) is set to trace.

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`...args` | any[] |

**Returns:** *void*

___

###  warn

▸ **warn**(`message`: string, ...`args`: any[]): *void*

*Defined in [xterm.d.ts:455](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L455)*

Log a debug message, this will only be called if
[ITerminalOptions.logLevel]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-loglevel) is set to warn or below.

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`...args` | any[] |

**Returns:** *void*
