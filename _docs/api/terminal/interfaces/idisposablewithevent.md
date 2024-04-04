---
category: API-interfaces
layout: docs
---


***

[@xterm/xterm]({% link _docs/api/terminal/readme.md %}) / IDisposableWithEvent

# Interface: IDisposableWithEvent

Represents a disposable that tracks is disposed state.

## Extends

- [`IDisposable`]({% link _docs/api/terminal/interfaces/idisposable.md %})

## Properties

### isDisposed

> **`readonly`** **isDisposed**: `boolean`

Whether this is disposed.

#### Source

[xterm.d.ts:478](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L478)

***

### onDispose

> **onDispose**: [`IEvent`]({% link _docs/api/terminal/interfaces/ievent.md %})\<`void`, `void`\>

Event listener to get notified when this gets disposed.

#### Source

[xterm.d.ts:473](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L473)

## Methods

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[`IDisposable`]({% link _docs/api/terminal/interfaces/idisposable.md %}).[`dispose`]({% link _docs/api/terminal/interfaces/idisposable.md %}#dispose)

#### Source

[xterm.d.ts:437](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L437)
