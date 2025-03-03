---
title: Terminal
category: API-classes
layout: docs
---


***

[@xterm/xterm]({% link _docs/api/terminal/readme.md %}) / Terminal

# Class: Terminal

The class that represents an xterm.js terminal.

## Implements

- [`IDisposable`]({% link _docs/api/terminal/interfaces/idisposable.md %})

## Constructors

### new Terminal(options)

> **new Terminal**(`options`?): [`Terminal`]({% link _docs/api/terminal/classes/terminal.md %})

Creates a new `Terminal` object.

#### Parameters

• **options?**: [`ITerminalOptions`]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}) & [`ITerminalInitOnlyOptions`]({% link _docs/api/terminal/interfaces/iterminalinitonlyoptions.md %})

An object containing a set of options.

#### Returns

[`Terminal`]({% link _docs/api/terminal/classes/terminal.md %})

#### Source

[xterm.d.ts:879](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L879)

## Properties

### buffer

> **`readonly`** **buffer**: [`IBufferNamespace`]({% link _docs/api/terminal/interfaces/ibuffernamespace.md %})

Access to the terminal's normal and alt buffer.

#### Source

[xterm.d.ts:809](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L809)

***

### cols

> **`readonly`** **cols**: `number`

The number of columns in the terminal's viewport. Use
`ITerminalOptions.cols` to set this in the constructor and
`Terminal.resize` for when the terminal exists.

#### Source

[xterm.d.ts:804](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L804)

***

### element

> **`readonly`** **element**: `HTMLElement`

The element containing the terminal.

#### Source

[xterm.d.ts:785](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L785)

***

### markers

> **`readonly`** **markers**: readonly [`IMarker`]({% link _docs/api/terminal/interfaces/imarker.md %})[]

(EXPERIMENTAL) Get all markers registered against the buffer. If the alt
buffer is active this will always return [].

#### Source

[xterm.d.ts:815](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L815)

***

### modes

> **`readonly`** **modes**: [`IModes`]({% link _docs/api/terminal/interfaces/imodes.md %})

Gets the terminal modes as set by SM/DECSET.

#### Source

[xterm.d.ts:831](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L831)

***

### onBell

> **onBell**: [`IEvent`]({% link _docs/api/terminal/interfaces/ievent.md %})\<`void`, `void`\>

Adds an event listener for when the bell is triggered.

#### Source

[xterm.d.ts:885](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L885)

***

### onBinary

> **onBinary**: [`IEvent`]({% link _docs/api/terminal/interfaces/ievent.md %})\<`string`, `void`\>

Adds an event listener for when a binary event fires. This is used to
enable non UTF-8 conformant binary messages to be sent to the backend.
Currently this is only used for a certain type of mouse reports that
happen to be not UTF-8 compatible.
The event value is a JS string, pass it to the underlying pty as
binary data, e.g. `pty.write(Buffer.from(data, 'binary'))`.

#### Source

[xterm.d.ts:896](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L896)

***

### onCursorMove

> **onCursorMove**: [`IEvent`]({% link _docs/api/terminal/interfaces/ievent.md %})\<`void`, `void`\>

Adds an event listener for the cursor moves.

#### Source

[xterm.d.ts:902](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L902)

***

### onData

> **onData**: [`IEvent`]({% link _docs/api/terminal/interfaces/ievent.md %})\<`string`, `void`\>

Adds an event listener for when a data event fires. This happens for
example when the user types or pastes into the terminal. The event value
is whatever `string` results, in a typical setup, this should be passed
on to the backing pty.

#### Source

[xterm.d.ts:911](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L911)

***

### onKey

> **onKey**: [`IEvent`]({% link _docs/api/terminal/interfaces/ievent.md %})\<`object`, `void`\>

Adds an event listener for when a key is pressed. The event value
contains the string that will be sent in the data event as well as the
DOM event that triggered it.

#### Type declaration

##### domEvent

> **domEvent**: `KeyboardEvent`

##### key

> **key**: `string`

#### Source

[xterm.d.ts:919](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L919)

***

### onLineFeed

> **onLineFeed**: [`IEvent`]({% link _docs/api/terminal/interfaces/ievent.md %})\<`void`, `void`\>

