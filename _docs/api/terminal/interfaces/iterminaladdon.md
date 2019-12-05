---
title: ITerminalAddon
category: API-interfaces
layout: docs
---


# Interface: ITerminalAddon

An addon that can provide additional functionality to the terminal.

## Hierarchy

 [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})

**↳ ITerminalAddon**

## Index

### Methods

* [activate]({% link _docs/api/terminal/interfaces/iterminaladdon.md %}#activate)
* [dispose]({% link _docs/api/terminal/interfaces/iterminaladdon.md %}#dispose)

---

## Methods

<a id="activate"></a>

###  activate

▸ **activate**(terminal: *[Terminal]({% link _docs/api/terminal/classes/terminal.md %})*): `void`

*Defined in [xterm.d.ts:857](https://github.com/xtermjs/xterm.js/blob/4.3.0/typings/xterm.d.ts#L857)*

This is called when the addon is activated.

**Parameters:**

| Name | Type |
| ------ | ------ |
| terminal | [Terminal]({% link _docs/api/terminal/classes/terminal.md %}) |

**Returns:** `void`

___
<a id="dispose"></a>

###  dispose

▸ **dispose**(): `void`

*Inherited from [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %}).[dispose]({% link _docs/api/terminal/interfaces/idisposable.md %}#dispose)*

*Defined in [xterm.d.ts:327](https://github.com/xtermjs/xterm.js/blob/4.3.0/typings/xterm.d.ts#L327)*

**Returns:** `void`

___

