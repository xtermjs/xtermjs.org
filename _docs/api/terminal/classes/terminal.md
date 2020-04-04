---
title: Terminal
category: API-classes
layout: docs
---


# Class: Terminal

The class that represents an xterm.js terminal.

## Hierarchy

* **Terminal**

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
* [strings]({% link _docs/api/terminal/classes/terminal.md %}#static-strings)

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

## Constructors

###  constructor

\+ **new Terminal**(`options?`: [ITerminalOptions]({% link _docs/api/terminal/interfaces/iterminaloptions.md %})): *[Terminal]({% link _docs/api/terminal/classes/terminal.md %})*

*Defined in [xterm.d.ts:600](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L600)*

Creates a new `Terminal` object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [ITerminalOptions]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}) | An object containing a set of options.  |

**Returns:** *[Terminal]({% link _docs/api/terminal/classes/terminal.md %})*

## Properties

###  buffer

• **buffer**: *[IBuffer]({% link _docs/api/terminal/interfaces/ibuffer.md %})*

*Defined in [xterm.d.ts:577](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L577)*

(EXPERIMENTAL) The terminal's current buffer, this might be either the
normal buffer or the alt buffer depending on what's running in the
terminal.

___

###  cols

• **cols**: *number*

*Defined in [xterm.d.ts:570](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L570)*

The number of columns in the terminal's viewport. Use
`ITerminalOptions.cols` to set this in the constructor and
`Terminal.resize` for when the terminal exists.

___

###  element

• **element**: *HTMLElement | undefined*

*Defined in [xterm.d.ts:551](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L551)*

The element containing the terminal.

___

###  markers

• **markers**: *ReadonlyArray‹[IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})›*

*Defined in [xterm.d.ts:583](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L583)*

(EXPERIMENTAL) Get all markers registered against the buffer. If the alt
buffer is active this will always return [].

___

###  onBinary

• **onBinary**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹string›*

*Defined in [xterm.d.ts:618](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L618)*

Adds an event listener for when a binary event fires. This is used to
enable non UTF-8 conformant binary messages to be sent to the backend.
Currently this is only used for a certain type of mouse reports that
happen to be not UTF-8 compatible.
The event value is a JS string, pass it to the underlying pty as
binary data, e.g. `pty.write(Buffer.from(data, 'binary'))`.

**`returns`** an `IDisposable` to stop listening.

___

###  onCursorMove

• **onCursorMove**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹void›*

*Defined in [xterm.d.ts:624](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L624)*

Adds an event listener for the cursor moves.

**`returns`** an `IDisposable` to stop listening.

___

###  onData

• **onData**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹string›*

*Defined in [xterm.d.ts:633](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L633)*

Adds an event listener for when a data event fires. This happens for
example when the user types or pastes into the terminal. The event value
is whatever `string` results, in a typical setup, this should be passed
on to the backing pty.

**`returns`** an `IDisposable` to stop listening.

___

###  onKey

• **onKey**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹object›*

*Defined in [xterm.d.ts:641](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L641)*

Adds an event listener for when a key is pressed. The event value contains the
string that will be sent in the data event as well as the DOM event that
triggered it.

**`returns`** an `IDisposable` to stop listening.

___

###  onLineFeed

• **onLineFeed**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹void›*

*Defined in [xterm.d.ts:647](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L647)*

Adds an event listener for when a line feed is added.

**`returns`** an `IDisposable` to stop listening.

___

###  onRender

• **onRender**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹object›*

*Defined in [xterm.d.ts:668](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L668)*

Adds an event listener for when rows are rendered. The event value
contains the start row and end rows of the rendered area (ranges from `0`
to `Terminal.rows - 1`).

**`returns`** an `IDisposable` to stop listening.

___

###  onResize

• **onResize**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹object›*

*Defined in [xterm.d.ts:675](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L675)*

Adds an event listener for when the terminal is resized. The event value
contains the new size.

**`returns`** an `IDisposable` to stop listening.

___

###  onScroll

• **onScroll**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹number›*

