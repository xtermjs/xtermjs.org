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

[xterm.d.ts:495](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L495)

***

### onDispose

> **onDispose**: [`IEvent`]({% link _docs/api/terminal/interfaces/ievent.md %})\<`void`, `void`\>

Event listener to get notified when this gets disposed.

#### Source

[xterm.d.ts:490](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L490)

## Methods

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[`IDisposable`]({% link _docs/api/terminal/interfaces/idisposable.md %}).[`dispose`]({% link _docs/api/terminal/interfaces/idisposable.md %}#dispose)

#### Source

[xterm.d.ts:454](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L454)
