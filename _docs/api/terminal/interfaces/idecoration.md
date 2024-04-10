---
category: API-interfaces
layout: docs
---


***

[@xterm/xterm]({% link _docs/api/terminal/readme.md %}) / IDecoration

# Interface: IDecoration

Represents a decoration in the terminal that is associated with a
particular marker and DOM element.

## Extends

- [`IDisposableWithEvent`]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %})

## Properties

### element

> **element**: `HTMLElement`

The element that the decoration is rendered to. This will be undefined
until it is rendered for the first time by [IDecoration.onRender]({% link _docs/api/terminal/interfaces/idecoration.md %}#onrender).
that.

#### Source

[xterm.d.ts:520](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L520)

***

### isDisposed

> **`readonly`** **isDisposed**: `boolean`

Whether this is disposed.

#### Inherited from

[`IDisposableWithEvent`]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}).[`isDisposed`]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}#isdisposed)

#### Source

[xterm.d.ts:495](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L495)

***

### marker

> **`readonly`** **marker**: [`IMarker`]({% link _docs/api/terminal/interfaces/imarker.md %})

#### Source

[xterm.d.ts:506](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L506)

***

### onDispose

> **onDispose**: [`IEvent`]({% link _docs/api/terminal/interfaces/ievent.md %})\<`void`, `void`\>

Event listener to get notified when this gets disposed.

#### Inherited from

[`IDisposableWithEvent`]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}).[`onDispose`]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}#ondispose)

#### Source

[xterm.d.ts:490](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L490)

***

### onRender

> **`readonly`** **onRender**: [`IEvent`]({% link _docs/api/terminal/interfaces/ievent.md %})\<`HTMLElement`, `void`\>

An event fired when the decoration
is rendered, returns the dom element
associated with the decoration.

#### Source

[xterm.d.ts:513](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L513)

***

### options

> **options**: `Pick`\<[`IDecorationOptions`]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}), `"overviewRulerOptions"`\>

The options for the overview ruler that can be updated. This will only
take effect when [IDecorationOptions.overviewRulerOptions]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}#overviewruleroptions) were
provided initially.

#### Source

[xterm.d.ts:527](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L527)

## Methods

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[`IDisposableWithEvent`]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}).[`dispose`]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}#dispose)

#### Source

[xterm.d.ts:454](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L454)
