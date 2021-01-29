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

* [active]({% link _docs/api/terminal/interfaces/ibuffernamespace.md %}#active)
* [alternate]({% link _docs/api/terminal/interfaces/ibuffernamespace.md %}#alternate)
* [normal]({% link _docs/api/terminal/interfaces/ibuffernamespace.md %}#normal)
* [onBufferChange]({% link _docs/api/terminal/interfaces/ibuffernamespace.md %}#onbufferchange)

## Properties

###  active

• **active**: *[IBuffer]({% link _docs/api/terminal/interfaces/ibuffer.md %})*

*Defined in [xterm.d.ts:1296](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1296)*

The active buffer, this will either be the normal or alternate buffers.

___

###  alternate

• **alternate**: *[IBuffer]({% link _docs/api/terminal/interfaces/ibuffer.md %})*

*Defined in [xterm.d.ts:1307](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1307)*

The alternate buffer, this becomes the active buffer when an application
enters this mode via DECSET (`CSI ? 4 7 h`)

___

###  normal

• **normal**: *[IBuffer]({% link _docs/api/terminal/interfaces/ibuffer.md %})*

*Defined in [xterm.d.ts:1301](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1301)*

The normal buffer.

___

###  onBufferChange

• **onBufferChange**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹[IBuffer]({% link _docs/api/terminal/interfaces/ibuffer.md %})›*

*Defined in [xterm.d.ts:1313](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L1313)*

Adds an event listener for when the active buffer changes.

**`returns`** an `IDisposable` to stop listening.
