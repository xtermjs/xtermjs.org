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

*Defined in [xterm.d.ts:427](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L427)*

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

*Defined in [xterm.d.ts:410](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L410)*

(EXPERIMENTAL) The terminal's current buffer, this might be either the normal buffer or the alt buffer depending on what's running in the terminal.

___
<a id="cols"></a>

###  cols

**● cols**: *`number`*

*Defined in [xterm.d.ts:403](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L403)*

The number of columns in the terminal's viewport. Use `ITerminalOptions.cols` to set this in the constructor and `Terminal.resize` for when the terminal exists.

___
<a id="element"></a>

###  element

**● element**: *`HTMLElement` \| `undefined`*

*Defined in [xterm.d.ts:384](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L384)*

The element containing the terminal.

___
<a id="markers"></a>

###  markers

**● markers**: *`ReadonlyArray`<[IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})>*

*Defined in [xterm.d.ts:416](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L416)*

(EXPERIMENTAL) Get all markers registered against the buffer. If the alt buffer is active this will always return \[\].

___
<a id="onbinary"></a>

###  onBinary

**● onBinary**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})<`string`>*

*Defined in [xterm.d.ts:445](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L445)*

Adds an event listener for when a binary event fires. This is used to enable non UTF-8 conformant binary messages to be sent to the backend. Currently this is only used for a certain type of mouse reports that happen to be not UTF-8 compatible. The event value is a JS string, pass it to the underlying pty as binary data, e.g. `pty.write(Buffer.from(data, 'binary'))`.

*__returns__*: an `IDisposable` to stop listening.

___
<a id="oncursormove"></a>

###  onCursorMove

**● onCursorMove**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})<`void`>*

*Defined in [xterm.d.ts:451](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L451)*

Adds an event listener for the cursor moves.

*__returns__*: an `IDisposable` to stop listening.

___
<a id="ondata"></a>

###  onData

**● onData**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})<`string`>*

*Defined in [xterm.d.ts:460](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L460)*

Adds an event listener for when a data event fires. This happens for example when the user types or pastes into the terminal. The event value is whatever `string` results, in a typical setup, this should be passed on to the backing pty.

*__returns__*: an `IDisposable` to stop listening.

___
<a id="onkey"></a>

###  onKey

**● onKey**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})<`object`>*

*Defined in [xterm.d.ts:468](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L468)*

Adds an event listener for when a key is pressed. The event value contains the string that will be sent in the data event as well as the DOM event that triggered it.

*__returns__*: an `IDisposable` to stop listening.

___
<a id="onlinefeed"></a>

###  onLineFeed

**● onLineFeed**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})<`void`>*

*Defined in [xterm.d.ts:474](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L474)*

Adds an event listener for when a line feed is added.

*__returns__*: an `IDisposable` to stop listening.

___
<a id="onrender"></a>

###  onRender

**● onRender**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})<`object`>*

*Defined in [xterm.d.ts:495](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L495)*

Adds an event listener for when rows are rendered. The event value contains the start row and end rows of the rendered area (ranges from `0` to `Terminal.rows - 1`).

*__returns__*: an `IDisposable` to stop listening.

___
<a id="onresize"></a>

###  onResize

**● onResize**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})<`object`>*

*Defined in [xterm.d.ts:502](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L502)*

Adds an event listener for when the terminal is resized. The event value contains the new size.

*__returns__*: an `IDisposable` to stop listening.

___
<a id="onscroll"></a>

###  onScroll

**● onScroll**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})<`number`>*

*Defined in [xterm.d.ts:481](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L481)*

Adds an event listener for when a scroll occurs. The event value is the new position of the viewport.

*__returns__*: an `IDisposable` to stop listening.

___
<a id="onselectionchange"></a>

###  onSelectionChange

**● onSelectionChange**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})<`void`>*

*Defined in [xterm.d.ts:487](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L487)*

Adds an event listener for when a selection change occurs.

*__returns__*: an `IDisposable` to stop listening.

