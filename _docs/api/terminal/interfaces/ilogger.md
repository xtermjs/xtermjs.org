---
category: API-interfaces
layout: docs
---


***

[@xterm/xterm]({% link _docs/api/terminal/readme.md %}) / ILogger

# Interface: ILogger

A replacement logger for `console`.

## Methods

### debug()

> **debug**(`message`, ...`args`): `void`

Log a debug message, this will only be called if
[ITerminalOptions.logLevel]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#loglevel) is set to debug or below.

#### Parameters

• **message**: `string`

• ...**args**: `any`[]

#### Returns

`void`

#### Source

[xterm.d.ts:415](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L415)

***

### error()

> **error**(`message`, ...`args`): `void`

Log a debug message, this will only be called if
[ITerminalOptions.logLevel]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#loglevel) is set to error or below.

#### Parameters

• **message**: `string` \| `Error`

• ...**args**: `any`[]

#### Returns

`void`

#### Source

[xterm.d.ts:430](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L430)

***

### info()

> **info**(`message`, ...`args`): `void`

Log a debug message, this will only be called if
[ITerminalOptions.logLevel]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#loglevel) is set to info or below.

#### Parameters

• **message**: `string`

• ...**args**: `any`[]

#### Returns

`void`

#### Source

[xterm.d.ts:420](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L420)

***

### trace()

> **trace**(`message`, ...`args`): `void`

Log a trace message, this will only be called if
[ITerminalOptions.logLevel]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#loglevel) is set to trace.

#### Parameters

• **message**: `string`

• ...**args**: `any`[]

#### Returns

`void`

#### Source

[xterm.d.ts:410](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L410)

***

### warn()

> **warn**(`message`, ...`args`): `void`

Log a debug message, this will only be called if
[ITerminalOptions.logLevel]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#loglevel) is set to warn or below.

#### Parameters

• **message**: `string`

• ...**args**: `any`[]

#### Returns

`void`

#### Source

[xterm.d.ts:425](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L425)
