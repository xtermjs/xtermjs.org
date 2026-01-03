---
title: IDecoration
category: API-interfaces
layout: docs
---


# Interface: IDecoration

Represents a decoration in the terminal that is associated with a
particular marker and DOM element.

## Hierarchy

  ↳ [IDisposableWithEvent]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %})

  ↳ **IDecoration**

## Index

### Properties

* [element]({% link _docs/api/terminal/interfaces/idecoration.md %}#element)
* [isDisposed]({% link _docs/api/terminal/interfaces/idecoration.md %}#readonly-isdisposed)
* [marker]({% link _docs/api/terminal/interfaces/idecoration.md %}#readonly-marker)
* [onDispose]({% link _docs/api/terminal/interfaces/idecoration.md %}#ondispose)
* [onRender]({% link _docs/api/terminal/interfaces/idecoration.md %}#readonly-onrender)
* [options]({% link _docs/api/terminal/interfaces/idecoration.md %}#options)

### Methods

* [dispose]({% link _docs/api/terminal/interfaces/idecoration.md %}#dispose)

## Properties

###  element

• **element**: *HTMLElement | undefined*

*Defined in [xterm.d.ts:533](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L533)*

The element that the decoration is rendered to. This will be undefined
until it is rendered for the first time by [IDecoration.onRender]({% link _docs/api/terminal/interfaces/idecoration.md %}#readonly-onrender).
that.

___

### `Readonly` isDisposed

• **isDisposed**: *boolean*

*Inherited from [IMarker]({% link _docs/api/terminal/interfaces/imarker.md %}).[isDisposed]({% link _docs/api/terminal/interfaces/imarker.md %}#readonly-isdisposed)*

*Defined in [xterm.d.ts:508](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L508)*

Whether this is disposed.

___

### `Readonly` marker

• **marker**: *[IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})*

*Defined in [xterm.d.ts:519](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L519)*

___

###  onDispose

• **onDispose**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹void›*

*Inherited from [IMarker]({% link _docs/api/terminal/interfaces/imarker.md %}).[onDispose]({% link _docs/api/terminal/interfaces/imarker.md %}#ondispose)*

*Defined in [xterm.d.ts:503](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L503)*

Event listener to get notified when this gets disposed.

___

### `Readonly` onRender

• **onRender**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹HTMLElement›*

*Defined in [xterm.d.ts:526](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L526)*

An event fired when the decoration
is rendered, returns the dom element
associated with the decoration.

___

###  options

• **options**: *Pick‹[IDecorationOptions]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}), "overviewRulerOptions"›*

*Defined in [xterm.d.ts:540](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L540)*

The options for the overview ruler that can be updated. This will only
take effect when [IDecorationOptions.overviewRulerOptions]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}#optional-overviewruleroptions) were
provided initially.

## Methods

###  dispose

▸ **dispose**(): *void*

*Inherited from [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %}).[dispose]({% link _docs/api/terminal/interfaces/idisposable.md %}#dispose)*

*Defined in [xterm.d.ts:467](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L467)*

**Returns:** *void*