*Defined in [xterm.d.ts:654](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L654)*

Adds an event listener for when a scroll occurs. The event value is the
new position of the viewport.

**`returns`** an `IDisposable` to stop listening.

___

###  onSelectionChange

• **onSelectionChange**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹void›*

*Defined in [xterm.d.ts:660](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L660)*

Adds an event listener for when a selection change occurs.

**`returns`** an `IDisposable` to stop listening.

___

###  onTitleChange

• **onTitleChange**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹string›*

*Defined in [xterm.d.ts:682](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L682)*

Adds an event listener for when an OSC 0 or OSC 2 title change occurs.
The event value is the new title.

**`returns`** an `IDisposable` to stop listening.

___

###  parser

• **parser**: *[IParser]({% link _docs/api/terminal/interfaces/iparser.md %})*

*Defined in [xterm.d.ts:589](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L589)*

(EXPERIMENTAL) Get the parser interface to register
custom escape sequence handlers.

___

###  rows

• **rows**: *number*

*Defined in [xterm.d.ts:563](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L563)*

The number of rows in the terminal's viewport. Use
`ITerminalOptions.rows` to set this in the constructor and
`Terminal.resize` for when the terminal exists.

___

###  textarea

• **textarea**: *HTMLTextAreaElement | undefined*

*Defined in [xterm.d.ts:556](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L556)*

The textarea that accepts input for the terminal.

___

###  unicode

• **unicode**: *[IUnicodeHandling]({% link _docs/api/terminal/interfaces/iunicodehandling.md %})*

*Defined in [xterm.d.ts:595](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L595)*

(EXPERIMENTAL) Get the Unicode handling interface
to register and switch Unicode version.

___

### `Static` strings

▪ **strings**: *[ILocalizableStrings]({% link _docs/api/terminal/interfaces/ilocalizablestrings.md %})*

*Defined in [xterm.d.ts:600](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L600)*

Natural language strings that can be localized.

## Methods

###  addMarker

▸ **addMarker**(`cursorYOffset`: number): *[IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})*

*Defined in [xterm.d.ts:788](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L788)*

**`deprecated`** use `registerMarker` instead.

**Parameters:**

Name | Type |
------ | ------ |
`cursorYOffset` | number |

**Returns:** *[IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})*

___

###  attachCustomKeyEventHandler

▸ **attachCustomKeyEventHandler**(`customKeyEventHandler`: function): *void*

*Defined in [xterm.d.ts:720](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L720)*

Attaches a custom key event handler which is run before keys are
processed, giving consumers of xterm.js ultimate control as to what keys
should be processed by the terminal and what keys should not.

**Parameters:**

▪ **customKeyEventHandler**: *function*

The custom KeyboardEvent handler to attach.
This is a function that takes a KeyboardEvent, allowing consumers to stop
propagation and/or prevent the default action. The function returns
whether the event should be processed by xterm.js.

▸ (`event`: KeyboardEvent): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`event` | KeyboardEvent |

**Returns:** *void*

___

###  blur

▸ **blur**(): *void*

*Defined in [xterm.d.ts:687](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L687)*

Unfocus the terminal.

**Returns:** *void*

___

###  clear

▸ **clear**(): *void*

*Defined in [xterm.d.ts:868](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L868)*

Clear the entire buffer, making the prompt line the new first line.

**Returns:** *void*

___

###  clearSelection

▸ **clearSelection**(): *void*

*Defined in [xterm.d.ts:809](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L809)*

Clears the current terminal selection.

**Returns:** *void*

___

###  deregisterCharacterJoiner

▸ **deregisterCharacterJoiner**(`joinerId`: number): *void*

*Defined in [xterm.d.ts:776](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L776)*

(EXPERIMENTAL) Deregisters the character joiner if one was registered.
NOTE: character joiners are only used by the canvas renderer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`joinerId` | number | The character joiner's ID (returned after register)  |

**Returns:** *void*

___

###  deregisterLinkMatcher

▸ **deregisterLinkMatcher**(`matcherId`: number): *void*

