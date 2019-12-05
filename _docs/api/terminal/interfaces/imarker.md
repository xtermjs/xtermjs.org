---
title: IMarker
category: API-interfaces
layout: docs
---


# Interface: IMarker

Represents a specific line in the terminal that is tracked when scrollback is trimmed and lines are added or removed. This is a single line that may be part of a larger wrapped line.

## Hierarchy

 [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})

**↳ IMarker**

## Index

### Properties

* [id]({% link _docs/api/terminal/interfaces/imarker.md %}#id)
* [isDisposed]({% link _docs/api/terminal/interfaces/imarker.md %}#isdisposed)
* [line]({% link _docs/api/terminal/interfaces/imarker.md %}#line)

### Methods

* [dispose]({% link _docs/api/terminal/interfaces/imarker.md %}#dispose)

---

## Properties

<a id="id"></a>

###  id

**● id**: *`number`*

*Defined in [xterm.d.ts:347](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L347)*

A unique identifier for this marker.

___
<a id="isdisposed"></a>

###  isDisposed

**● isDisposed**: *`boolean`*

*Defined in [xterm.d.ts:352](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L352)*

Whether this marker is disposed.

___
<a id="line"></a>

###  line

**● line**: *`number`*

*Defined in [xterm.d.ts:358](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L358)*

The actual line index in the buffer at this point in time. This is set to -1 if the marker has been disposed.

___

## Methods

<a id="dispose"></a>

###  dispose

▸ **dispose**(): `void`

*Inherited from [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %}).[dispose]({% link _docs/api/terminal/interfaces/idisposable.md %}#dispose)*

*Defined in [xterm.d.ts:327](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L327)*

**Returns:** `void`

___

