---
title: IMarker
category: API-interfaces
layout: docs
---


# Interface: IMarker

Represents a specific line in the terminal that is tracked when scrollback
is trimmed and lines are added or removed. This is a single line that may
be part of a larger wrapped line.

## Hierarchy

  ↳ [IDisposableWithEvent]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %})

  ↳ **IMarker**

## Index

### Properties

* [id]({% link _docs/api/terminal/interfaces/imarker.md %}#readonly-id)
* [isDisposed]({% link _docs/api/terminal/interfaces/imarker.md %}#readonly-isdisposed)
* [line]({% link _docs/api/terminal/interfaces/imarker.md %}#readonly-line)
* [onDispose]({% link _docs/api/terminal/interfaces/imarker.md %}#ondispose)

### Methods

* [dispose]({% link _docs/api/terminal/interfaces/imarker.md %}#dispose)

## Properties

### `Readonly` id

• **id**: *number*

*Defined in [xterm.d.ts:487](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L487)*

A unique identifier for this marker.

___

### `Readonly` isDisposed

• **isDisposed**: *boolean*

*Inherited from [IMarker]({% link _docs/api/terminal/interfaces/imarker.md %}).[isDisposed]({% link _docs/api/terminal/interfaces/imarker.md %}#readonly-isdisposed)*

*Defined in [xterm.d.ts:508](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L508)*

Whether this is disposed.

___

### `Readonly` line

• **line**: *number*

*Defined in [xterm.d.ts:493](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L493)*

The actual line index in the buffer at this point in time. This is set to
-1 if the marker has been disposed.

___

###  onDispose

• **onDispose**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹void›*

*Inherited from [IMarker]({% link _docs/api/terminal/interfaces/imarker.md %}).[onDispose]({% link _docs/api/terminal/interfaces/imarker.md %}#ondispose)*

*Defined in [xterm.d.ts:503](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L503)*

Event listener to get notified when this gets disposed.

## Methods

###  dispose

▸ **dispose**(): *void*

*Inherited from [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %}).[dispose]({% link _docs/api/terminal/interfaces/idisposable.md %}#dispose)*

*Defined in [xterm.d.ts:467](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L467)*

**Returns:** *void*
