---
category: API-interfaces
layout: docs
---


***

[@xterm/xterm]({% link _docs/api/terminal/readme.md %}) / ITerminalAddon

# Interface: ITerminalAddon

An addon that can provide additional functionality to the terminal.

## Extends

- [`IDisposable`]({% link _docs/api/terminal/interfaces/idisposable.md %})

## Methods

### activate()

> **activate**(`terminal`): `void`

This is called when the addon is activated.

#### Parameters

• **terminal**: [`Terminal`]({% link _docs/api/terminal/classes/terminal.md %})

#### Returns

`void`

#### Source

[xterm.d.ts:1253](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L1253)

***

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[`IDisposable`]({% link _docs/api/terminal/interfaces/idisposable.md %}).[`dispose`]({% link _docs/api/terminal/interfaces/idisposable.md %}#dispose)

#### Source

[xterm.d.ts:437](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L437)
