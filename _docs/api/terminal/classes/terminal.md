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

* [IEventEmitter](../../interfaces/ieventemitter)
* [IDisposable](../../interfaces/idisposable)

## Index

### Constructors

* [constructor](#constructor)

### Properties

* [cols](#cols)
* [element](#element)
* [markers](#markers)
* [rows](#rows)
* [textarea](#textarea)
* [strings](#strings)

### Methods

* [addDisposableListener](#adddisposablelistener)
* [addMarker](#addmarker)
* [attachCustomKeyEventHandler](#attachcustomkeyeventhandler)
* [blur](#blur)
* [clear](#clear)
* [clearSelection](#clearselection)
* [deregisterLinkMatcher](#deregisterlinkmatcher)
* [destroy](#destroy)
* [dispose](#dispose)
* [emit](#emit)
* [focus](#focus)
* [getOption](#getoption)
* [getSelection](#getselection)
* [hasSelection](#hasselection)
* [off](#off)
* [on](#on)
* [open](#open)
* [refresh](#refresh)
* [registerLinkMatcher](#registerlinkmatcher)
* [reset](#reset)
* [resize](#resize)
* [scrollLines](#scrolllines)
* [scrollPages](#scrollpages)
* [scrollToBottom](#scrolltobottom)
* [scrollToLine](#scrolltoline)
* [scrollToTop](#scrolltotop)
* [selectAll](#selectall)
* [selectLines](#selectlines)
* [setOption](#setoption)
* [write](#write)
* [writeln](#writeln)
* [applyAddon](#applyaddon)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Terminal**(options?: *[ITerminalOptions](../../interfaces/iterminaloptions)*): [Terminal](#)

*Defined in [xterm.d.ts:307](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L307)*

Creates a new `Terminal` object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | [ITerminalOptions](../../interfaces/iterminaloptions) |  An object containing a set of options. |

**Returns:** [Terminal](#)

___

## Properties

<a id="cols"></a>

###  cols

**● cols**: *`number`*

*Defined in [xterm.d.ts:296](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L296)*

The number of columns in the terminal's viewport.

___
<a id="element"></a>

###  element

**● element**: *`HTMLElement`*

*Defined in [xterm.d.ts:281](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L281)*

The element containing the terminal.

___
<a id="markers"></a>

###  markers

**● markers**: *[IMarker](../../interfaces/imarker)[]*

*Defined in [xterm.d.ts:302](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L302)*

(EXPERIMENTAL) Get all markers registered against the buffer. If the alt buffer is active this will always return \[\].

___
<a id="rows"></a>

###  rows

**● rows**: *`number`*

*Defined in [xterm.d.ts:291](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L291)*

The number of rows in the terminal's viewport.

___
<a id="textarea"></a>

###  textarea

**● textarea**: *`HTMLTextAreaElement`*

*Defined in [xterm.d.ts:286](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L286)*

The textarea that accepts input for the terminal.

___
<a id="strings"></a>

### `<Static>` strings

**● strings**: *[ILocalizableStrings](../../interfaces/ilocalizablestrings)*

*Defined in [xterm.d.ts:307](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L307)*

Natural language strings that can be localized.

___

## Methods

<a id="adddisposablelistener"></a>

###  addDisposableListener

▸ **addDisposableListener**(type: *`string`*, handler: *`function`*): [IDisposable](../../interfaces/idisposable)

*Defined in [xterm.d.ts:390](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L390)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| handler | `function` |

**Returns:** [IDisposable](../../interfaces/idisposable)

___
<a id="addmarker"></a>

###  addMarker

▸ **addMarker**(cursorYOffset: *`number`*): [IMarker](../../interfaces/imarker)

*Defined in [xterm.d.ts:447](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L447)*

(EXPERIMENTAL) Adds a marker to the normal buffer and returns it. If the alt buffer is active, undefined is returned.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| cursorYOffset | `number` |  The y position offset of the marker from the cursor. |

**Returns:** [IMarker](../../interfaces/imarker)

___
<a id="attachcustomkeyeventhandler"></a>

###  attachCustomKeyEventHandler

▸ **attachCustomKeyEventHandler**(customKeyEventHandler: *`function`*): `void`

*Defined in [xterm.d.ts:422](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L422)*

Attaches a custom key event handler which is run before keys are processed, giving consumers of xterm.js ultimate control as to what keys should be processed by the terminal and what keys should not.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| customKeyEventHandler | `function` |  The custom KeyboardEvent handler to attach. This is a function that takes a KeyboardEvent, allowing consumers to stop propogation and/or prevent the default action. The function returns whether the event should be processed by xterm.js. |

**Returns:** `void`

___
<a id="blur"></a>

###  blur

▸ **blur**(): `void`

*Defined in [xterm.d.ts:319](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L319)*

Unfocus the terminal.

**Returns:** `void`

___
<a id="clear"></a>

###  clear

▸ **clear**(): `void`

*Defined in [xterm.d.ts:521](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L521)*

Clear the entire buffer, making the prompt line the new first line.

**Returns:** `void`

___
<a id="clearselection"></a>

###  clearSelection

▸ **clearSelection**(): `void`

*Defined in [xterm.d.ts:463](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L463)*

Clears the current terminal selection.

**Returns:** `void`

___
<a id="deregisterlinkmatcher"></a>

###  deregisterLinkMatcher

▸ **deregisterLinkMatcher**(matcherId: *`number`*): `void`

*Defined in [xterm.d.ts:440](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L440)*

(EXPERIMENTAL) Deregisters a link matcher if it has been registered.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| matcherId | `number` |  The link matcher's ID (returned after register) |

**Returns:** `void`

___
<a id="destroy"></a>

###  destroy

▸ **destroy**(): `void`

*Defined in [xterm.d.ts:488](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L488)*

Destroys the terminal and detaches it from the DOM.
*__deprecated__*: Use dispose() instead.

**Returns:** `void`

___
<a id="dispose"></a>

###  dispose

▸ **dispose**(): `void`

*Implementation of [IDisposable](../../interfaces/idisposable).[dispose](../../interfaces/idisposable#dispose)*

*Defined in [xterm.d.ts:481](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L481)*

**Returns:** `void`

___
<a id="emit"></a>

###  emit

▸ **emit**(type: *`string`*, data?: *`any`*): `void`

*Implementation of [IEventEmitter](../../interfaces/ieventemitter).[emit](../../interfaces/ieventemitter#emit)*

*Defined in [xterm.d.ts:388](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L388)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| type | `string` |
| `Optional` data | `any` |

**Returns:** `void`

___
<a id="focus"></a>

###  focus

▸ **focus**(): `void`

*Defined in [xterm.d.ts:324](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L324)*

Focus the terminal.

**Returns:** `void`

___
<a id="getoption"></a>

###  getOption

▸ **getOption**(key: * "bellSound" &#124; "bellStyle" &#124; "cursorStyle" &#124; "fontFamily" &#124; "fontWeight" &#124; "fontWeightBold" &#124; "termName"*): `string`

▸ **getOption**(key: * "allowTransparency" &#124; "cancelEvents" &#124; "convertEol" &#124; "cursorBlink" &#124; "debug" &#124; "disableStdin" &#124; "enableBold" &#124; "macOptionIsMeta" &#124; "rightClickSelectsWord" &#124; "popOnBell" &#124; "screenKeys" &#124; "useFlowControl" &#124; "visualBell"*): `boolean`

▸ **getOption**(key: *"colors"*): `string`[]

▸ **getOption**(key: * "cols" &#124; "fontSize" &#124; "letterSpacing" &#124; "lineHeight" &#124; "rows" &#124; "tabStopWidth" &#124; "scrollback"*): `number`

▸ **getOption**(key: *"handler"*): `function`

▸ **getOption**(key: *`string`*): `any`

*Defined in [xterm.d.ts:533](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L533)*

Retrieves an option's value from the terminal.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key |  "bellSound" &#124; "bellStyle" &#124; "cursorStyle" &#124; "fontFamily" &#124; "fontWeight" &#124; "fontWeightBold" &#124; "termName"|  The option key. |

**Returns:** `string`

*Defined in [xterm.d.ts:538](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L538)*

Retrieves an option's value from the terminal.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key |  "allowTransparency" &#124; "cancelEvents" &#124; "convertEol" &#124; "cursorBlink" &#124; "debug" &#124; "disableStdin" &#124; "enableBold" &#124; "macOptionIsMeta" &#124; "rightClickSelectsWord" &#124; "popOnBell" &#124; "screenKeys" &#124; "useFlowControl" &#124; "visualBell"|  The option key. |

**Returns:** `boolean`

*Defined in [xterm.d.ts:543](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L543)*

Retrieves an option's value from the terminal.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | "colors" |  The option key. |

**Returns:** `string`[]

*Defined in [xterm.d.ts:548](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L548)*

Retrieves an option's value from the terminal.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key |  "cols" &#124; "fontSize" &#124; "letterSpacing" &#124; "lineHeight" &#124; "rows" &#124; "tabStopWidth" &#124; "scrollback"|  The option key. |

**Returns:** `number`

*Defined in [xterm.d.ts:553](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L553)*

Retrieves an option's value from the terminal.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | "handler" |  The option key. |

**Returns:** `function`

*Defined in [xterm.d.ts:558](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L558)*

Retrieves an option's value from the terminal.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | `string` |  The option key. |

**Returns:** `any`

___
<a id="getselection"></a>

###  getSelection

▸ **getSelection**(): `string`

*Defined in [xterm.d.ts:458](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L458)*

Gets the terminal's current selection, this is useful for implementing copy behavior outside of xterm.js.

**Returns:** `string`

___
<a id="hasselection"></a>

###  hasSelection

▸ **hasSelection**(): `boolean`

*Defined in [xterm.d.ts:452](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L452)*

Gets whether the terminal has an active selection.

**Returns:** `boolean`

___
<a id="off"></a>

###  off

▸ **off**(type: * "blur" &#124; "focus" &#124; "linefeed" &#124; "selection" &#124; "data" &#124; "key" &#124; "keypress" &#124; "keydown" &#124; "refresh" &#124; "resize" &#124; "scroll" &#124; "title" &#124; `string`*, listener: *`function`*): `void`

*Defined in [xterm.d.ts:386](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L386)*

Deregisters an event listener.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type |  "blur" &#124; "focus" &#124; "linefeed" &#124; "selection" &#124; "data" &#124; "key" &#124; "keypress" &#124; "keydown" &#124; "refresh" &#124; "resize" &#124; "scroll" &#124; "title" &#124; `string`|  The type of the event. |
| listener | `function` |  The listener. |

**Returns:** `void`

___
<a id="on"></a>

###  on

▸ **on**(type: * "blur" &#124; "focus" &#124; "linefeed" &#124; "selection"*, listener: *`function`*): `void`

▸ **on**(type: *"data"*, listener: *`function`*): `void`

▸ **on**(type: *"key"*, listener: *`function`*): `void`

▸ **on**(type: * "keypress" &#124; "keydown"*, listener: *`function`*): `void`

▸ **on**(type: *"refresh"*, listener: *`function`*): `void`

▸ **on**(type: *"resize"*, listener: *`function`*): `void`

▸ **on**(type: *"scroll"*, listener: *`function`*): `void`

▸ **on**(type: *"title"*, listener: *`function`*): `void`

▸ **on**(type: *`string`*, listener: *`function`*): `void`

*Defined in [xterm.d.ts:331](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L331)*

Registers an event listener.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type |  "blur" &#124; "focus" &#124; "linefeed" &#124; "selection"|  The type of the event. |
| listener | `function` |  The listener. |

**Returns:** `void`

*Defined in [xterm.d.ts:337](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L337)*

Registers an event listener.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | "data" |  The type of the event. |
| listener | `function` |  The listener. |

**Returns:** `void`

*Defined in [xterm.d.ts:343](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L343)*

Registers an event listener.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | "key" |  The type of the event. |
| listener | `function` |  The listener. |

**Returns:** `void`

*Defined in [xterm.d.ts:349](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L349)*

Registers an event listener.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type |  "keypress" &#124; "keydown"|  The type of the event. |
| listener | `function` |  The listener. |

**Returns:** `void`

*Defined in [xterm.d.ts:355](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L355)*

Registers an event listener.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | "refresh" |  The type of the event. |
| listener | `function` |  The listener. |

**Returns:** `void`

*Defined in [xterm.d.ts:361](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L361)*

Registers an event listener.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | "resize" |  The type of the event. |
| listener | `function` |  The listener. |

**Returns:** `void`

*Defined in [xterm.d.ts:367](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L367)*

Registers an event listener.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | "scroll" |  The type of the event. |
| listener | `function` |  The listener. |

**Returns:** `void`

*Defined in [xterm.d.ts:373](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L373)*

Registers an event listener.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | "title" |  The type of the event. |
| listener | `function` |  The listener. |

**Returns:** `void`

*Defined in [xterm.d.ts:379](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L379)*

Registers an event listener.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | `string` |  The type of the event. |
| listener | `function` |  The listener. |

**Returns:** `void`

___
<a id="open"></a>

###  open

▸ **open**(parent: *`HTMLElement`*): `void`

*Defined in [xterm.d.ts:411](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L411)*

Opens the terminal within an element.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| parent | `HTMLElement` |  The element to create the terminal within. This element must be visible (have dimensions) when \`open\` is called as several DOM- based measurements need to be performed when this function is called. |

**Returns:** `void`

___
<a id="refresh"></a>

###  refresh

▸ **refresh**(start: *`number`*, end: *`number`*): `void`

*Defined in [xterm.d.ts:633](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L633)*

Tells the renderer to refresh terminal content between two rows (inclusive) at the next opportunity.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  The row to start from (between 0 and this.rows - 1). |
| end | `number` |  The row to end at (between start and this.rows - 1). |

**Returns:** `void`

___
<a id="registerlinkmatcher"></a>

###  registerLinkMatcher

▸ **registerLinkMatcher**(regex: *`RegExp`*, handler: *`function`*, options?: *[ILinkMatcherOptions](../../interfaces/ilinkmatcheroptions)*): `number`

*Defined in [xterm.d.ts:434](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L434)*

(EXPERIMENTAL) Registers a link matcher, allowing custom link patterns to be matched and handled.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| regex | `RegExp` |  The regular expression to search for, specifically this searches the textContent of the rows. You will want to use \\s to match a space ' ' character for example. |
| handler | `function` |  The callback when the link is called. |
| `Optional` options | [ILinkMatcherOptions](../../interfaces/ilinkmatcheroptions) |  Options for the link matcher. |

**Returns:** `number`
The ID of the new matcher, this can be used to deregister.

___
<a id="reset"></a>

###  reset

▸ **reset**(): `void`

*Defined in [xterm.d.ts:638](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L638)*

Perform a full reset (RIS, aka '\\x1bc').

**Returns:** `void`

___
<a id="resize"></a>

###  resize

▸ **resize**(columns: *`number`*, rows: *`number`*): `void`

*Defined in [xterm.d.ts:397](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L397)*

Resizes the terminal.

**Parameters:**

| Param | Type |
| ------ | ------ |
| columns | `number` |
| rows | `number` |

**Returns:** `void`

___
<a id="scrolllines"></a>

###  scrollLines

▸ **scrollLines**(amount: *`number`*): `void`

*Defined in [xterm.d.ts:494](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L494)*

Scroll the display of the terminal

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| amount | `number` |  The number of lines to scroll down (negative scroll up). |

**Returns:** `void`

___
<a id="scrollpages"></a>

###  scrollPages

▸ **scrollPages**(pageCount: *`number`*): `void`

*Defined in [xterm.d.ts:500](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L500)*

Scroll the display of the terminal by a number of pages.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pageCount | `number` |  The number of pages to scroll (negative scrolls up). |

**Returns:** `void`

___
<a id="scrolltobottom"></a>

###  scrollToBottom

▸ **scrollToBottom**(): `void`

*Defined in [xterm.d.ts:510](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L510)*

Scrolls the display of the terminal to the bottom.

**Returns:** `void`

___
<a id="scrolltoline"></a>

###  scrollToLine

▸ **scrollToLine**(line: *`number`*): `void`

*Defined in [xterm.d.ts:516](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L516)*

Scrolls to a line within the buffer.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| line | `number` |  The 0-based line index to scroll to. |

**Returns:** `void`

___
<a id="scrolltotop"></a>

###  scrollToTop

▸ **scrollToTop**(): `void`

*Defined in [xterm.d.ts:505](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L505)*

Scrolls the display of the terminal to the top.

**Returns:** `void`

___
<a id="selectall"></a>

###  selectAll

▸ **selectAll**(): `void`

*Defined in [xterm.d.ts:468](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L468)*

Selects all text within the terminal.

**Returns:** `void`

___
<a id="selectlines"></a>

###  selectLines

▸ **selectLines**(start: *`number`*, end: *`number`*): `void`

*Defined in [xterm.d.ts:475](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L475)*

Selects text in the buffer between 2 lines.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  The 0-based line index to select from (inclusive). |
| end | `number` |  The 0-based line index to select to (inclusive). |

**Returns:** `void`

___
<a id="setoption"></a>

###  setOption

▸ **setOption**(key: * "fontFamily" &#124; "termName" &#124; "bellSound"*, value: *`string`*): `void`

▸ **setOption**(key: * "fontWeight" &#124; "fontWeightBold"*, value: * `null` &#124; "normal" &#124; "bold" &#124; "100" &#124; "200" &#124; "300" &#124; "400" &#124; "500" &#124; "600" &#124; "700" &#124; "800" &#124; "900"*): `void`

▸ **setOption**(key: *"bellStyle"*, value: * `null` &#124; "none" &#124; "visual" &#124; "sound" &#124; "both"*): `void`

▸ **setOption**(key: *"cursorStyle"*, value: * `null` &#124; "block" &#124; "underline" &#124; "bar"*): `void`

▸ **setOption**(key: * "allowTransparency" &#124; "cancelEvents" &#124; "convertEol" &#124; "cursorBlink" &#124; "debug" &#124; "disableStdin" &#124; "enableBold" &#124; "macOptionIsMeta" &#124; "popOnBell" &#124; "rightClickSelectsWord" &#124; "screenKeys" &#124; "useFlowControl" &#124; "visualBell"*, value: *`boolean`*): `void`

▸ **setOption**(key: *"colors"*, value: *`string`[]*): `void`

▸ **setOption**(key: * "fontSize" &#124; "letterSpacing" &#124; "lineHeight" &#124; "tabStopWidth" &#124; "scrollback"*, value: *`number`*): `void`

▸ **setOption**(key: *"handler"*, value: *`function`*): `void`

▸ **setOption**(key: *"theme"*, value: *[ITheme](../../interfaces/itheme)*): `void`

▸ **setOption**(key: * "cols" &#124; "rows"*, value: *`number`*): `void`

▸ **setOption**(key: *`string`*, value: *`any`*): `void`

*Defined in [xterm.d.ts:565](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L565)*

Sets an option on the terminal.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key |  "fontFamily" &#124; "termName" &#124; "bellSound"|  The option key. |
| value | `string` |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:571](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L571)*

Sets an option on the terminal.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key |  "fontWeight" &#124; "fontWeightBold"|  The option key. |
| value |  `null` &#124; "normal" &#124; "bold" &#124; "100" &#124; "200" &#124; "300" &#124; "400" &#124; "500" &#124; "600" &#124; "700" &#124; "800" &#124; "900"|  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:577](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L577)*

Sets an option on the terminal.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | "bellStyle" |  The option key. |
| value |  `null` &#124; "none" &#124; "visual" &#124; "sound" &#124; "both"|  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:583](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L583)*

Sets an option on the terminal.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | "cursorStyle" |  The option key. |
| value |  `null` &#124; "block" &#124; "underline" &#124; "bar"|  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:589](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L589)*

Sets an option on the terminal.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key |  "allowTransparency" &#124; "cancelEvents" &#124; "convertEol" &#124; "cursorBlink" &#124; "debug" &#124; "disableStdin" &#124; "enableBold" &#124; "macOptionIsMeta" &#124; "popOnBell" &#124; "rightClickSelectsWord" &#124; "screenKeys" &#124; "useFlowControl" &#124; "visualBell"|  The option key. |
| value | `boolean` |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:595](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L595)*

Sets an option on the terminal.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | "colors" |  The option key. |
| value | `string`[] |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:601](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L601)*

Sets an option on the terminal.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key |  "fontSize" &#124; "letterSpacing" &#124; "lineHeight" &#124; "tabStopWidth" &#124; "scrollback"|  The option key. |
| value | `number` |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:607](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L607)*

Sets an option on the terminal.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | "handler" |  The option key. |
| value | `function` |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:613](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L613)*

Sets an option on the terminal.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | "theme" |  The option key. |
| value | [ITheme](../../interfaces/itheme) |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:619](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L619)*

Sets an option on the terminal.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key |  "cols" &#124; "rows"|  The option key. |
| value | `number` |  The option value. |

**Returns:** `void`

*Defined in [xterm.d.ts:625](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L625)*

Sets an option on the terminal.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | `string` |  The option key. |
| value | `any` |  The option value. |

**Returns:** `void`

___
<a id="write"></a>

###  write

▸ **write**(data: *`string`*): `void`

*Defined in [xterm.d.ts:527](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L527)*

Writes text to the terminal.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `string` |  The text to write to the terminal. |

**Returns:** `void`

___
<a id="writeln"></a>

###  writeln

▸ **writeln**(data: *`string`*): `void`

*Defined in [xterm.d.ts:403](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L403)*

Writes text to the terminal, followed by a break line character (\\n).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `string` |  The text to write to the terminal. |

**Returns:** `void`

___
<a id="applyaddon"></a>

### `<Static>` applyAddon

▸ **applyAddon**(addon: *`any`*): `void`

*Defined in [xterm.d.ts:645](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L645)*

Applies an addon to the Terminal prototype, making it available to all newly created Terminals.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| addon | `any` |  The addon to apply. |

**Returns:** `void`

___