___
<a id="ontitlechange"></a>

###  onTitleChange

**● onTitleChange**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})<`string`>*

*Defined in [xterm.d.ts:509](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L509)*

Adds an event listener for when an OSC 0 or OSC 2 title change occurs. The event value is the new title.

*__returns__*: an `IDisposable` to stop listening.

___
<a id="parser"></a>

###  parser

**● parser**: *[IParser]({% link _docs/api/terminal/interfaces/iparser.md %})*

*Defined in [xterm.d.ts:422](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L422)*

(EXPERIMENTAL) Get the parser interface to register custom escape sequence handlers.

___
<a id="rows"></a>

###  rows

**● rows**: *`number`*

*Defined in [xterm.d.ts:396](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L396)*

The number of rows in the terminal's viewport. Use `ITerminalOptions.rows` to set this in the constructor and `Terminal.resize` for when the terminal exists.

___
<a id="textarea"></a>

###  textarea

**● textarea**: *`HTMLTextAreaElement` \| `undefined`*

*Defined in [xterm.d.ts:389](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L389)*

The textarea that accepts input for the terminal.

___
<a id="strings"></a>

### `<Static>` strings

**● strings**: *[ILocalizableStrings]({% link _docs/api/terminal/interfaces/ilocalizablestrings.md %})*

*Defined in [xterm.d.ts:427](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L427)*

Natural language strings that can be localized.

___

## Methods

<a id="addmarker"></a>

###  addMarker

▸ **addMarker**(cursorYOffset: *`number`*): [IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})

*Defined in [xterm.d.ts:610](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L610)*

(EXPERIMENTAL) Adds a marker to the normal buffer and returns it. If the alt buffer is active, undefined is returned.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| cursorYOffset | `number` |  The y position offset of the marker from the cursor. |

**Returns:** [IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})

___
<a id="attachcustomkeyeventhandler"></a>

###  attachCustomKeyEventHandler

▸ **attachCustomKeyEventHandler**(customKeyEventHandler: *`function`*): `void`

*Defined in [xterm.d.ts:547](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L547)*

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

*Defined in [xterm.d.ts:514](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L514)*

Unfocus the terminal.

**Returns:** `void`

___
<a id="clear"></a>

###  clear

▸ **clear**(): `void`

*Defined in [xterm.d.ts:690](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L690)*

Clear the entire buffer, making the prompt line the new first line.

**Returns:** `void`

___
<a id="clearselection"></a>

###  clearSelection

▸ **clearSelection**(): `void`

*Defined in [xterm.d.ts:631](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L631)*

Clears the current terminal selection.

**Returns:** `void`

___
<a id="deregistercharacterjoiner"></a>

###  deregisterCharacterJoiner

▸ **deregisterCharacterJoiner**(joinerId: *`number`*): `void`

*Defined in [xterm.d.ts:603](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L603)*

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

*Defined in [xterm.d.ts:565](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L565)*

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

*Defined in [xterm.d.ts:657](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L657)*

**Returns:** `void`

___
<a id="focus"></a>

###  focus

▸ **focus**(): `void`

*Defined in [xterm.d.ts:519](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L519)*

Focus the terminal.

**Returns:** `void`

___
<a id="getoption"></a>

###  getOption

▸ **getOption**(key: *"bellSound" \| "bellStyle" \| "cursorStyle" \| "fontFamily" \| "fontWeight" \| "fontWeightBold" \| "logLevel" \| "rendererType" \| "termName" \| "wordSeparator"*): `string`

▸ **getOption**(key: *"allowTransparency" \| "cancelEvents" \| "convertEol" \| "cursorBlink" \| "disableStdin" \| "macOptionIsMeta" \| "rightClickSelectsWord" \| "popOnBell" \| "screenKeys" \| "useFlowControl" \| "visualBell" \| "windowsMode"*): `boolean`

▸ **getOption**(key: *"colors"*): `string`[]