*Defined in [xterm.d.ts:738](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L738)*

(EXPERIMENTAL) Deregisters a link matcher if it has been registered.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`matcherId` | number | The link matcher's ID (returned after register)  |

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

*Implementation of [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})*

*Defined in [xterm.d.ts:835](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L835)*

**Returns:** *void*

___

###  focus

▸ **focus**(): *void*

*Defined in [xterm.d.ts:692](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L692)*

Focus the terminal.

**Returns:** *void*

___

###  getOption

▸ **getOption**(`key`: "bellSound" | "bellStyle" | "cursorStyle" | "fontFamily" | "fontWeight" | "fontWeightBold" | "logLevel" | "rendererType" | "termName" | "wordSeparator"): *string*

*Defined in [xterm.d.ts:908](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L908)*

Retrieves an option's value from the terminal.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "bellSound" &#124; "bellStyle" &#124; "cursorStyle" &#124; "fontFamily" &#124; "fontWeight" &#124; "fontWeightBold" &#124; "logLevel" &#124; "rendererType" &#124; "termName" &#124; "wordSeparator" | The option key.  |

**Returns:** *string*

▸ **getOption**(`key`: "allowTransparency" | "cancelEvents" | "convertEol" | "cursorBlink" | "disableStdin" | "macOptionIsMeta" | "rightClickSelectsWord" | "popOnBell" | "visualBell" | "windowsMode"): *boolean*

*Defined in [xterm.d.ts:913](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L913)*

Retrieves an option's value from the terminal.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "allowTransparency" &#124; "cancelEvents" &#124; "convertEol" &#124; "cursorBlink" &#124; "disableStdin" &#124; "macOptionIsMeta" &#124; "rightClickSelectsWord" &#124; "popOnBell" &#124; "visualBell" &#124; "windowsMode" | The option key.  |

**Returns:** *boolean*

▸ **getOption**(`key`: "cols" | "fontSize" | "letterSpacing" | "lineHeight" | "rows" | "tabStopWidth" | "scrollback"): *number*

*Defined in [xterm.d.ts:918](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L918)*

Retrieves an option's value from the terminal.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "cols" &#124; "fontSize" &#124; "letterSpacing" &#124; "lineHeight" &#124; "rows" &#124; "tabStopWidth" &#124; "scrollback" | The option key.  |

**Returns:** *number*

▸ **getOption**(`key`: string): *any*

*Defined in [xterm.d.ts:923](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L923)*

Retrieves an option's value from the terminal.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | The option key.  |

**Returns:** *any*

___

###  getSelection

▸ **getSelection**(): *string*

*Defined in [xterm.d.ts:799](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L799)*

Gets the terminal's current selection, this is useful for implementing
copy behavior outside of xterm.js.

**Returns:** *string*

___

###  getSelectionPosition

▸ **getSelectionPosition**(): *[ISelectionPosition]({% link _docs/api/terminal/interfaces/iselectionposition.md %}) | undefined*

*Defined in [xterm.d.ts:804](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L804)*

Gets the selection position or undefined if there is no selection.

**Returns:** *[ISelectionPosition]({% link _docs/api/terminal/interfaces/iselectionposition.md %}) | undefined*

___

###  hasSelection

▸ **hasSelection**(): *boolean*

*Defined in [xterm.d.ts:793](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L793)*

Gets whether the terminal has an active selection.

**Returns:** *boolean*

___

###  loadAddon

▸ **loadAddon**(`addon`: [ITerminalAddon]({% link _docs/api/terminal/interfaces/iterminaladdon.md %})): *void*

*Defined in [xterm.d.ts:1003](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L1003)*

Loads an addon into this instance of xterm.js.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`addon` | [ITerminalAddon]({% link _docs/api/terminal/interfaces/iterminaladdon.md %}) | The addon to load.  |

**Returns:** *void*

___

###  open

▸ **open**(`parent`: HTMLElement): *void*

*Defined in [xterm.d.ts:709](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L709)*

