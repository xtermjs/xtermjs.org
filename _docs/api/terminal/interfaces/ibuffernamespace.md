---
title: IBufferNamespace
category: API-interfaces
layout: docs
---


# Interface: IBufferNamespace

Represents the terminal's set of buffers.

## Hierarchy

* **IBufferNamespace**

## Index

### Properties

* [active]({% link _docs/api/terminal/interfaces/ibuffernamespace.md %}#readonly-active)
* [alternate]({% link _docs/api/terminal/interfaces/ibuffernamespace.md %}#readonly-alternate)
* [normal]({% link _docs/api/terminal/interfaces/ibuffernamespace.md %}#readonly-normal)
* [onBufferChange]({% link _docs/api/terminal/interfaces/ibuffernamespace.md %}#onbufferchange)

## Properties

### `Readonly` active

• **active**: *[IBuffer]({% link _docs/api/terminal/interfaces/ibuffer.md %})*

*Defined in [xterm.d.ts:1573](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1573)*

The active buffer, this will either be the normal or alternate buffers.

___

### `Readonly` alternate

• **alternate**: *[IBuffer]({% link _docs/api/terminal/interfaces/ibuffer.md %})*

*Defined in [xterm.d.ts:1584](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1584)*

The alternate buffer, this becomes the active buffer when an application
enters this mode via DECSET (`CSI ? 4 7 h`)

___

### `Readonly` normal

• **normal**: *[IBuffer]({% link _docs/api/terminal/interfaces/ibuffer.md %})*

*Defined in [xterm.d.ts:1578](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1578)*

The normal buffer.

___

###  onBufferChange

• **onBufferChange**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹[IBuffer]({% link _docs/api/terminal/interfaces/ibuffer.md %})›*

*Defined in [xterm.d.ts:1590](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1590)*

Adds an event listener for when the active buffer changes.

**`returns`** an `IDisposable` to stop listening.
