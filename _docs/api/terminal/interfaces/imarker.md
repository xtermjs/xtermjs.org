---
title: IMarker
category: API-interfaces
layout: docs
---


# Interface: IMarker

Represents a specific line in the terminal that is tracked when scrollback is trimmed and lines are added or removed.

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

*Defined in [xterm.d.ts:319](https://github.com/xtermjs/xterm.js/blob/4.1.0/typings/xterm.d.ts#L319)*

A unique identifier for this marker.

___
<a id="isdisposed"></a>

###  isDisposed

**● isDisposed**: *`boolean`*

*Defined in [xterm.d.ts:324](https://github.com/xtermjs/xterm.js/blob/4.1.0/typings/xterm.d.ts#L324)*

Whether this marker is disposed.

___
<a id="line"></a>

###  line

**● line**: *`number`*

*Defined in [xterm.d.ts:329](https://github.com/xtermjs/xterm.js/blob/4.1.0/typings/xterm.d.ts#L329)*

The actual line index in the buffer at this point in time.

___

## Methods

<a id="dispose"></a>

###  dispose

▸ **dispose**(): `void`

*Inherited from [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %}).[dispose]({% link _docs/api/terminal/interfaces/idisposable.md %}#dispose)*

*Defined in [xterm.d.ts:300](https://github.com/xtermjs/xterm.js/blob/4.1.0/typings/xterm.d.ts#L300)*

**Returns:** `void`

___