▸ **getOption**(key: *"cols" \| "fontSize" \| "letterSpacing" \| "lineHeight" \| "rows" \| "tabStopWidth" \| "scrollback"*): `number`

▸ **getOption**(key: *"handler"*): `function`

▸ **getOption**(key: *`string`*): `any`

*Defined in [xterm.d.ts:730](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L730)*

Retrieves an option's value from the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "bellSound" \| "bellStyle" \| "cursorStyle" \| "fontFamily" \| "fontWeight" \| "fontWeightBold" \| "logLevel" \| "rendererType" \| "termName" \| "wordSeparator" |  The option key. |

**Returns:** `string`

*Defined in [xterm.d.ts:735](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L735)*

Retrieves an option's value from the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "allowTransparency" \| "cancelEvents" \| "convertEol" \| "cursorBlink" \| "disableStdin" \| "macOptionIsMeta" \| "rightClickSelectsWord" \| "popOnBell" \| "screenKeys" \| "useFlowControl" \| "visualBell" \| "windowsMode" |  The option key. |

**Returns:** `boolean`

*Defined in [xterm.d.ts:740](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L740)*

Retrieves an option's value from the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "colors" |  The option key. |

**Returns:** `string`[]

*Defined in [xterm.d.ts:745](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L745)*

Retrieves an option's value from the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "cols" \| "fontSize" \| "letterSpacing" \| "lineHeight" \| "rows" \| "tabStopWidth" \| "scrollback" |  The option key. |

**Returns:** `number`

*Defined in [xterm.d.ts:750](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L750)*

Retrieves an option's value from the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "handler" |  The option key. |

**Returns:** `function`

*Defined in [xterm.d.ts:755](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L755)*

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

*Defined in [xterm.d.ts:621](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L621)*

Gets the terminal's current selection, this is useful for implementing copy behavior outside of xterm.js.

**Returns:** `string`

___
<a id="getselectionposition"></a>

###  getSelectionPosition

▸ **getSelectionPosition**(): [ISelectionPosition]({% link _docs/api/terminal/interfaces/iselectionposition.md %}) \| `undefined`

*Defined in [xterm.d.ts:626](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L626)*

Gets the selection position or undefined if there is no selection.

**Returns:** [ISelectionPosition]({% link _docs/api/terminal/interfaces/iselectionposition.md %}) \| `undefined`

___
<a id="hasselection"></a>

###  hasSelection

▸ **hasSelection**(): `boolean`

*Defined in [xterm.d.ts:615](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L615)*

Gets whether the terminal has an active selection.

**Returns:** `boolean`

___
<a id="loadaddon"></a>

###  loadAddon

▸ **loadAddon**(addon: *[ITerminalAddon]({% link _docs/api/terminal/interfaces/iterminaladdon.md %})*): `void`

*Defined in [xterm.d.ts:847](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L847)*

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

*Defined in [xterm.d.ts:536](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L536)*

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

*Defined in [xterm.d.ts:724](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L724)*

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

*Defined in [xterm.d.ts:836](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L836)*

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

*Defined in [xterm.d.ts:596](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L596)*

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

*Defined in [xterm.d.ts:559](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L559)*

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
<a id="reset"></a>

###  reset

▸ **reset**(): `void`

*Defined in [xterm.d.ts:841](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L841)*

Perform a full reset (RIS, aka '\\x1bc').

**Returns:** `void`

___
<a id="resize"></a>

###  resize

▸ **resize**(columns: *`number`*, rows: *`number`*): `void`

*Defined in [xterm.d.ts:528](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L528)*

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

*Defined in [xterm.d.ts:663](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L663)*

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

*Defined in [xterm.d.ts:669](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L669)*

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

*Defined in [xterm.d.ts:679](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L679)*

Scrolls the display of the terminal to the bottom.

**Returns:** `void`

___
<a id="scrolltoline"></a>

###  scrollToLine

▸ **scrollToLine**(line: *`number`*): `void`

*Defined in [xterm.d.ts:685](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L685)*

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

*Defined in [xterm.d.ts:674](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L674)*