Opens the terminal within an element.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`parent` | HTMLElement | The element to create the terminal within. This element must be visible (have dimensions) when `open` is called as several DOM- based measurements need to be performed when this function is called.  |

**Returns:** *void*

___

###  paste

▸ **paste**(`data`: string): *void*

*Defined in [xterm.d.ts:902](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L902)*

Writes text to the terminal, performing the necessary transformations for pasted text.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | string | The text to write to the terminal.  |

**Returns:** *void*

___

###  refresh

▸ **refresh**(`start`: number, `end`: number): *void*

*Defined in [xterm.d.ts:992](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L992)*

Tells the renderer to refresh terminal content between two rows
(inclusive) at the next opportunity.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The row to start from (between 0 and this.rows - 1). |
`end` | number | The row to end at (between start and this.rows - 1).  |

**Returns:** *void*

___

###  registerCharacterJoiner

▸ **registerCharacterJoiner**(`handler`: function): *number*

*Defined in [xterm.d.ts:769](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L769)*

(EXPERIMENTAL) Registers a character joiner, allowing custom sequences of
characters to be rendered as a single unit. This is useful in particular
for rendering ligatures and graphemes, among other things.

Each registered character joiner is called with a string of text
representing a portion of a line in the terminal that can be rendered as
a single unit. The joiner must return a sorted array, where each entry is
itself an array of length two, containing the start (inclusive) and end
(exclusive) index of a substring of the input that should be rendered as
a single unit. When multiple joiners are provided, the results of each
are collected. If there are any overlapping substrings between them, they
are combined into one larger unit that is drawn together.

All character joiners that are registered get called every time a line is
rendered in the terminal, so it is essential for the handler function to
run as quickly as possible to avoid slowdowns when rendering. Similarly,
joiners should strive to return the smallest possible substrings to
render together, since they aren't drawn as optimally as individual
characters.

NOTE: character joiners are only used by the canvas renderer.

**Parameters:**

▪ **handler**: *function*

The function that determines character joins. It is called
with a string of text that is eligible for joining and returns an array
where each entry is an array containing the start (inclusive) and end
(exclusive) indexes of ranges that should be rendered as a single unit.

▸ (`text`: string): *[number, number][]*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *number*

The ID of the new joiner, this can be used to deregister

___

###  registerLinkMatcher

▸ **registerLinkMatcher**(`regex`: RegExp, `handler`: function, `options?`: [ILinkMatcherOptions]({% link _docs/api/terminal/interfaces/ilinkmatcheroptions.md %})): *number*

*Defined in [xterm.d.ts:732](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L732)*

(EXPERIMENTAL) Registers a link matcher, allowing custom link patterns to
be matched and handled.

**Parameters:**

▪ **regex**: *RegExp*

The regular expression to search for, specifically this
searches the textContent of the rows. You will want to use \s to match a
space ' ' character for example.

▪ **handler**: *function*

The callback when the link is called.

▸ (`event`: MouseEvent, `uri`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | MouseEvent |
`uri` | string |

▪`Optional`  **options**: *[ILinkMatcherOptions]({% link _docs/api/terminal/interfaces/ilinkmatcheroptions.md %})*

Options for the link matcher.

**Returns:** *number*

The ID of the new matcher, this can be used to deregister.

___

###  registerMarker

▸ **registerMarker**(`cursorYOffset`: number): *[IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})*

*Defined in [xterm.d.ts:783](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L783)*