Adds an event listener for when a line feed is added.

#### Source

[xterm.d.ts:925](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L925)

***

### onRender

> **onRender**: [`IEvent`]({% link _docs/api/terminal/interfaces/ievent.md %})\<`object`, `void`\>

Adds an event listener for when rows are rendered. The event value
contains the start row and end rows of the rendered area (ranges from `0`
to `Terminal.rows - 1`).

#### Type declaration

##### end

> **end**: `number`

##### start

> **start**: `number`

#### Source

[xterm.d.ts:933](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L933)

***

### onResize

> **onResize**: [`IEvent`]({% link _docs/api/terminal/interfaces/ievent.md %})\<`object`, `void`\>

Adds an event listener for when the terminal is resized. The event value
contains the new size.

#### Type declaration

##### cols

> **cols**: `number`

##### rows

> **rows**: `number`

#### Source

[xterm.d.ts:951](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L951)

***

### onScroll

> **onScroll**: [`IEvent`]({% link _docs/api/terminal/interfaces/ievent.md %})\<`number`, `void`\>

Adds an event listener for when a scroll occurs. The event value is the
new position of the viewport.

#### Source

[xterm.d.ts:958](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L958)

***

### onSelectionChange

> **onSelectionChange**: [`IEvent`]({% link _docs/api/terminal/interfaces/ievent.md %})\<`void`, `void`\>

Adds an event listener for when a selection change occurs.

#### Source

[xterm.d.ts:964](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L964)

***

### onTitleChange

> **onTitleChange**: [`IEvent`]({% link _docs/api/terminal/interfaces/ievent.md %})\<`string`, `void`\>

Adds an event listener for when an OSC 0 or OSC 2 title change occurs.
The event value is the new title.

#### Source

[xterm.d.ts:971](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L971)

***

### onWriteParsed

> **onWriteParsed**: [`IEvent`]({% link _docs/api/terminal/interfaces/ievent.md %})\<`void`, `void`\>

