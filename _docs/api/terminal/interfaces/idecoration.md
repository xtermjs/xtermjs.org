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

[xterm.d.ts:503](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L503)

***

### isDisposed

> **`readonly`** **isDisposed**: `boolean`

Whether this is disposed.

#### Inherited from

[`IDisposableWithEvent`]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}).[`isDisposed`]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}#isdisposed)

#### Source

[xterm.d.ts:478](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L478)

***

### marker

> **`readonly`** **marker**: [`IMarker`]({% link _docs/api/terminal/interfaces/imarker.md %})

#### Source

[xterm.d.ts:489](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L489)

***

### onDispose

> **onDispose**: [`IEvent`]({% link _docs/api/terminal/interfaces/ievent.md %})\<`void`, `void`\>

Event listener to get notified when this gets disposed.

#### Inherited from

[`IDisposableWithEvent`]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}).[`onDispose`]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}#ondispose)

#### Source

[xterm.d.ts:473](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L473)

***

### onRender

> **`readonly`** **onRender**: [`IEvent`]({% link _docs/api/terminal/interfaces/ievent.md %})\<`HTMLElement`, `void`\>

An event fired when the decoration
is rendered, returns the dom element
associated with the decoration.

#### Source

[xterm.d.ts:496](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L496)

***

### options

> **options**: `Pick`\<[`IDecorationOptions`]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}), `"overviewRulerOptions"`\>

The options for the overview ruler that can be updated. This will only
take effect when [IDecorationOptions.overviewRulerOptions]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}#overviewruleroptions) were
provided initially.

#### Source

[xterm.d.ts:510](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L510)

## Methods

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[`IDisposableWithEvent`]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}).[`dispose`]({% link _docs/api/terminal/interfaces/idisposablewithevent.md %}#dispose)

#### Source

[xterm.d.ts:437](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L437)