(EXPERIMENTAL) Adds a marker to the normal buffer and returns it. If the
alt buffer is active, undefined is returned.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cursorYOffset` | number | The y position offset of the marker from the cursor.  |

**Returns:** *[IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})*

___

###  reset

▸ **reset**(): *void*

*Defined in [xterm.d.ts:997](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L997)*

Perform a full reset (RIS, aka '\x1bc').

**Returns:** *void*

___

###  resize

▸ **resize**(`columns`: number, `rows`: number): *void*

*Defined in [xterm.d.ts:701](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L701)*

Resizes the terminal. It's best practice to debounce calls to resize,
this will help ensure that the pty can respond to the resize event
before another one occurs.

**Parameters:**

Name | Type |
------ | ------ |
`columns` | number |
`rows` | number |

**Returns:** *void*

___

###  scrollLines

▸ **scrollLines**(`amount`: number): *void*

*Defined in [xterm.d.ts:841](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L841)*

Scroll the display of the terminal

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | The number of lines to scroll down (negative scroll up).  |

**Returns:** *void*

___

###  scrollPages

▸ **scrollPages**(`pageCount`: number): *void*

*Defined in [xterm.d.ts:847](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L847)*

Scroll the display of the terminal by a number of pages.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageCount` | number | The number of pages to scroll (negative scrolls up).  |

**Returns:** *void*

___

###  scrollToBottom

▸ **scrollToBottom**(): *void*

*Defined in [xterm.d.ts:857](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L857)*

Scrolls the display of the terminal to the bottom.

**Returns:** *void*

___

###  scrollToLine

▸ **scrollToLine**(`line`: number): *void*

*Defined in [xterm.d.ts:863](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L863)*

Scrolls to a line within the buffer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`line` | number | The 0-based line index to scroll to.  |

**Returns:** *void*

___

###  scrollToTop

▸ **scrollToTop**(): *void*

*Defined in [xterm.d.ts:852](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L852)*

Scrolls the display of the terminal to the top.

**Returns:** *void*

___

###  select

▸ **select**(`column`: number, `row`: number, `length`: number): *void*

*Defined in [xterm.d.ts:817](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L817)*

Selects text within the terminal.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`column` | number | The column the selection starts at. |
`row` | number | The row the selection starts at. |
`length` | number | The length of the selection.  |

**Returns:** *void*

___

###  selectAll

▸ **selectAll**(): *void*

*Defined in [xterm.d.ts:822](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L822)*

Selects all text within the terminal.

**Returns:** *void*

___

###  selectLines

▸ **selectLines**(`start`: number, `end`: number): *void*

*Defined in [xterm.d.ts:829](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L829)*

Selects text in the buffer between 2 lines.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The 0-based line index to select from (inclusive). |
`end` | number | The 0-based line index to select to (inclusive).  |

**Returns:** *void*

___

###  setOption

▸ **setOption**(`key`: "fontFamily" | "termName" | "bellSound" | "wordSeparator", `value`: string): *void*

*Defined in [xterm.d.ts:930](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L930)*

Sets an option on the terminal.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "fontFamily" &#124; "termName" &#124; "bellSound" &#124; "wordSeparator" | The option key. |
`value` | string | The option value.  |

**Returns:** *void*

▸ **setOption**(`key`: "fontWeight" | "fontWeightBold", `value`: null | "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"): *void*

*Defined in [xterm.d.ts:936](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L936)*

Sets an option on the terminal.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "fontWeight" &#124; "fontWeightBold" | The option key. |
`value` | null &#124; "normal" &#124; "bold" &#124; "100" &#124; "200" &#124; "300" &#124; "400" &#124; "500" &#124; "600" &#124; "700" &#124; "800" &#124; "900" | The option value.  |

**Returns:** *void*

