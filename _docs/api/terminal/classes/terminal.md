---
title: Terminal
category: API-classes
layout: docs
---


# Class: Terminal

The class that represents an xterm.js terminal.

## Hierarchy

**Terminal**

## Implements

* [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})

## Index

### Constructors

* [constructor]({% link _docs/api/terminal/classes/terminal.md %}#constructor)

### Properties

* [buffer]({% link _docs/api/terminal/classes/terminal.md %}#buffer)
* [cols]({% link _docs/api/terminal/classes/terminal.md %}#cols)
* [element]({% link _docs/api/terminal/classes/terminal.md %}#element)
* [markers]({% link _docs/api/terminal/classes/terminal.md %}#markers)
* [onBinary]({% link _docs/api/terminal/classes/terminal.md %}#onbinary)
* [onCursorMove]({% link _docs/api/terminal/classes/terminal.md %}#oncursormove)
* [onData]({% link _docs/api/terminal/classes/terminal.md %}#ondata)
* [onKey]({% link _docs/api/terminal/classes/terminal.md %}#onkey)
* [onLineFeed]({% link _docs/api/terminal/classes/terminal.md %}#onlinefeed)
* [onRender]({% link _docs/api/terminal/classes/terminal.md %}#onrender)
* [onResize]({% link _docs/api/terminal/classes/terminal.md %}#onresize)
* [onScroll]({% link _docs/api/terminal/classes/terminal.md %}#onscroll)
* [onSelectionChange]({% link _docs/api/terminal/classes/terminal.md %}#onselectionchange)
* [onTitleChange]({% link _docs/api/terminal/classes/terminal.md %}#ontitlechange)
* [parser]({% link _docs/api/terminal/classes/terminal.md %}#parser)
* [rows]({% link _docs/api/terminal/classes/terminal.md %}#rows)
* [textarea]({% link _docs/api/terminal/classes/terminal.md %}#textarea)
* [unicode]({% link _docs/api/terminal/classes/terminal.md %}#unicode)
* [strings]({% link _docs/api/terminal/classes/terminal.md %}#strings)

### Methods

* [addMarker]({% link _docs/api/terminal/classes/terminal.md %}#addmarker)
* [attachCustomKeyEventHandler]({% link _docs/api/terminal/classes/terminal.md %}#attachcustomkeyeventhandler)
* [blur]({% link _docs/api/terminal/classes/terminal.md %}#blur)
* [clear]({% link _docs/api/terminal/classes/terminal.md %}#clear)
* [clearSelection]({% link _docs/api/terminal/classes/terminal.md %}#clearselection)
* [deregisterCharacterJoiner]({% link _docs/api/terminal/classes/terminal.md %}#deregistercharacterjoiner)
* [deregisterLinkMatcher]({% link _docs/api/terminal/classes/terminal.md %}#deregisterlinkmatcher)
* [dispose]({% link _docs/api/terminal/classes/terminal.md %}#dispose)
* [focus]({% link _docs/api/terminal/classes/terminal.md %}#focus)
* [getOption]({% link _docs/api/terminal/classes/terminal.md %}#getoption)
* [getSelection]({% link _docs/api/terminal/classes/terminal.md %}#getselection)
* [getSelectionPosition]({% link _docs/api/terminal/classes/terminal.md %}#getselectionposition)
* [hasSelection]({% link _docs/api/terminal/classes/terminal.md %}#hasselection)
* [loadAddon]({% link _docs/api/terminal/classes/terminal.md %}#loadaddon)
* [open]({% link _docs/api/terminal/classes/terminal.md %}#open)
* [paste]({% link _docs/api/terminal/classes/terminal.md %}#paste)
* [refresh]({% link _docs/api/terminal/classes/terminal.md %}#refresh)
* [registerCharacterJoiner]({% link _docs/api/terminal/classes/terminal.md %}#registercharacterjoiner)
* [registerLinkMatcher]({% link _docs/api/terminal/classes/terminal.md %}#registerlinkmatcher)
* [registerMarker]({% link _docs/api/terminal/classes/terminal.md %}#registermarker)
* [reset]({% link _docs/api/terminal/classes/terminal.md %}#reset)
* [resize]({% link _docs/api/terminal/classes/terminal.md %}#resize)
* [scrollLines]({% link _docs/api/terminal/classes/terminal.md %}#scrolllines)
* [scrollPages]({% link _docs/api/terminal/classes/terminal.md %}#scrollpages)
* [scrollToBottom]({% link _docs/api/terminal/classes/terminal.md %}#scrolltobottom)
* [scrollToLine]({% link _docs/api/terminal/classes/terminal.md %}#scrolltoline)
* [scrollToTop]({% link _docs/api/terminal/classes/terminal.md %}#scrolltotop)
* [select]({% link _docs/api/terminal/classes/terminal.md %}#select)
* [selectAll]({% link _docs/api/terminal/classes/terminal.md %}#selectall)
* [selectLines]({% link _docs/api/terminal/classes/terminal.md %}#selectlines)
* [setOption]({% link _docs/api/terminal/classes/terminal.md %}#setoption)
* [write]({% link _docs/api/terminal/classes/terminal.md %}#write)
* [writeUtf8]({% link _docs/api/terminal/classes/terminal.md %}#writeutf8)
* [writeln]({% link _docs/api/terminal/classes/terminal.md %}#writeln)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Terminal**(options?: *[ITerminalOptions]({% link _docs/api/terminal/interfaces/iterminaloptions.md %})*): [Terminal]({% link _docs/api/terminal/classes/terminal.md %})

*Defined in [xterm.d.ts:600](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L600)*

Creates a new `Terminal` object.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [ITerminalOptions]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}) |  An object containing a set of options. |

**Returns:** [Terminal]({% link _docs/api/terminal/classes/terminal.md %})

___

## Properties

<a id="buffer"></a>

###  buffer

**● buffer**: *[IBuffer]({% link _docs/api/terminal/interfaces/ibuffer.md %})*

*Defined in [xterm.d.ts:577](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L577)*

(EXPERIMENTAL) The terminal's current buffer, this might be either the normal buffer or the alt buffer depending on what's running in the terminal.

___
<a id="cols"></a>

###  cols

**● cols**: *`number`*

*Defined in [xterm.d.ts:570](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L570)*

The number of columns in the terminal's viewport. Use `ITerminalOptions.cols` to set this in the constructor and `Terminal.resize` for when the terminal exists.

___
<a id="element"></a>

###  element

**● element**: *`HTMLElement` \| `undefined`*

*Defined in [xterm.d.ts:551](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L551)*

The element containing the terminal.

___
<a id="markers"></a>

###  markers

**● markers**: *`ReadonlyArray`<[IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})>*

*Defined in [xterm.d.ts:583](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L583)*

(EXPERIMENTAL) Get all markers registered against the buffer. If the alt buffer is active this will always return \[\].

___
<a id="onbinary"></a>

###  onBinary

**● onBinary**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})<`string`>*

*Defined in [xterm.d.ts:618](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L618)*

Adds an event listener for when a binary event fires. This is used to enable non UTF-8 conformant binary messages to be sent to the backend. Currently this is only used for a certain type of mouse reports that happen to be not UTF-8 compatible. The event value is a JS string, pass it to the underlying pty as binary data, e.g. `pty.write(Buffer.from(data, 'binary'))`.

*__returns__*: an `IDisposable` to stop listening.

___
<a id="oncursormove"></a>

###  onCursorMove

**● onCursorMove**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})<`void`>*

*Defined in [xterm.d.ts:624](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L624)*

Adds an event listener for the cursor moves.

*__returns__*: an `IDisposable` to stop listening.

___
<a id="ondata"></a>

###  onData

**● onData**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})<`string`>*

*Defined in [xterm.d.ts:633](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L633)*

Adds an event listener for when a data event fires. This happens for example when the user types or pastes into the terminal. The event value is whatever `string` results, in a typical setup, this should be passed on to the backing pty.

*__returns__*: an `IDisposable` to stop listening.

___
<a id="onkey"></a>

###  onKey

**● onKey**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})<`object`>*

*Defined in [xterm.d.ts:641](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L641)*

Adds an event listener for when a key is pressed. The event value contains the string that will be sent in the data event as well as the DOM event that triggered it.

*__returns__*: an `IDisposable` to stop listening.

___
<a id="onlinefeed"></a>

###  onLineFeed

**● onLineFeed**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})<`void`>*

*Defined in [xterm.d.ts:647](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L647)*

Adds an event listener for when a line feed is added.

*__returns__*: an `IDisposable` to stop listening.

___
<a id="onrender"></a>

###  onRender

**● onRender**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})<`object`>*

*Defined in [xterm.d.ts:668](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L668)*

Adds an event listener for when rows are rendered. The event value contains the start row and end rows of the rendered area (ranges from `0` to `Terminal.rows - 1`).

*__returns__*: an `IDisposable` to stop listening.

___
<a id="onresize"></a>

###  onResize

**● onResize**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})<`object`>*

*Defined in [xterm.d.ts:675](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L675)*

Adds an event listener for when the terminal is resized. The event value contains the new size.

*__returns__*: an `IDisposable` to stop listening.

___
<a id="onscroll"></a>

###  onScroll

**● onScroll**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})<`number`>*

*Defined in [xterm.d.ts:654](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L654)*

Adds an event listener for when a scroll occurs. The event value is the new position of the viewport.

*__returns__*: an `IDisposable` to stop listening.

___
<a id="onselectionchange"></a>

###  onSelectionChange

**● onSelectionChange**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})<`void`>*

*Defined in [xterm.d.ts:660](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L660)*

Adds an event listener for when a selection change occurs.

*__returns__*: an `IDisposable` to stop listening.

___
<a id="ontitlechange"></a>

###  onTitleChange

**● onTitleChange**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})<`string`>*

*Defined in [xterm.d.ts:682](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L682)*

Adds an event listener for when an OSC 0 or OSC 2 title change occurs. The event value is the new title.

*__returns__*: an `IDisposable` to stop listening.

___
<a id="parser"></a>

###  parser

**● parser**: *[IParser]({% link _docs/api/terminal/interfaces/iparser.md %})*

*Defined in [xterm.d.ts:589](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L589)*

(EXPERIMENTAL) Get the parser interface to register custom escape sequence handlers.

___
<a id="rows"></a>

###  rows

**● rows**: *`number`*

*Defined in [xterm.d.ts:563](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L563)*

The number of rows in the terminal's viewport. Use `ITerminalOptions.rows` to set this in the constructor and `Terminal.resize` for when the terminal exists.

___
<a id="textarea"></a>

###  textarea

**● textarea**: *`HTMLTextAreaElement` \| `undefined`*

*Defined in [xterm.d.ts:556](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L556)*

The textarea that accepts input for the terminal.

___
<a id="unicode"></a>

###  unicode

**● unicode**: *[IUnicodeHandling]({% link _docs/api/terminal/interfaces/iunicodehandling.md %})*

*Defined in [xterm.d.ts:595](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L595)*

(EXPERIMENTAL) Get the Unicode handling interface to register and switch Unicode version.

___
<a id="strings"></a>

### `<Static>` strings

**● strings**: *[ILocalizableStrings]({% link _docs/api/terminal/interfaces/ilocalizablestrings.md %})*

*Defined in [xterm.d.ts:600](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L600)*

Natural language strings that can be localized.

___

## Methods

<a id="addmarker"></a>

###  addMarker

▸ **addMarker**(cursorYOffset: *`number`*): [IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})

*Defined in [xterm.d.ts:788](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L788)*

*__deprecated__*: use `registerMarker` instead.

**Parameters:**

| Name | Type |
| ------ | ------ |
| cursorYOffset | `number` |

**Returns:** [IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})

___
<a id="attachcustomkeyeventhandler"></a>

###  attachCustomKeyEventHandler

▸ **attachCustomKeyEventHandler**(customKeyEventHandler: *`function`*): `void`

*Defined in [xterm.d.ts:720](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L720)*

Attaches a custom key event handler which is run before keys are processed, giving consumers of xterm.js ultimate control as to what keys should be processed by the terminal and what keys should not.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| customKeyEventHandler | `function` |  The custom KeyboardEvent handler to attach. This is a function that takes a KeyboardEvent, allowing consumers to stop propagation and/or prevent the default action. The function returns whether the event should be processed by xterm.js. |

**Returns:** `void`

___
<a id="blur"></a>

###  blur

▸ **blur**(): `void`

*Defined in [xterm.d.ts:687](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L687)*

Unfocus the terminal.

**Returns:** `void`

___
<a id="clear"></a>

###  clear

▸ **clear**(): `void`

*Defined in [xterm.d.ts:868](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L868)*

Clear the entire buffer, making the prompt line the new first line.

**Returns:** `void`

___
<a id="clearselection"></a>

###  clearSelection

▸ **clearSelection**(): `void`

*Defined in [xterm.d.ts:809](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L809)*

Clears the current terminal selection.

**Returns:** `void`

___
<a id="deregistercharacterjoiner"></a>

###  deregisterCharacterJoiner

▸ **deregisterCharacterJoiner**(joinerId: *`number`*): `void`

*Defined in [xterm.d.ts:776](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L776)*

(EXPERIMENTAL) Deregisters the character joiner if one was registered. NOTE: character joiners are only used by the canvas renderer.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| joinerId | `number` |  The character joiner's ID (returned after register) |

**Returns:** `void`

___
<a id="deregisterlinkmatcher"></a>

###  deregisterLinkMatcher

▸ **deregisterLinkMatcher**(matcherId: *`number`*): `void`

*Defined in [xterm.d.ts:738](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L738)*

(EXPERIMENTAL) Deregisters a link matcher if it has been registered.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| matcherId | `number` |  The link matcher's ID (returned after register) |

**Returns:** `void`

___
<a id="dispose"></a>

###  dispose

▸ **dispose**(): `void`

*Implementation of [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %}).[dispose]({% link _docs/api/terminal/interfaces/idisposable.md %}#dispose)*

*Defined in [xterm.d.ts:835](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L835)*

**Returns:** `void`

___
<a id="focus"></a>

###  focus

▸ **focus**(): `void`

*Defined in [xterm.d.ts:692](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L692)*

Focus the terminal.

**Returns:** `void`

___
<a id="getoption"></a>

###  getOption

▸ **getOption**(key: *"bellSound" \| "bellStyle" \| "cursorStyle" \| "fontFamily" \| "fontWeight" \| "fontWeightBold" \| "logLevel" \| "rendererType" \| "termName" \| "wordSeparator"*): `string`

▸ **getOption**(key: *"allowTransparency" \| "cancelEvents" \| "convertEol" \| "cursorBlink" \| "disableStdin" \| "macOptionIsMeta" \| "rightClickSelectsWord" \| "popOnBell" \| "visualBell" \| "windowsMode"*): `boolean`

▸ **getOption**(key: *"cols" \| "fontSize" \| "letterSpacing" \| "lineHeight" \| "rows" \| "tabStopWidth" \| "scrollback"*): `number`

▸ **getOption**(key: *`string`*): `any`

*Defined in [xterm.d.ts:908](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L908)*

Retrieves an option's value from the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "bellSound" \| "bellStyle" \| "cursorStyle" \| "fontFamily" \| "fontWeight" \| "fontWeightBold" \| "logLevel" \| "rendererType" \| "termName" \| "wordSeparator" |  The option key. |

**Returns:** `string`

*Defined in [xterm.d.ts:913](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L913)*

Retrieves an option's value from the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "allowTransparency" \| "cancelEvents" \| "convertEol" \| "cursorBlink" \| "disableStdin" \| "macOptionIsMeta" \| "rightClickSelectsWord" \| "popOnBell" \| "visualBell" \| "windowsMode" |  The option key. |

**Returns:** `boolean`

*Defined in [xterm.d.ts:918](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L918)*

Retrieves an option's value from the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "cols" \| "fontSize" \| "letterSpacing" \| "lineHeight" \| "rows" \| "tabStopWidth" \| "scrollback" |  The option key. |

**Returns:** `number`

*Defined in [xterm.d.ts:923](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L923)*

Retrieves an option's value from the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `string` |  The option key. |

**Returns:** `any`

___
<a id="getselection"></a>

###  getSelection

▸ **getSelection**(): `string`

*Defined in [xterm.d.ts:799](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L799)*

Gets the terminal's current selection, this is useful for implementing copy behavior outside of xterm.js.

**Returns:** `string`

___
<a id="getselectionposition"></a>

###  getSelectionPosition

▸ **getSelectionPosition**(): [ISelectionPosition]({% link _docs/api/terminal/interfaces/iselectionposition.md %}) \| `undefined`

*Defined in [xterm.d.ts:804](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L804)*

Gets the selection position or undefined if there is no selection.

**Returns:** [ISelectionPosition]({% link _docs/api/terminal/interfaces/iselectionposition.md %}) \| `undefined`

___
<a id="hasselection"></a>

###  hasSelection

▸ **hasSelection**(): `boolean`

*Defined in [xterm.d.ts:793](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L793)*

Gets whether the terminal has an active selection.

**Returns:** `boolean`

___
<a id="loadaddon"></a>

###  loadAddon

▸ **loadAddon**(addon: *[ITerminalAddon]({% link _docs/api/terminal/interfaces/iterminaladdon.md %})*): `void`

*Defined in [xterm.d.ts:1003](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1003)*

Loads an addon into this instance of xterm.js.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| addon | [ITerminalAddon]({% link _docs/api/terminal/interfaces/iterminaladdon.md %}) |  The addon to load. |

**Returns:** `void`

___
<a id="open"></a>

###  open

▸ **open**(parent: *`HTMLElement`*): `void`

*Defined in [xterm.d.ts:709](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L709)*

Opens the terminal within an element.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| parent | `HTMLElement` |  The element to create the terminal within. This element must be visible (have dimensions) when \`open\` is called as several DOM- based measurements need to be performed when this function is called. |

**Returns:** `void`

___
<a id="paste"></a>

###  paste

▸ **paste**(data: *`string`*): `void`

*Defined in [xterm.d.ts:902](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L902)*

Writes text to the terminal, performing the necessary transformations for pasted text.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | `string` |  The text to write to the terminal. |

**Returns:** `void`

___
<a id="refresh"></a>

###  refresh

▸ **refresh**(start: *`number`*, end: *`number`*): `void`

*Defined in [xterm.d.ts:992](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L992)*

Tells the renderer to refresh terminal content between two rows (inclusive) at the next opportunity.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  The row to start from (between 0 and this.rows - 1). |
| end | `number` |  The row to end at (between start and this.rows - 1). |

**Returns:** `void`

___
<a id="registercharacterjoiner"></a>

###  registerCharacterJoiner

▸ **registerCharacterJoiner**(handler: *`function`*): `number`

*Defined in [xterm.d.ts:769](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L769)*

(EXPERIMENTAL) Registers a character joiner, allowing custom sequences of characters to be rendered as a single unit. This is useful in particular for rendering ligatures and graphemes, among other things.

Each registered character joiner is called with a string of text representing a portion of a line in the terminal that can be rendered as a single unit. The joiner must return a sorted array, where each entry is itself an array of length two, containing the start (inclusive) and end (exclusive) index of a substring of the input that should be rendered as a single unit. When multiple joiners are provided, the results of each are collected. If there are any overlapping substrings between them, they are combined into one larger unit that is drawn together.

All character joiners that are registered get called every time a line is rendered in the terminal, so it is essential for the handler function to run as quickly as possible to avoid slowdowns when rendering. Similarly, joiners should strive to return the smallest possible substrings to render together, since they aren't drawn as optimally as individual characters.

NOTE: character joiners are only used by the canvas renderer.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| handler | `function` |  The function that determines character joins. It is called with a string of text that is eligible for joining and returns an array where each entry is an array containing the start (inclusive) and end (exclusive) indexes of ranges that should be rendered as a single unit. |

**Returns:** `number`
The ID of the new joiner, this can be used to deregister

___
<a id="registerlinkmatcher"></a>

###  registerLinkMatcher

▸ **registerLinkMatcher**(regex: *`RegExp`*, handler: *`function`*, options?: *[ILinkMatcherOptions]({% link _docs/api/terminal/interfaces/ilinkmatcheroptions.md %})*): `number`

*Defined in [xterm.d.ts:732](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L732)*

(EXPERIMENTAL) Registers a link matcher, allowing custom link patterns to be matched and handled.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| regex | `RegExp` |  The regular expression to search for, specifically this searches the textContent of the rows. You will want to use \\s to match a space ' ' character for example. |
| handler | `function` |  The callback when the link is called. |
| `Optional` options | [ILinkMatcherOptions]({% link _docs/api/terminal/interfaces/ilinkmatcheroptions.md %}) |  Options for the link matcher. |

**Returns:** `number`
The ID of the new matcher, this can be used to deregister.

___
<a id="registermarker"></a>

###  registerMarker

▸ **registerMarker**(cursorYOffset: *`number`*): [IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})

*Defined in [xterm.d.ts:783](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L783)*

(EXPERIMENTAL) Adds a marker to the normal buffer and returns it. If the alt buffer is active, undefined is returned.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| cursorYOffset | `number` |  The y position offset of the marker from the cursor. |

**Returns:** [IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})

___
<a id="reset"></a>

###  reset

▸ **reset**(): `void`

*Defined in [xterm.d.ts:997](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L997)*

Perform a full reset (RIS, aka '\\x1bc').

**Returns:** `void`

___
<a id="resize"></a>

###  resize

▸ **resize**(columns: *`number`*, rows: *`number`*): `void`

*Defined in [xterm.d.ts:701](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L701)*

Resizes the terminal. It's best practice to debounce calls to resize, this will help ensure that the pty can respond to the resize event before another one occurs.

**Parameters:**

| Name | Type |
| ------ | ------ |
| columns | `number` |
| rows | `number` |

**Returns:** `void`

___
<a id="scrolllines"></a>

###  scrollLines

▸ **scrollLines**(amount: *`number`*): `void`

*Defined in [xterm.d.ts:841](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L841)*

Scroll the display of the terminal

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| amount | `number` |  The number of lines to scroll down (negative scroll up). |

**Returns:** `void`

___
<a id="scrollpages"></a>

###  scrollPages

▸ **scrollPages**(pageCount: *`number`*): `void`

*Defined in [xterm.d.ts:847](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L847)*

Scroll the display of the terminal by a number of pages.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| pageCount | `number` |  The number of pages to scroll (negative scrolls up). |

**Returns:** `void`

___
<a id="scrolltobottom"></a>

###  scrollToBottom

▸ **scrollToBottom**(): `void`

*Defined in [xterm.d.ts:857](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L857)*

Scrolls the display of the terminal to the bottom.

**Returns:** `void`

___
<a id="scrolltoline"></a>

###  scrollToLine

▸ **scrollToLine**(line: *`number`*): `void`

*Defined in [xterm.d.ts:863](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L863)*

Scrolls to a line within the buffer.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| line | `number` |  The 0-based line index to scroll to. |

**Returns:** `void`

___
<a id="scrolltotop"></a>

###  scrollToTop

▸ **scrollToTop**(): `void`

*Defined in [xterm.d.ts:852](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L852)*

Scrolls the display of the terminal to the top.

**Returns:** `void`

___
<a id="select"></a>

###  select

▸ **select**(column: *`number`*, row: *`number`*, length: *`number`*): `void`

*Defined in [xterm.d.ts:817](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L817)*

Selects text within the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| column | `number` |  The column the selection starts at. |
| row | `number` |  The row the selection starts at. |
| length | `number` |  The length of the selection. |

**Returns:** `void`

___
<a id="selectall"></a>

###  selectAll

▸ **selectAll**(): `void`

*Defined in [xterm.d.ts:822](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L822)*

Selects all text within the terminal.

**Returns:** `void`

___
<a id="selectlines"></a>

###  selectLines

▸ **selectLines**(start: *`number`*, end: *`number`*): `void`

*Defined in [xterm.d.ts:829](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L829)*

Selects text in the buffer between 2 lines.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  The 0-based line index to select from (inclusive). |
| end | `number` |  The 0-based line index to select to (inclusive). |

**Returns:** `void`

___
<a id="setoption"></a>

###  setOption

▸ **setOption**(key: *"fontFamily" \| "termName" \| "bellSound" \| "wordSeparator"*, value: *`string`*): `void`

▸ **setOption**(key: *"fontWeight" \| "fontWeightBold"*, value: *`null` \| "normal" \| "bold" \| "100" \| "200" \| "300" \| "400" \| "500" \| "600" \| "700" \| "800" \| "900"*): `void`

▸ **setOption**(key: *"logLevel"*, value: *[LogLevel]({% link _docs/api/terminal/modules/xterm.md %}#loglevel)*): `void`

▸ **setOption**(key: *"bellStyle"*, value: *`null` \| "none" \| "visual" \| "sound" \| "both"*): `void`

▸ **setOption**(key: *"cursorStyle"*, value: *`null` \| "block" \| "underline" \| "bar"*): `void`

▸ **setOption**(key: *"allowTransparency" \| "cancelEvents" \| "convertEol" \| "cursorBlink" \| "disableStdin" \| "macOptionIsMeta" \| "popOnBell" \| "rightClickSelectsWord" \| "visualBell" \| "windowsMode"*, value: *`boolean`*): `void`

▸ **setOption**(key: *"fontSize" \| "letterSpacing" \| "lineHeight" \| "tabStopWidth" \| "scrollback"*, value: *`number`*): `void`

▸ **setOption**(key: *"theme"*, value: *[ITheme]({% link _docs/api/terminal/interfaces/itheme.md %})*): `void`

▸ **setOption**(key: *"cols" \| "rows"*, value: *`number`*): `void`

▸ **setOption**(key: *`string`*, value: *`any`*): `void`

*Defined in [xterm.d.ts:930](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L930)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "fontFamily" \| "termName" \| "bellSound" \| "wordSeparator" |  The option key. |
| value | `string` |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:936](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L936)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "fontWeight" \| "fontWeightBold" |  The option key. |
| value | `null` \| "normal" \| "bold" \| "100" \| "200" \| "300" \| "400" \| "500" \| "600" \| "700" \| "800" \| "900" |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:942](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L942)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "logLevel" |  The option key. |
| value | [LogLevel]({% link _docs/api/terminal/modules/xterm.md %}#loglevel) |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:948](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L948)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "bellStyle" |  The option key. |
| value | `null` \| "none" \| "visual" \| "sound" \| "both" |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:954](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L954)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "cursorStyle" |  The option key. |
| value | `null` \| "block" \| "underline" \| "bar" |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:960](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L960)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "allowTransparency" \| "cancelEvents" \| "convertEol" \| "cursorBlink" \| "disableStdin" \| "macOptionIsMeta" \| "popOnBell" \| "rightClickSelectsWord" \| "visualBell" \| "windowsMode" |  The option key. |
| value | `boolean` |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:966](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L966)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "fontSize" \| "letterSpacing" \| "lineHeight" \| "tabStopWidth" \| "scrollback" |  The option key. |
| value | `number` |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:972](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L972)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "theme" |  The option key. |
| value | [ITheme]({% link _docs/api/terminal/interfaces/itheme.md %}) |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:978](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L978)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "cols" \| "rows" |  The option key. |
| value | `number` |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:984](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L984)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `string` |  The option key. |
| value | `any` |  The option value. |

**Returns:** `void`

___
<a id="write"></a>

###  write

▸ **write**(data: *`string` \| `Uint8Array`*, callback?: *`function`*): `void`

*Defined in [xterm.d.ts:878](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L878)*

Write data to the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | `string` \| `Uint8Array` |  The data to write to the terminal. This can either be raw bytes given as Uint8Array from the pty or a string. Raw bytes will always be treated as UTF-8 encoded, string data as UTF-16. |
| `Optional` callback | `function` |  Optional callback that fires when the data was processed by the parser. |

**Returns:** `void`

___
<a id="writeutf8"></a>

###  writeUtf8

▸ **writeUtf8**(data: *`Uint8Array`*, callback?: *`function`*): `void`

*Defined in [xterm.d.ts:896](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L896)*

Write UTF8 data to the terminal.

*__deprecated__*: use `write` instead

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | `Uint8Array` |  The data to write to the terminal. |
| `Optional` callback | `function` |  Optional callback when data was processed. |

**Returns:** `void`

___
<a id="writeln"></a>

###  writeln

▸ **writeln**(data: *`string` \| `Uint8Array`*, callback?: *`function`*): `void`

*Defined in [xterm.d.ts:888](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L888)*

Writes data to the terminal, followed by a break line character (\\n).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | `string` \| `Uint8Array` |  The data to write to the terminal. This can either be raw bytes given as Uint8Array from the pty or a string. Raw bytes will always be treated as UTF-8 encoded, string data as UTF-16. |
| `Optional` callback | `function` |  Optional callback that fires when the data was processed by the parser. |

**Returns:** `void`

___

