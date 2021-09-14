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
* [setOption]({% link _docs/api/terminal/classes/terminal.md %}#setoption)
* [write]({% link _docs/api/terminal/classes/terminal.md %}#write)
* [writeUtf8]({% link _docs/api/terminal/classes/terminal.md %}#writeutf8)
* [writeln]({% link _docs/api/terminal/classes/terminal.md %}#writeln)

## Constructors

###  constructor

\+ **new Terminal**(`options?`: [ITerminalOptions]({% link _docs/api/terminal/interfaces/iterminaloptions.md %})): *[Terminal]({% link _docs/api/terminal/classes/terminal.md %})*

*Defined in [xterm.d.ts:641](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L641)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [ITerminalOptions]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}) | An object containing a set of options.  |

**Returns:** *[Terminal]({% link _docs/api/terminal/classes/terminal.md %})*

## Properties

###  buffer

• **buffer**: *[IBufferNamespace]({% link _docs/api/terminal/interfaces/ibuffernamespace.md %})*

*Defined in [xterm.d.ts:613](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L613)*

___

###  cols

• **cols**: *number*

*Defined in [xterm.d.ts:606](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L606)*

___

###  element

• **element**: *HTMLElement | undefined*

*Defined in [xterm.d.ts:587](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L587)*

___

###  markers

• **markers**: *ReadonlyArray‹[IMarker]({% link _docs/api/terminal/interfaces/imarker.md %})›*

*Defined in [xterm.d.ts:619](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L619)*

___

###  modes

• **modes**: *[IModes]({% link _docs/api/terminal/interfaces/imodes.md %})*

*Defined in [xterm.d.ts:636](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L636)*

___

###  onBell

• **onBell**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹void›*

*Defined in [xterm.d.ts:654](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L654)*

___

###  onBinary

• **onBinary**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹string›*

*Defined in [xterm.d.ts:665](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L665)*

___

###  onCursorMove

• **onCursorMove**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹void›*

*Defined in [xterm.d.ts:671](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L671)*

___

###  onData

• **onData**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹string›*

*Defined in [xterm.d.ts:680](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L680)*

___

###  onKey

• **onKey**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹object›*

*Defined in [xterm.d.ts:688](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L688)*

___

###  onLineFeed

• **onLineFeed**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹void›*

*Defined in [xterm.d.ts:694](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L694)*

___

###  onRender

• **onRender**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹object›*

*Defined in [xterm.d.ts:702](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L702)*

___

###  onResize

• **onResize**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹object›*

*Defined in [xterm.d.ts:709](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L709)*

___

###  onScroll

• **onScroll**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹number›*

*Defined in [xterm.d.ts:716](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L716)*

___

###  onSelectionChange

• **onSelectionChange**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹void›*

*Defined in [xterm.d.ts:722](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L722)*

___

###  onTitleChange

• **onTitleChange**: *[IEvent]({% link _docs/api/terminal/interfaces/ievent.md %})‹string›*

*Defined in [xterm.d.ts:729](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L729)*

___

###  parser

• **parser**: *[IParser]({% link _docs/api/terminal/interfaces/iparser.md %})*

*Defined in [xterm.d.ts:625](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L625)*

___

###  rows

• **rows**: *number*

*Defined in [xterm.d.ts:599](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L599)*

___

###  textarea

• **textarea**: *HTMLTextAreaElement | undefined*

*Defined in [xterm.d.ts:592](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L592)*

___

###  unicode

• **unicode**: *[IUnicodeHandling]({% link _docs/api/terminal/interfaces/iunicodehandling.md %})*

*Defined in [xterm.d.ts:631](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L631)*

___

### `Static` strings

▪ **strings**: *[ILocalizableStrings]({% link _docs/api/terminal/interfaces/ilocalizablestrings.md %})*

*Defined in [xterm.d.ts:641](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L641)*

## Methods

###  addMarker

▸ **addMarker**(`cursorYOffset`: number): *[IMarker]({% link _docs/api/terminal/interfaces/imarker.md %}) | undefined*

*Defined in [xterm.d.ts:848](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L848)*

**Parameters:**

Name | Type |
------ | ------ |
`cursorYOffset` | number |

**Returns:** *[IMarker]({% link _docs/api/terminal/interfaces/imarker.md %}) | undefined*

___

###  attachCustomKeyEventHandler

▸ **attachCustomKeyEventHandler**(`customKeyEventHandler`: function): *void*

*Defined in [xterm.d.ts:767](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L767)*

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

*Defined in [xterm.d.ts:734](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L734)*

**Returns:** *void*

___

###  clear

▸ **clear**(): *void*

*Defined in [xterm.d.ts:928](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L928)*

**Returns:** *void*

___

###  clearSelection

▸ **clearSelection**(): *void*

*Defined in [xterm.d.ts:869](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L869)*

**Returns:** *void*

___

###  deregisterCharacterJoiner

▸ **deregisterCharacterJoiner**(`joinerId`: number): *void*

*Defined in [xterm.d.ts:835](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L835)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`joinerId` | number | The character joiner's ID (returned after register)  |

**Returns:** *void*

___

###  deregisterLinkMatcher

▸ **deregisterLinkMatcher**(`matcherId`: number): *void*

*Defined in [xterm.d.ts:789](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L789)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`matcherId` | number | The link matcher's ID (returned after register)  |

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

*Implementation of [IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})*

*Defined in [xterm.d.ts:895](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L895)*

**Returns:** *void*

___

###  focus

▸ **focus**(): *void*

*Defined in [xterm.d.ts:739](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L739)*

**Returns:** *void*

___

###  getOption

▸ **getOption**(`key`: "bellSound" | "bellStyle" | "cursorStyle" | "fontFamily" | "logLevel" | "rendererType" | "termName" | "wordSeparator"): *string*

*Defined in [xterm.d.ts:968](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L968)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "bellSound" &#124; "bellStyle" &#124; "cursorStyle" &#124; "fontFamily" &#124; "logLevel" &#124; "rendererType" &#124; "termName" &#124; "wordSeparator" | The option key.  |

**Returns:** *string*

▸ **getOption**(`key`: "allowTransparency" | "cancelEvents" | "convertEol" | "cursorBlink" | "disableStdin" | "macOptionIsMeta" | "rightClickSelectsWord" | "popOnBell" | "visualBell" | "windowsMode"): *boolean*

*Defined in [xterm.d.ts:973](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L973)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "allowTransparency" &#124; "cancelEvents" &#124; "convertEol" &#124; "cursorBlink" &#124; "disableStdin" &#124; "macOptionIsMeta" &#124; "rightClickSelectsWord" &#124; "popOnBell" &#124; "visualBell" &#124; "windowsMode" | The option key.  |

**Returns:** *boolean*

▸ **getOption**(`key`: "cols" | "fontSize" | "letterSpacing" | "lineHeight" | "rows" | "tabStopWidth" | "scrollback"): *number*

*Defined in [xterm.d.ts:978](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L978)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "cols" &#124; "fontSize" &#124; "letterSpacing" &#124; "lineHeight" &#124; "rows" &#124; "tabStopWidth" &#124; "scrollback" | The option key.  |

**Returns:** *number*

▸ **getOption**(`key`: "fontWeight" | "fontWeightBold"): *[FontWeight]({% link _docs/api/terminal/modules/xterm.md %}#fontweight)*

*Defined in [xterm.d.ts:983](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L983)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "fontWeight" &#124; "fontWeightBold" | The option key.  |

**Returns:** *[FontWeight]({% link _docs/api/terminal/modules/xterm.md %}#fontweight)*

▸ **getOption**(`key`: string): *any*

*Defined in [xterm.d.ts:988](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L988)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | The option key.  |

**Returns:** *any*

___

###  getSelection

▸ **getSelection**(): *string*

*Defined in [xterm.d.ts:859](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L859)*

**Returns:** *string*

___

###  getSelectionPosition

▸ **getSelectionPosition**(): *[ISelectionPosition]({% link _docs/api/terminal/interfaces/iselectionposition.md %}) | undefined*

*Defined in [xterm.d.ts:864](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L864)*

**Returns:** *[ISelectionPosition]({% link _docs/api/terminal/interfaces/iselectionposition.md %}) | undefined*

___

###  hasSelection

▸ **hasSelection**(): *boolean*

*Defined in [xterm.d.ts:853](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L853)*

**Returns:** *boolean*

___

###  loadAddon

▸ **loadAddon**(`addon`: [ITerminalAddon]({% link _docs/api/terminal/interfaces/iterminaladdon.md %})): *void*

*Defined in [xterm.d.ts:1068](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1068)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`addon` | [ITerminalAddon]({% link _docs/api/terminal/interfaces/iterminaladdon.md %}) | The addon to load.  |

**Returns:** *void*

___

###  open

▸ **open**(`parent`: HTMLElement): *void*

*Defined in [xterm.d.ts:756](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L756)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`parent` | HTMLElement | The element to create the terminal within. This element must be visible (have dimensions) when `open` is called as several DOM- based measurements need to be performed when this function is called.  |

**Returns:** *void*

___

###  paste

▸ **paste**(`data`: string): *void*

*Defined in [xterm.d.ts:962](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L962)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | string | The text to write to the terminal.  |

**Returns:** *void*

___

###  refresh

▸ **refresh**(`start`: number, `end`: number): *void*

*Defined in [xterm.d.ts:1057](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1057)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The row to start from (between 0 and this.rows - 1). |
`end` | number | The row to end at (between start and this.rows - 1).  |

**Returns:** *void*

___

###  registerCharacterJoiner

▸ **registerCharacterJoiner**(`handler`: function): *number*

*Defined in [xterm.d.ts:828](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L828)*

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

###  registerLinkMatcher

▸ **registerLinkMatcher**(`regex`: RegExp, `handler`: function, `options?`: [ILinkMatcherOptions]({% link _docs/api/terminal/interfaces/ilinkmatcheroptions.md %})): *number*

*Defined in [xterm.d.ts:781](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L781)*

**Parameters:**

▪ **regex**: *RegExp*

▪ **handler**: *function*

▸ (`event`: MouseEvent, `uri`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | MouseEvent |
`uri` | string |

▪`Optional`  **options**: *[ILinkMatcherOptions]({% link _docs/api/terminal/interfaces/ilinkmatcheroptions.md %})*

**Returns:** *number*

The ID of the new matcher, this can be used to deregister.

___

###  registerLinkProvider

▸ **registerLinkProvider**(`linkProvider`: [ILinkProvider]({% link _docs/api/terminal/interfaces/ilinkprovider.md %})): *[IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})*

*Defined in [xterm.d.ts:797](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L797)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`linkProvider` | [ILinkProvider]({% link _docs/api/terminal/interfaces/ilinkprovider.md %}) | The link provider to use to detect links.  |

**Returns:** *[IDisposable]({% link _docs/api/terminal/interfaces/idisposable.md %})*

___

###  registerMarker

▸ **registerMarker**(`cursorYOffset`: number): *[IMarker]({% link _docs/api/terminal/interfaces/imarker.md %}) | undefined*

*Defined in [xterm.d.ts:843](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L843)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cursorYOffset` | number | The y position offset of the marker from the cursor. |

**Returns:** *[IMarker]({% link _docs/api/terminal/interfaces/imarker.md %}) | undefined*

The new marker or undefined.

___

###  reset

▸ **reset**(): *void*

*Defined in [xterm.d.ts:1062](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1062)*

**Returns:** *void*

___

###  resize

▸ **resize**(`columns`: number, `rows`: number): *void*

*Defined in [xterm.d.ts:748](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L748)*

**Parameters:**

Name | Type |
------ | ------ |
`columns` | number |
`rows` | number |

**Returns:** *void*

___

###  scrollLines

▸ **scrollLines**(`amount`: number): *void*

*Defined in [xterm.d.ts:901](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L901)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`amount` | number | The number of lines to scroll down (negative scroll up).  |

**Returns:** *void*

___

###  scrollPages

▸ **scrollPages**(`pageCount`: number): *void*

*Defined in [xterm.d.ts:907](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L907)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pageCount` | number | The number of pages to scroll (negative scrolls up).  |

**Returns:** *void*

___

###  scrollToBottom

▸ **scrollToBottom**(): *void*

*Defined in [xterm.d.ts:917](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L917)*

**Returns:** *void*

___

###  scrollToLine

▸ **scrollToLine**(`line`: number): *void*

*Defined in [xterm.d.ts:923](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L923)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`line` | number | The 0-based line index to scroll to.  |

**Returns:** *void*

___

###  scrollToTop

▸ **scrollToTop**(): *void*

*Defined in [xterm.d.ts:912](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L912)*

**Returns:** *void*

___

###  select

▸ **select**(`column`: number, `row`: number, `length`: number): *void*

*Defined in [xterm.d.ts:877](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L877)*

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

*Defined in [xterm.d.ts:882](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L882)*

**Returns:** *void*

___

###  selectLines

▸ **selectLines**(`start`: number, `end`: number): *void*

*Defined in [xterm.d.ts:889](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L889)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The 0-based line index to select from (inclusive). |
`end` | number | The 0-based line index to select to (inclusive).  |

**Returns:** *void*

___

###  setOption

▸ **setOption**(`key`: "fontFamily" | "termName" | "bellSound" | "wordSeparator", `value`: string): *void*

*Defined in [xterm.d.ts:995](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L995)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "fontFamily" &#124; "termName" &#124; "bellSound" &#124; "wordSeparator" | The option key. |
`value` | string | The option value.  |

**Returns:** *void*

▸ **setOption**(`key`: "fontWeight" | "fontWeightBold", `value`: null | "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | number): *void*

*Defined in [xterm.d.ts:1001](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1001)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "fontWeight" &#124; "fontWeightBold" | The option key. |
`value` | null &#124; "normal" &#124; "bold" &#124; "100" &#124; "200" &#124; "300" &#124; "400" &#124; "500" &#124; "600" &#124; "700" &#124; "800" &#124; "900" &#124; number | The option value.  |

**Returns:** *void*

▸ **setOption**(`key`: "logLevel", `value`: [LogLevel]({% link _docs/api/terminal/modules/xterm.md %}#loglevel)): *void*

*Defined in [xterm.d.ts:1007](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1007)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "logLevel" | The option key. |
`value` | [LogLevel]({% link _docs/api/terminal/modules/xterm.md %}#loglevel) | The option value.  |

**Returns:** *void*

▸ **setOption**(`key`: "bellStyle", `value`: null | "none" | "visual" | "sound" | "both"): *void*

*Defined in [xterm.d.ts:1013](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1013)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "bellStyle" | The option key. |
`value` | null &#124; "none" &#124; "visual" &#124; "sound" &#124; "both" | The option value.  |

**Returns:** *void*

▸ **setOption**(`key`: "cursorStyle", `value`: null | "block" | "underline" | "bar"): *void*

*Defined in [xterm.d.ts:1019](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1019)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "cursorStyle" | The option key. |
`value` | null &#124; "block" &#124; "underline" &#124; "bar" | The option value.  |

**Returns:** *void*

▸ **setOption**(`key`: "allowTransparency" | "cancelEvents" | "convertEol" | "cursorBlink" | "disableStdin" | "macOptionIsMeta" | "popOnBell" | "rightClickSelectsWord" | "visualBell" | "windowsMode", `value`: boolean): *void*

*Defined in [xterm.d.ts:1025](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1025)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "allowTransparency" &#124; "cancelEvents" &#124; "convertEol" &#124; "cursorBlink" &#124; "disableStdin" &#124; "macOptionIsMeta" &#124; "popOnBell" &#124; "rightClickSelectsWord" &#124; "visualBell" &#124; "windowsMode" | The option key. |
`value` | boolean | The option value.  |

**Returns:** *void*

▸ **setOption**(`key`: "fontSize" | "letterSpacing" | "lineHeight" | "tabStopWidth" | "scrollback", `value`: number): *void*

*Defined in [xterm.d.ts:1031](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1031)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "fontSize" &#124; "letterSpacing" &#124; "lineHeight" &#124; "tabStopWidth" &#124; "scrollback" | The option key. |
`value` | number | The option value.  |

**Returns:** *void*

▸ **setOption**(`key`: "theme", `value`: [ITheme]({% link _docs/api/terminal/interfaces/itheme.md %})): *void*

*Defined in [xterm.d.ts:1037](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1037)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "theme" | The option key. |
`value` | [ITheme]({% link _docs/api/terminal/interfaces/itheme.md %}) | The option value.  |

**Returns:** *void*

▸ **setOption**(`key`: "cols" | "rows", `value`: number): *void*

*Defined in [xterm.d.ts:1043](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1043)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | "cols" &#124; "rows" | The option key. |
`value` | number | The option value.  |

**Returns:** *void*

▸ **setOption**(`key`: string, `value`: any): *void*

*Defined in [xterm.d.ts:1049](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L1049)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | The option key. |
`value` | any | The option value.  |

**Returns:** *void*

___

###  write

▸ **write**(`data`: string | Uint8Array, `callback?`: function): *void*

*Defined in [xterm.d.ts:938](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L938)*

**Parameters:**

▪ **data**: *string | Uint8Array*

▪`Optional`  **callback**: *function*

▸ (): *void*

**Returns:** *void*

___

###  writeUtf8

▸ **writeUtf8**(`data`: Uint8Array, `callback?`: function): *void*

*Defined in [xterm.d.ts:956](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L956)*

**Parameters:**

▪ **data**: *Uint8Array*

▪`Optional`  **callback**: *function*

▸ (): *void*

**Returns:** *void*

___

###  writeln

▸ **writeln**(`data`: string | Uint8Array, `callback?`: function): *void*

*Defined in [xterm.d.ts:948](https://github.com/xtermjs/xterm.js/blob/4.14.1/typings/xterm.d.ts#L948)*

**Parameters:**

▪ **data**: *string | Uint8Array*

▪`Optional`  **callback**: *function*

▸ (): *void*

**Returns:** *void*
