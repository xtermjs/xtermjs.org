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
* [onDispose]({% link _docs/api/terminal/interfaces/imarker.md %}#ondispose)

### Methods

* [dispose]({% link _docs/api/terminal/interfaces/imarker.md %}#dispose)

## Properties

###  id

• **id**: *number*

*Defined in [xterm.d.ts:379](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L379)*

A unique identifier for this marker.

___

###  isDisposed

• **isDisposed**: *boolean*

*Defined in [xterm.d.ts:384](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L384)*

Whether this marker is disposed.

___

###  line

• **line**: *number*

*Defined in [xterm.d.ts:390](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L390)*

The actual line index in the buffer at this point in time. This is set to
-1 if the marker has been disposed.

___

###  onDispose

• **onDispose**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹void›*

*Defined in [xterm.d.ts:397](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L397)*

Event listener to get notified when the marker gets disposed. Automatic disposal
might happen for a marker, that got invalidated by scrolling out or removal of
a line from the buffer.

## Methods

###  dispose

▸ **dispose**(): *void*

*Inherited from [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %}).[dispose]({% link _docs/api/terminal/interfaces/idisposable.md %}#dispose)*

*Defined in [xterm.d.ts:359](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L359)*

**Returns:** *void*
