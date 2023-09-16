---
title: IDecoration
category: API-interfaces
layout: docs
---


# Interface: IDecoration

## Hierarchy

  ↳ [IDisposableWithEvent]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %})

  ↳ **IDecoration**

## Index

### Properties

* [element]({% link _docs/api/terminal/interfaces/idecoration.md %}#element)
* [isDisposed]({% link _docs/api/terminal/interfaces/idecoration.md %}#isdisposed)
* [marker]({% link _docs/api/terminal/interfaces/idecoration.md %}#marker)
* [onDispose]({% link _docs/api/terminal/interfaces/idecoration.md %}#ondispose)
* [onRender]({% link _docs/api/terminal/interfaces/idecoration.md %}#onrender)
* [options]({% link _docs/api/terminal/interfaces/idecoration.md %}#options)

### Methods

* [dispose]({% link _docs/api/terminal/interfaces/idecoration.md %}#dispose)

## Properties

###  element

• **element**: *HTMLElement | undefined*

*Defined in [xterm.d.ts:492](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L492)*

___

###  isDisposed

• **isDisposed**: *boolean*

*Inherited from [IDisposableWithEvent]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}).[isDisposed]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}#isdisposed)*

*Defined in [xterm.d.ts:467](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L467)*

___

###  marker

• **marker**: *[IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})*

*Defined in [xterm.d.ts:478](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L478)*

___

###  onDispose

• **onDispose**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹void›*

*Inherited from [IDisposableWithEvent]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}).[onDispose]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}#ondispose)*

*Defined in [xterm.d.ts:462](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L462)*

___

###  onRender

• **onRender**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹HTMLElement›*

*Defined in [xterm.d.ts:485](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L485)*

___

###  options

• **options**: *Pick‹[IDecorationOptions]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}), "overviewRulerOptions"›*

*Defined in [xterm.d.ts:499](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L499)*

## Methods

###  dispose

▸ **dispose**(): *void*

*Inherited from [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %}).[dispose]({% link _docs/api/terminal/interfaces/idisposable.md %}#dispose)*

*Defined in [xterm.d.ts:426](https://github.com/xtermjs/xterm.js/blob/5.3.0/typings/xterm.d.ts#L426)*

**Returns:** *void*