Adds an event listener for when data has been parsed by the terminal,
after [write]({% link _docs/api/terminal/classes/terminal.md %}#write) is called. This event is useful to listen for any
changes in the buffer.

This fires at most once per frame, after data parsing completes. Note
that this can fire when there are still writes pending if there is a lot
of data.

#### Source

[xterm.d.ts:944](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L944)

***

### options

> **options**: [`ITerminalOptions`]({% link _docs/api/terminal/interfaces/iterminaloptions.md %})

Gets or sets the terminal options. This supports setting multiple
options.

#### Example

```ts
console.log(terminal.options.fontSize);
```

#### Example

```ts
terminal.options.fontSize = 12;
```
Note that for options that are object, a new object must be used in order
to take effect as a reference comparison will be done:
```ts
const newValue = terminal.options.theme;
newValue.background = '#000000';

// This won't work
terminal.options.theme = newValue;

// This will work
terminal.options.theme = { ...newValue };
```

#### Example

```ts
terminal.options = {
  fontSize: 12,
  fontFamily: 'Courier New'
};
```

#### Source

[xterm.d.ts:867](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L867)

***

### parser

> **`readonly`** **parser**: [`IParser`]({% link _docs/api/terminal/interfaces/iparser.md %})

Get the parser interface to register custom escape sequence handlers.

#### Source

[xterm.d.ts:820](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L820)

***

### rows

> **`readonly`** **rows**: `number`

The number of rows in the terminal's viewport. Use
`ITerminalOptions.rows` to set this in the constructor and
`Terminal.resize` for when the terminal exists.

#### Source

[xterm.d.ts:797](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L797)

***

### textarea

> **`readonly`** **textarea**: `HTMLTextAreaElement`

The textarea that accepts input for the terminal.

#### Source

[xterm.d.ts:790](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L790)

***

### unicode

> **`readonly`** **unicode**: [`IUnicodeHandling`]({% link _docs/api/terminal/interfaces/iunicodehandling.md %})

(EXPERIMENTAL) Get the Unicode handling interface
to register and switch Unicode version.

#### Source

[xterm.d.ts:826](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L826)

***

### strings

> **`static`** **strings**: [`ILocalizableStrings`]({% link _docs/api/terminal/interfaces/ilocalizablestrings.md %})

Natural language strings that can be localized.

#### Source

[xterm.d.ts:872](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L872)

## Methods

### attachCustomKeyEventHandler()

> **attachCustomKeyEventHandler**(`customKeyEventHandler`): `void`

Attaches a custom key event handler which is run before keys are
processed, giving consumers of xterm.js ultimate control as to what keys
should be processed by the terminal and what keys should not.

#### Parameters

• **customKeyEventHandler**

The custom KeyboardEvent handler to attach.
This is a function that takes a KeyboardEvent, allowing consumers to stop
propagation and/or prevent the default action. The function returns
whether the event should be processed by xterm.js.

#### Returns

`void`

#### Example

```ts
const keymap = [
  { "key": "Backspace", "shiftKey": false, "mapCode": 8 },
  { "key": "Backspace", "shiftKey": true, "mapCode": 127 }
];
term.attachCustomKeyEventHandler(ev => {
  if (ev.type === 'keydown') {
    for (let i in keymap) {
      if (keymap[i].key == ev.key && keymap[i].shiftKey == ev.shiftKey) {
        socket.send(String.fromCharCode(keymap[i].mapCode));
        return false;
      }
    }
  }
});
```

#### Source

[xterm.d.ts:1040](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1040)

***

### attachCustomWheelEventHandler()

> **attachCustomWheelEventHandler**(`customWheelEventHandler`): `void`

Attaches a custom wheel event handler which is run before keys are
processed, giving consumers of xterm.js control over whether to proceed
or cancel terminal wheel events.

#### Parameters

• **customWheelEventHandler**

The custom WheelEvent handler to attach.
This is a function that takes a WheelEvent, allowing consumers to stop
propagation and/or prevent the default action. The function returns
whether the event should be processed by xterm.js.

#### Returns

`void`

#### Example

being processed.
```ts
term.attachCustomWheelEventHandler(ev => {
  if (ev.ctrlKey) {
    return false;
  }
  return true;
});
```

#### Source

[xterm.d.ts:1062](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1062)

***

### blur()

> **blur**(): `void`

Unfocus the terminal.

#### Returns

`void`

#### Source

[xterm.d.ts:976](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L976)

***

### clear()

> **clear**(): `void`

Clear the entire buffer, making the prompt line the new first line.

#### Returns

`void`

#### Source

[xterm.d.ts:1206](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1206)

***

### clearSelection()

> **clearSelection**(): `void`

Clears the current terminal selection.

#### Returns

`void`

#### Source

[xterm.d.ts:1146](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1146)

***

### clearTextureAtlas()

> **clearTextureAtlas**(): `void`

Clears the texture atlas of the canvas renderer if it's active. Doing
this will force a redraw of all glyphs which can workaround issues
causing the texture to become corrupt, for example Chromium/Nvidia has an
issue where the texture gets messed up when resuming the OS from sleep.

#### Returns

`void`

#### Source

[xterm.d.ts:1249](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1249)

***

### deregisterCharacterJoiner()

> **deregisterCharacterJoiner**(`joinerId`): `void`

(EXPERIMENTAL) Deregisters the character joiner if one was registered.
NOTE: character joiners are only used by the canvas renderer.

#### Parameters

• **joinerId**: `number`

The character joiner's ID (returned after register)

#### Returns

`void`

#### Source

[xterm.d.ts:1108](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1108)

***

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Implementation of

[`IDisposable`]({% link _docs/api/terminal/interfaces/idisposable.md %}).[`dispose`]({% link _docs/api/terminal/interfaces/idisposable.md %}#dispose)

#### Source

[xterm.d.ts:1173](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1173)

***

### focus()

> **focus**(): `void`

Focus the terminal.

#### Returns

`void`

#### Source

[xterm.d.ts:981](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L981)

***

### getSelection()

> **getSelection**(): `string`

Gets the terminal's current selection, this is useful for implementing
copy behavior outside of xterm.js.

#### Returns

`string`

#### Source

[xterm.d.ts:1136](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1136)

***

### getSelectionPosition()

> **getSelectionPosition**(): [`IBufferRange`]({% link _docs/api/terminal/interfaces/ibufferrange.md %})

Gets the selection position or undefined if there is no selection.

#### Returns

[`IBufferRange`]({% link _docs/api/terminal/interfaces/ibufferrange.md %})

#### Source

[xterm.d.ts:1141](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1141)

***

### hasSelection()

> **hasSelection**(): `boolean`

Gets whether the terminal has an active selection.

#### Returns

`boolean`

#### Source

[xterm.d.ts:1130](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1130)

***

### input()

> **input**(`data`, `wasUserInput`?): `void`

Input data to application side. The data is treated the same way input
typed into the terminal would (ie. the [onData]({% link _docs/api/terminal/classes/terminal.md %}#ondata) event will fire).

#### Parameters

• **data**: `string`

The data to forward to the application.

• **wasUserInput?**: `boolean`

Whether the input is genuine user input. This is true
by default and triggers additionalbehavior like focus or selection
clearing. Set this to false if the data sent should not be treated like
user input would, for example passing an escape sequence to the
application.

#### Returns

`void`

#### Source

[xterm.d.ts:993](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L993)

***

### loadAddon()

> **loadAddon**(`addon`): `void`

Loads an addon into this instance of xterm.js.

#### Parameters

• **addon**: [`ITerminalAddon`]({% link _docs/api/terminal/interfaces/iterminaladdon.md %})

The addon to load.

#### Returns

`void`

#### Source

[xterm.d.ts:1260](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1260)

***

### open()

> **open**(`parent`): `void`

Opens the terminal within an element. This should also be called if the
xterm.js element ever changes browser window.

#### Parameters

• **parent**: `HTMLElement`

The element to create the terminal within. This element
must be visible (have dimensions) when `open` is called as several DOM-
based measurements need to be performed when this function is called.

#### Returns

`void`

#### Source

[xterm.d.ts:1011](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1011)

***

### paste()

> **paste**(`data`): `void`

Writes text to the terminal, performing the necessary transformations for
pasted text.

#### Parameters

• **data**: `string`

The text to write to the terminal.

#### Returns

`void`

#### Source

[xterm.d.ts:1233](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1233)

***

### refresh()

> **refresh**(`start`, `end`): `void`

Tells the renderer to refresh terminal content between two rows
(inclusive) at the next opportunity.

#### Parameters

• **start**: `number`

The row to start from (between 0 and this.rows - 1).

• **end**: `number`

The row to end at (between start and this.rows - 1).

#### Returns

`void`

#### Source

[xterm.d.ts:1241](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1241)

***

### registerCharacterJoiner()

> **registerCharacterJoiner**(`handler`): `number`

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

#### Parameters

• **handler**

The function that determines character joins. It is called
with a string of text that is eligible for joining and returns an array
where each entry is an array containing the start (inclusive) and end
(exclusive) indexes of ranges that should be rendered as a single unit.

#### Returns

`number`

The ID of the new joiner, this can be used to deregister

#### Source

[xterm.d.ts:1101](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1101)

***

### registerDecoration()

> **registerDecoration**(`decorationOptions`): [`IDecoration`]({% link _docs/api/terminal/interfaces/idecoration.md %})

(EXPERIMENTAL) Adds a decoration to the terminal using

#### Parameters

• **decorationOptions**: [`IDecorationOptions`]({% link _docs/api/terminal/interfaces/idecorationoptions.md %})

#### Returns

[`IDecoration`]({% link _docs/api/terminal/interfaces/idecoration.md %})

#### Throws

when options include a negative x offset.

#### Source

[xterm.d.ts:1125](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1125)

***

### registerLinkProvider()

> **registerLinkProvider**(`linkProvider`): [`IDisposable`]({% link _docs/api/terminal/interfaces/idisposable.md %})

Registers a link provider, allowing a custom parser to be used to match
and handle links. Multiple link providers can be used, they will be asked
in the order in which they are registered.

#### Parameters

• **linkProvider**: [`ILinkProvider`]({% link _docs/api/terminal/interfaces/ilinkprovider.md %})

The link provider to use to detect links.

#### Returns

[`IDisposable`]({% link _docs/api/terminal/interfaces/idisposable.md %})

#### Source

[xterm.d.ts:1070](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1070)

***

### registerMarker()

> **registerMarker**(`cursorYOffset`?): [`IMarker`]({% link _docs/api/terminal/interfaces/imarker.md %})

Adds a marker to the normal buffer and returns it.

#### Parameters

• **cursorYOffset?**: `number`

The y position offset of the marker from the cursor.

#### Returns

[`IMarker`]({% link _docs/api/terminal/interfaces/imarker.md %})

The new marker or undefined.

#### Source

[xterm.d.ts:1115](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1115)

***

### reset()

> **reset**(): `void`

Perform a full reset (RIS, aka '\x1bc').

#### Returns

`void`

#### Source

[xterm.d.ts:1254](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1254)

***

### resize()

> **resize**(`columns`, `rows`): `void`

Resizes the terminal. It's best practice to debounce calls to resize,
this will help ensure that the pty can respond to the resize event
before another one occurs.

#### Parameters

• **columns**: `number`

• **rows**: `number`

#### Returns

`void`

#### Source

[xterm.d.ts:1002](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1002)

***

### scrollLines()

> **scrollLines**(`amount`): `void`

Scroll the display of the terminal

#### Parameters

• **amount**: `number`

The number of lines to scroll down (negative scroll up).

#### Returns

`void`

#### Source

[xterm.d.ts:1179](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1179)

***

### scrollPages()

> **scrollPages**(`pageCount`): `void`

Scroll the display of the terminal by a number of pages.

#### Parameters

• **pageCount**: `number`

The number of pages to scroll (negative scrolls up).

#### Returns

`void`

#### Source

[xterm.d.ts:1185](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1185)

***

### scrollToBottom()

> **scrollToBottom**(): `void`

Scrolls the display of the terminal to the bottom.

#### Returns

`void`

#### Source

[xterm.d.ts:1195](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1195)

***

### scrollToLine()

> **scrollToLine**(`line`): `void`

Scrolls to a line within the buffer.

#### Parameters

• **line**: `number`

The 0-based line index to scroll to.

#### Returns

`void`

#### Source

[xterm.d.ts:1201](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1201)

***

### scrollToTop()

> **scrollToTop**(): `void`

Scrolls the display of the terminal to the top.

#### Returns

`void`

#### Source

[xterm.d.ts:1190](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1190)

***

### select()

> **select**(`column`, `row`, `length`): `void`

Selects text within the terminal.

#### Parameters

• **column**: `number`

The column the selection starts at.

• **row**: `number`

The row the selection starts at.

• **length**: `number`

The length of the selection.

#### Returns

`void`

#### Source

[xterm.d.ts:1154](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1154)

***

### selectAll()

> **selectAll**(): `void`

Selects all text within the terminal.

#### Returns

`void`

#### Source

[xterm.d.ts:1159](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1159)

***

### selectLines()

> **selectLines**(`start`, `end`): `void`

Selects text in the buffer between 2 lines.

#### Parameters

• **start**: `number`

The 0-based line index to select from (inclusive).

• **end**: `number`

The 0-based line index to select to (inclusive).

#### Returns

`void`

#### Source

[xterm.d.ts:1166](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1166)

***

### write()

> **write**(`data`, `callback`?): `void`

Write data to the terminal.

#### Parameters

• **data**: `string` \| `Uint8Array`

The data to write to the terminal. This can either be raw
bytes given as Uint8Array from the pty or a string. Raw bytes will always
be treated as UTF-8 encoded, string data as UTF-16.

• **callback?**

Optional callback that fires when the data was processed
by the parser.

#### Returns

`void`

#### Source

[xterm.d.ts:1216](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1216)

***

### writeln()

> **writeln**(`data`, `callback`?): `void`

Writes data to the terminal, followed by a break line character (\n).

#### Parameters

• **data**: `string` \| `Uint8Array`

The data to write to the terminal. This can either be raw
bytes given as Uint8Array from the pty or a string. Raw bytes will always
be treated as UTF-8 encoded, string data as UTF-16.

• **callback?**

Optional callback that fires when the data was processed
by the parser.

#### Returns

`void`

#### Source

[xterm.d.ts:1226](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1226)
