---
category: API-interfaces
layout: docs
---


***

[@xterm/xterm]({% link _docs/api/terminal/readme.md %}) / IMarker

# Interface: IMarker

Represents a specific line in the terminal that is tracked when scrollback
is trimmed and lines are added or removed. This is a single line that may
be part of a larger wrapped line.

## Extends

- [`IDisposableWithEvent`]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %})

## Properties

### id

> **`readonly`** **id**: `number`

A unique identifier for this marker.

#### Source

[xterm.d.ts:457](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L457)

***

### isDisposed

> **`readonly`** **isDisposed**: `boolean`

Whether this is disposed.

#### Inherited from

[`IDisposableWithEvent`]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}).[`isDisposed`]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}#isdisposed)

#### Source

[xterm.d.ts:478](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L478)

***

### line

> **`readonly`** **line**: `number`

The actual line index in the buffer at this point in time. This is set to
-1 if the marker has been disposed.

#### Source

[xterm.d.ts:463](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L463)

***

### onDispose

> **onDispose**: [`IEvent`]({% link _docs/api/terminal/interfaces/ievent.md %})\<`void`, `void`\>

Event listener to get notified when this gets disposed.

#### Inherited from

[`IDisposableWithEvent`]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}).[`onDispose`]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}#ondispose)

#### Source

[xterm.d.ts:473](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L473)

## Methods

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[`IDisposableWithEvent`]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}).[`dispose`]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}#dispose)

#### Source

[xterm.d.ts:437](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L437)