▸ **setOption**(`key`: "logLevel", `value`: [LogLevel]({% link _docs/api/terminal/modules/xterm.md %}#loglevel)): *void*

*Defined in [xterm.d.ts:942](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L942)*

Sets an option on the terminal.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "logLevel" | The option key. |
`value` | [LogLevel]({% link _docs/api/terminal/modules/xterm.md %}#loglevel) | The option value.  |

**Returns:** *void*

▸ **setOption**(`key`: "bellStyle", `value`: null | "none" | "visual" | "sound" | "both"): *void*

*Defined in [xterm.d.ts:948](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L948)*

Sets an option on the terminal.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "bellStyle" | The option key. |
`value` | null &#124; "none" &#124; "visual" &#124; "sound" &#124; "both" | The option value.  |

**Returns:** *void*

▸ **setOption**(`key`: "cursorStyle", `value`: null | "block" | "underline" | "bar"): *void*

*Defined in [xterm.d.ts:954](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L954)*

Sets an option on the terminal.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "cursorStyle" | The option key. |
`value` | null &#124; "block" &#124; "underline" &#124; "bar" | The option value.  |

**Returns:** *void*

▸ **setOption**(`key`: "allowTransparency" | "cancelEvents" | "convertEol" | "cursorBlink" | "disableStdin" | "macOptionIsMeta" | "popOnBell" | "rightClickSelectsWord" | "visualBell" | "windowsMode", `value`: boolean): *void*

*Defined in [xterm.d.ts:960](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L960)*

Sets an option on the terminal.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "allowTransparency" &#124; "cancelEvents" &#124; "convertEol" &#124; "cursorBlink" &#124; "disableStdin" &#124; "macOptionIsMeta" &#124; "popOnBell" &#124; "rightClickSelectsWord" &#124; "visualBell" &#124; "windowsMode" | The option key. |
`value` | boolean | The option value.  |

**Returns:** *void*

▸ **setOption**(`key`: "fontSize" | "letterSpacing" | "lineHeight" | "tabStopWidth" | "scrollback", `value`: number): *void*

*Defined in [xterm.d.ts:966](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L966)*

Sets an option on the terminal.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "fontSize" &#124; "letterSpacing" &#124; "lineHeight" &#124; "tabStopWidth" &#124; "scrollback" | The option key. |
`value` | number | The option value.  |

**Returns:** *void*

▸ **setOption**(`key`: "theme", `value`: [ITheme]({% link _docs/api/terminal/interfaces/itheme.md %})): *void*

*Defined in [xterm.d.ts:972](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L972)*

Sets an option on the terminal.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "theme" | The option key. |
`value` | [ITheme]({% link _docs/api/terminal/interfaces/itheme.md %}) | The option value.  |

**Returns:** *void*

▸ **setOption**(`key`: "cols" | "rows", `value`: number): *void*

*Defined in [xterm.d.ts:978](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L978)*

Sets an option on the terminal.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "cols" &#124; "rows" | The option key. |
`value` | number | The option value.  |

**Returns:** *void*

▸ **setOption**(`key`: string, `value`: any): *void*

*Defined in [xterm.d.ts:984](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L984)*

Sets an option on the terminal.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | The option key. |
`value` | any | The option value.  |

**Returns:** *void*

___

###  write

▸ **write**(`data`: string | Uint8Array, `callback?`: function): *void*

*Defined in [xterm.d.ts:878](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L878)*

Write data to the terminal.

**Parameters:**

▪ **data**: *string | Uint8Array*

The data to write to the terminal. This can either be raw
bytes given as Uint8Array from the pty or a string. Raw bytes will always
be treated as UTF-8 encoded, string data as UTF-16.

▪`Optional`  **callback**: *function*

Optional callback that fires when the data was processed
by the parser.

▸ (): *void*

**Returns:** *void*

___

###  writeUtf8

▸ **writeUtf8**(`data`: Uint8Array, `callback?`: function): *void*

*Defined in [xterm.d.ts:896](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L896)*

Write UTF8 data to the terminal.

**`deprecated`** use `write` instead

**Parameters:**

▪ **data**: *Uint8Array*

The data to write to the terminal.

▪`Optional`  **callback**: *function*

Optional callback when data was processed.

▸ (): *void*

**Returns:** *void*

___

###  writeln

▸ **writeln**(`data`: string | Uint8Array, `callback?`: function): *void*

*Defined in [xterm.d.ts:888](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L888)*

Writes data to the terminal, followed by a break line character (\n).

**Parameters:**

▪ **data**: *string | Uint8Array*

The data to write to the terminal. This can either be raw
bytes given as Uint8Array from the pty or a string. Raw bytes will always
be treated as UTF-8 encoded, string data as UTF-16.

▪`Optional`  **callback**: *function*

Optional callback that fires when the data was processed
by the parser.

▸ (): *void*

**Returns:** *void*
