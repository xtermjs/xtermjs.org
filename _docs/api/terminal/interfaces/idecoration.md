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

*Defined in [xterm.d.ts:404](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L404)*

___

###  isDisposed

• **isDisposed**: *boolean*

*Inherited from [IDisposableWithEvent]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}).[isDisposed]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}#isdisposed)*

*Defined in [xterm.d.ts:380](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L380)*

___

###  marker

• **marker**: *[IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})*

*Defined in [xterm.d.ts:390](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L390)*

___

###  onDispose

• **onDispose**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹void›*

*Inherited from [IDisposableWithEvent]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}).[onDispose]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}#ondispose)*

*Defined in [xterm.d.ts:375](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L375)*

___

###  onRender

• **onRender**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹HTMLElement›*

*Defined in [xterm.d.ts:397](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L397)*

___

###  options

• **options**: *Pick‹[IDecorationOptions]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}), "overviewRulerOptions"›*

*Defined in [xterm.d.ts:411](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L411)*

## Methods

###  dispose

▸ **dispose**(): *void*

*Inherited from [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %}).[dispose]({% link _docs/api/terminal/interfaces/idisposable.md %}#dispose)*

*Defined in [xterm.d.ts:337](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L337)*

**Returns:** *void*
