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

* [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})

  ↳ **IMarker**

## Index

### Properties

* [id]({% link _docs/api/terminal/interfaces/imarker.md %}#id)
* [isDisposed]({% link _docs/api/terminal/interfaces/imarker.md %}#isdisposed)
* [line]({% link _docs/api/terminal/interfaces/imarker.md %}#line)

### Methods

* [dispose]({% link _docs/api/terminal/interfaces/imarker.md %}#dispose)

## Properties

###  id

• **id**: *number*

*Defined in [xterm.d.ts:358](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L358)*

A unique identifier for this marker.

___

###  isDisposed

• **isDisposed**: *boolean*

*Defined in [xterm.d.ts:363](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L363)*

Whether this marker is disposed.

___

###  line

• **line**: *number*

*Defined in [xterm.d.ts:369](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L369)*

The actual line index in the buffer at this point in time. This is set to
-1 if the marker has been disposed.

## Methods

###  dispose

▸ **dispose**(): *void*

*Inherited from [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %}).[dispose]({% link _docs/api/terminal/interfaces/idisposable.md %}#dispose)*

*Defined in [xterm.d.ts:338](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L338)*

**Returns:** *void*
