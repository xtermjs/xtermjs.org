---
title: ILogger
category: API-interfaces
layout: docs
---


# Interface: ILogger

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

*Defined in [xterm.d.ts:404](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L404)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`...args` | any[] |

**Returns:** *void*

___

###  error

▸ **error**(`message`: string | Error, ...`args`: any[]): *void*

*Defined in [xterm.d.ts:419](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L419)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string &#124; Error |
`...args` | any[] |

**Returns:** *void*

___

###  info

▸ **info**(`message`: string, ...`args`: any[]): *void*

*Defined in [xterm.d.ts:409](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L409)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`...args` | any[] |

**Returns:** *void*

___

###  trace

▸ **trace**(`message`: string, ...`args`: any[]): *void*

*Defined in [xterm.d.ts:399](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L399)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`...args` | any[] |

**Returns:** *void*

___

###  warn

▸ **warn**(`message`: string, ...`args`: any[]): *void*

*Defined in [xterm.d.ts:414](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L414)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`...args` | any[] |

**Returns:** *void*