Scrolls the display of the terminal to the top.

**Returns:** `void`

___
<a id="select"></a>

###  select

▸ **select**(column: *`number`*, row: *`number`*, length: *`number`*): `void`

*Defined in [xterm.d.ts:639](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L639)*

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

*Defined in [xterm.d.ts:644](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L644)*

Selects all text within the terminal.

**Returns:** `void`

___
<a id="selectlines"></a>

###  selectLines

▸ **selectLines**(start: *`number`*, end: *`number`*): `void`

*Defined in [xterm.d.ts:651](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L651)*

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

▸ **setOption**(key: *"allowTransparency" \| "cancelEvents" \| "convertEol" \| "cursorBlink" \| "disableStdin" \| "macOptionIsMeta" \| "popOnBell" \| "rightClickSelectsWord" \| "screenKeys" \| "useFlowControl" \| "visualBell" \| "windowsMode"*, value: *`boolean`*): `void`

▸ **setOption**(key: *"colors"*, value: *`string`[]*): `void`

▸ **setOption**(key: *"fontSize" \| "letterSpacing" \| "lineHeight" \| "tabStopWidth" \| "scrollback"*, value: *`number`*): `void`

▸ **setOption**(key: *"handler"*, value: *`function`*): `void`

▸ **setOption**(key: *"theme"*, value: *[ITheme]({% link _docs/api/terminal/interfaces/itheme.md %})*): `void`

▸ **setOption**(key: *"cols" \| "rows"*, value: *`number`*): `void`

▸ **setOption**(key: *`string`*, value: *`any`*): `void`

*Defined in [xterm.d.ts:762](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L762)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "fontFamily" \| "termName" \| "bellSound" \| "wordSeparator" |  The option key. |
| value | `string` |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:768](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L768)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "fontWeight" \| "fontWeightBold" |  The option key. |
| value | `null` \| "normal" \| "bold" \| "100" \| "200" \| "300" \| "400" \| "500" \| "600" \| "700" \| "800" \| "900" |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:774](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L774)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "logLevel" |  The option key. |
| value | [LogLevel]({% link _docs/api/terminal/modules/xterm.md %}#loglevel) |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:780](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L780)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "bellStyle" |  The option key. |
| value | `null` \| "none" \| "visual" \| "sound" \| "both" |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:786](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L786)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "cursorStyle" |  The option key. |
| value | `null` \| "block" \| "underline" \| "bar" |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:792](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L792)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "allowTransparency" \| "cancelEvents" \| "convertEol" \| "cursorBlink" \| "disableStdin" \| "macOptionIsMeta" \| "popOnBell" \| "rightClickSelectsWord" \| "screenKeys" \| "useFlowControl" \| "visualBell" \| "windowsMode" |  The option key. |
| value | `boolean` |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:798](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L798)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "colors" |  The option key. |
| value | `string`[] |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:804](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L804)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "fontSize" \| "letterSpacing" \| "lineHeight" \| "tabStopWidth" \| "scrollback" |  The option key. |
| value | `number` |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:810](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L810)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "handler" |  The option key. |
| value | `function` |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:816](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L816)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "theme" |  The option key. |
| value | [ITheme]({% link _docs/api/terminal/interfaces/itheme.md %}) |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:822](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L822)*

Sets an option on the terminal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | "cols" \| "rows" |  The option key. |
| value | `number` |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:828](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L828)*

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

*Defined in [xterm.d.ts:700](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L700)*

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

*Defined in [xterm.d.ts:718](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L718)*

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

*Defined in [xterm.d.ts:710](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L710)*

Writes data to the terminal, followed by a break line character (\\n).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | `string` \| `Uint8Array` |  The data to write to the terminal. This can either be raw bytes given as Uint8Array from the pty or a string. Raw bytes will always be treated as UTF-8 encoded, string data as UTF-16. |
| `Optional` callback | `function` |  Optional callback that fires when the data was processed by the parser. |

**Returns:** `void`

___

