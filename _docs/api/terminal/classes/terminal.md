---
title: Terminal
category: API-classes
layout: docs
---


# Class: Terminal

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
* [modes]({% link _docs/api/terminal/classes/terminal.md %}#modes)
* [onBell]({% link _docs/api/terminal/classes/terminal.md %}#onbell)
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
* [onWriteParsed]({% link _docs/api/terminal/classes/terminal.md %}#onwriteparsed)
* [options]({% link _docs/api/terminal/classes/terminal.md %}#options)
* [parser]({% link _docs/api/terminal/classes/terminal.md %}#parser)
* [rows]({% link _docs/api/terminal/classes/terminal.md %}#rows)
* [textarea]({% link _docs/api/terminal/classes/terminal.md %}#textarea)
* [unicode]({% link _docs/api/terminal/classes/terminal.md %}#unicode)
* [strings]({% link _docs/api/terminal/classes/terminal.md %}#static-strings)

### Methods

* [attachCustomKeyEventHandler]({% link _docs/api/terminal/classes/terminal.md %}#attachcustomkeyeventhandler)
* [blur]({% link _docs/api/terminal/classes/terminal.md %}#blur)
* [clear]({% link _docs/api/terminal/classes/terminal.md %}#clear)
* [clearSelection]({% link _docs/api/terminal/classes/terminal.md %}#clearselection)
* [clearTextureAtlas]({% link _docs/api/terminal/classes/terminal.md %}#cleartextureatlas)
* [deregisterCharacterJoiner]({% link _docs/api/terminal/classes/terminal.md %}#deregistercharacterjoiner)
* [dispose]({% link _docs/api/terminal/classes/terminal.md %}#dispose)
* [focus]({% link _docs/api/terminal/classes/terminal.md %}#focus)
* [getSelection]({% link _docs/api/terminal/classes/terminal.md %}#getselection)
* [getSelectionPosition]({% link _docs/api/terminal/classes/terminal.md %}#getselectionposition)
* [hasSelection]({% link _docs/api/terminal/classes/terminal.md %}#hasselection)
* [loadAddon]({% link _docs/api/terminal/classes/terminal.md %}#loadaddon)
* [open]({% link _docs/api/terminal/classes/terminal.md %}#open)
* [paste]({% link _docs/api/terminal/classes/terminal.md %}#paste)
* [refresh]({% link _docs/api/terminal/classes/terminal.md %}#refresh)
* [registerCharacterJoiner]({% link _docs/api/terminal/classes/terminal.md %}#registercharacterjoiner)
* [registerDecoration]({% link _docs/api/terminal/classes/terminal.md %}#registerdecoration)
* [registerLinkProvider]({% link _docs/api/terminal/classes/terminal.md %}#registerlinkprovider)
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
* [write]({% link _docs/api/terminal/classes/terminal.md %}#write)
* [writeln]({% link _docs/api/terminal/classes/terminal.md %}#writeln)

## Constructors

###  constructor

\+ **new Terminal**(`options?`: [ITerminalOptions]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}) & [ITerminalInitOnlyOptions]({% link _docs/api/terminal/interfaces/iterminalinitonlyoptions.md %})): *[Terminal]({% link _docs/api/terminal/classes/terminal.md %})*

*Defined in [xterm.d.ts:753](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L753)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [ITerminalOptions]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}) & [ITerminalInitOnlyOptions]({% link _docs/api/terminal/interfaces/iterminalinitonlyoptions.md %}) | An object containing a set of options.  |

**Returns:** *[Terminal]({% link _docs/api/terminal/classes/terminal.md %})*

## Properties

###  buffer

• **buffer**: *[IBufferNamespace]({% link _docs/api/terminal/interfaces/ibuffernamespace.md %})*

*Defined in [xterm.d.ts:690](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L690)*

___

###  cols

• **cols**: *number*

*Defined in [xterm.d.ts:685](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L685)*

___

###  element

• **element**: *HTMLElement | undefined*

*Defined in [xterm.d.ts:666](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L666)*

___

###  markers

• **markers**: *ReadonlyArray‹[IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})›*

*Defined in [xterm.d.ts:696](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L696)*

___

###  modes

• **modes**: *[IModes]({% link _docs/api/terminal/interfaces/imodes.md %})*

*Defined in [xterm.d.ts:712](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L712)*

___

###  onBell

• **onBell**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹void›*

*Defined in [xterm.d.ts:766](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L766)*

___

###  onBinary

• **onBinary**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹string›*

*Defined in [xterm.d.ts:777](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L777)*

___

###  onCursorMove

• **onCursorMove**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹void›*

*Defined in [xterm.d.ts:783](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L783)*

___

###  onData

• **onData**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹string›*

*Defined in [xterm.d.ts:792](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L792)*

___

###  onKey

• **onKey**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹object›*

*Defined in [xterm.d.ts:800](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L800)*

___

###  onLineFeed

• **onLineFeed**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹void›*

*Defined in [xterm.d.ts:806](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L806)*

___

###  onRender

• **onRender**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹object›*

*Defined in [xterm.d.ts:814](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L814)*

___

###  onResize

• **onResize**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹object›*

*Defined in [xterm.d.ts:832](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L832)*

___

###  onScroll

• **onScroll**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹number›*

*Defined in [xterm.d.ts:839](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L839)*

___

###  onSelectionChange

• **onSelectionChange**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹void›*

*Defined in [xterm.d.ts:845](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L845)*

___

###  onTitleChange

• **onTitleChange**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹string›*

*Defined in [xterm.d.ts:852](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L852)*

___

###  onWriteParsed

• **onWriteParsed**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹void›*

*Defined in [xterm.d.ts:825](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L825)*

___

###  options

• **options**: *[ITerminalOptions]({% link _docs/api/terminal/interfaces/iterminaloptions.md %})*

*Defined in [xterm.d.ts:748](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L748)*

___

###  parser

• **parser**: *[IParser]({% link _docs/api/terminal/interfaces/iparser.md %})*

*Defined in [xterm.d.ts:701](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L701)*

___

###  rows

• **rows**: *number*

*Defined in [xterm.d.ts:678](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L678)*

___

###  textarea

• **textarea**: *HTMLTextAreaElement | undefined*

*Defined in [xterm.d.ts:671](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L671)*

___

###  unicode

• **unicode**: *[IUnicodeHandling]({% link _docs/api/terminal/interfaces/iunicodehandling.md %})*

*Defined in [xterm.d.ts:707](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L707)*

___

### `Static` strings

▪ **strings**: *[ILocalizableStrings]({% link _docs/api/terminal/interfaces/ilocalizablestrings.md %})*

*Defined in [xterm.d.ts:753](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L753)*

## Methods

###  attachCustomKeyEventHandler

▸ **attachCustomKeyEventHandler**(`customKeyEventHandler`: function): *void*

*Defined in [xterm.d.ts:908](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L908)*

**Parameters:**

▪ **customKeyEventHandler**: *function*

▸ (`event`: KeyboardEvent): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`event` | KeyboardEvent |

**Returns:** *void*

___

###  blur

▸ **blur**(): *void*

*Defined in [xterm.d.ts:857](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L857)*

**Returns:** *void*

___

###  clear

▸ **clear**(): *void*

*Defined in [xterm.d.ts:1052](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1052)*

**Returns:** *void*

___

###  clearSelection

▸ **clearSelection**(): *void*

*Defined in [xterm.d.ts:992](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L992)*

**Returns:** *void*

___

###  clearTextureAtlas

▸ **clearTextureAtlas**(): *void*

*Defined in [xterm.d.ts:1094](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1094)*

**Returns:** *void*

___

###  deregisterCharacterJoiner

▸ **deregisterCharacterJoiner**(`joinerId`: number): *void*

*Defined in [xterm.d.ts:954](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L954)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`joinerId` | number | The character joiner's ID (returned after register)  |

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

*Implementation of [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})*

*Defined in [xterm.d.ts:1019](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1019)*

**Returns:** *void*

___

###  focus

▸ **focus**(): *void*

*Defined in [xterm.d.ts:862](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L862)*

**Returns:** *void*

___

###  getSelection

▸ **getSelection**(): *string*

*Defined in [xterm.d.ts:982](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L982)*

**Returns:** *string*

___

###  getSelectionPosition

▸ **getSelectionPosition**(): *[IBufferRange]({% link _docs/api/terminal/interfaces/ibufferrange.md %}) | undefined*

*Defined in [xterm.d.ts:987](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L987)*

**Returns:** *[IBufferRange]({% link _docs/api/terminal/interfaces/ibufferrange.md %}) | undefined*

___

###  hasSelection

▸ **hasSelection**(): *boolean*

*Defined in [xterm.d.ts:976](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L976)*

**Returns:** *boolean*

___

###  loadAddon

▸ **loadAddon**(`addon`: [ITerminalAddon]({% link _docs/api/terminal/interfaces/iterminaladdon.md %})): *void*

*Defined in [xterm.d.ts:1105](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1105)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`addon` | [ITerminalAddon]({% link _docs/api/terminal/interfaces/iterminaladdon.md %}) | The addon to load.  |

**Returns:** *void*

___

###  open

▸ **open**(`parent`: HTMLElement): *void*

*Defined in [xterm.d.ts:879](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L879)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`parent` | HTMLElement | The element to create the terminal within. This element must be visible (have dimensions) when `open` is called as several DOM- based measurements need to be performed when this function is called.  |

**Returns:** *void*

___

###  paste

▸ **paste**(`data`: string): *void*

*Defined in [xterm.d.ts:1078](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1078)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | string | The text to write to the terminal.  |

**Returns:** *void*

___

###  refresh

▸ **refresh**(`start`: number, `end`: number): *void*

*Defined in [xterm.d.ts:1086](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1086)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The row to start from (between 0 and this.rows - 1). |
`end` | number | The row to end at (between start and this.rows - 1).  |

**Returns:** *void*

___

###  registerCharacterJoiner

▸ **registerCharacterJoiner**(`handler`: function): *number*

*Defined in [xterm.d.ts:947](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L947)*

**Parameters:**

▪ **handler**: *function*

▸ (`text`: string): *[number, number][]*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *number*

The ID of the new joiner, this can be used to deregister

___

###  registerDecoration

▸ **registerDecoration**(`decorationOptions`: [IDecorationOptions]({% link _docs/api/terminal/interfaces/idecorationoptions.md %})): *[IDecoration]({% link _docs/api/terminal/interfaces/idecoration.md %}) | undefined*

*Defined in [xterm.d.ts:971](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L971)*

**Parameters:**

Name | Type |
------ | ------ |
`decorationOptions` | [IDecorationOptions]({% link _docs/api/terminal/interfaces/idecorationoptions.md %}) |

**Returns:** *[IDecoration]({% link _docs/api/terminal/interfaces/idecoration.md %}) | undefined*

___

###  registerLinkProvider

▸ **registerLinkProvider**(`linkProvider`: [ILinkProvider]({% link _docs/api/terminal/interfaces/ilinkprovider.md %})): *[IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})*

*Defined in [xterm.d.ts:916](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L916)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`linkProvider` | [ILinkProvider]({% link _docs/api/terminal/interfaces/ilinkprovider.md %}) | The link provider to use to detect links.  |

**Returns:** *[IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})*

___

###  registerMarker

▸ **registerMarker**(`cursorYOffset?`: number): *[IMarker]({% link _docs/api/terminal/interfaces/imarker.md %}) | undefined*

*Defined in [xterm.d.ts:962](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L962)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cursorYOffset?` | number | The y position offset of the marker from the cursor. |

**Returns:** *[IMarker]({% link _docs/api/terminal/interfaces/imarker.md %}) | undefined*

The new marker or undefined.

___

###  reset

▸ **reset**(): *void*

*Defined in [xterm.d.ts:1099](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1099)*

**Returns:** *void*

___

###  resize

▸ **resize**(`columns`: number, `rows`: number): *void*

*Defined in [xterm.d.ts:871](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L871)*

**Parameters:**

Name | Type |
------ | ------ |
`columns` | number |
`rows` | number |

**Returns:** *void*

___

###  scrollLines

▸ **scrollLines**(`amount`: number): *void*

*Defined in [xterm.d.ts:1025](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1025)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | The number of lines to scroll down (negative scroll up).  |

**Returns:** *void*

___

###  scrollPages

▸ **scrollPages**(`pageCount`: number): *void*

*Defined in [xterm.d.ts:1031](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1031)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageCount` | number | The number of pages to scroll (negative scrolls up).  |

**Returns:** *void*

___

###  scrollToBottom

▸ **scrollToBottom**(): *void*

*Defined in [xterm.d.ts:1041](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1041)*

**Returns:** *void*

___

###  scrollToLine

▸ **scrollToLine**(`line`: number): *void*

*Defined in [xterm.d.ts:1047](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1047)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`line` | number | The 0-based line index to scroll to.  |

**Returns:** *void*

___

###  scrollToTop

▸ **scrollToTop**(): *void*

*Defined in [xterm.d.ts:1036](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1036)*

**Returns:** *void*

___

###  select

▸ **select**(`column`: number, `row`: number, `length`: number): *void*

*Defined in [xterm.d.ts:1000](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1000)*

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

*Defined in [xterm.d.ts:1005](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1005)*

**Returns:** *void*

___

###  selectLines

▸ **selectLines**(`start`: number, `end`: number): *void*

*Defined in [xterm.d.ts:1012](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1012)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The 0-based line index to select from (inclusive). |
`end` | number | The 0-based line index to select to (inclusive).  |

**Returns:** *void*

___

###  write

▸ **write**(`data`: string | Uint8Array, `callback?`: function): *void*

*Defined in [xterm.d.ts:1062](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1062)*

**Parameters:**

▪ **data**: *string | Uint8Array*

▪`Optional`  **callback**: *function*

▸ (): *void*

**Returns:** *void*

___

###  writeln

▸ **writeln**(`data`: string | Uint8Array, `callback?`: function): *void*

*Defined in [xterm.d.ts:1072](https://github.com/xtermjs/xterm.js/blob/5.1.0/typings/xterm.d.ts#L1072)*

**Parameters:**

▪ **data**: *string | Uint8Array*

▪`Optional`  **callback**: *function*

▸ (): *void*

**Returns:** *void*
