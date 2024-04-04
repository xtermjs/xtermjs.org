---
category: API-interfaces
layout: docs
---


***

[@xterm/xterm]({% link _docs/api/terminal/readme.md %}) / ITerminalOptions

# Interface: ITerminalOptions

An object containing options for the terminal.

## Properties

### allowProposedApi?

> **`optional`** **allowProposedApi**: `boolean`

Whether to allow the use of proposed API. When false, any usage of APIs
marked as experimental/proposed will throw an error. The default is
false.

#### Source

[xterm.d.ts:32](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L32)

***

### allowTransparency?

> **`optional`** **allowTransparency**: `boolean`

Whether background should support non-opaque color. It must be set before
executing the `Terminal.open()` method and can't be changed later without
executing it again. Note that enabling this can negatively impact
performance.

#### Source

[xterm.d.ts:40](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L40)

***

### altClickMovesCursor?

> **`optional`** **altClickMovesCursor**: `boolean`

If enabled, alt + click will move the prompt cursor to position
underneath the mouse. The default is true.

#### Source

[xterm.d.ts:46](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L46)

***

### convertEol?

> **`optional`** **convertEol**: `boolean`

When enabled the cursor will be set to the beginning of the next line
with every new line. This is equivalent to sending '\r\n' for each '\n'.
Normally the termios settings of the underlying PTY deals with the
translation of '\n' to '\r\n' and this setting should not be used. If you
deal with data from a non-PTY related source, this settings might be
useful.

#### Source

[xterm.d.ts:56](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L56)

***

### cursorBlink?

> **`optional`** **cursorBlink**: `boolean`

Whether the cursor blinks.

#### Source

[xterm.d.ts:61](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L61)

***

### cursorInactiveStyle?

> **`optional`** **cursorInactiveStyle**: `"block"` \| `"underline"` \| `"bar"` \| `"outline"` \| `"none"`

The style of the cursor when the terminal is not focused.

#### Source

[xterm.d.ts:76](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L76)

***

### cursorStyle?

> **`optional`** **cursorStyle**: `"block"` \| `"underline"` \| `"bar"`

The style of the cursor when the terminal is focused.

#### Source

[xterm.d.ts:66](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L66)

***

### cursorWidth?

> **`optional`** **cursorWidth**: `number`

The width of the cursor in CSS pixels when `cursorStyle` is set to 'bar'.

#### Source

[xterm.d.ts:71](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L71)

***

### customGlyphs?

> **`optional`** **customGlyphs**: `boolean`

Whether to draw custom glyphs for block element and box drawing
characters instead of using the font. This should typically result in
better rendering with continuous lines, even when line height and letter
spacing is used. Note that this doesn't work with the DOM renderer which
renders all characters using the font. The default is true.

#### Source

[xterm.d.ts:85](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L85)

***

### disableStdin?

> **`optional`** **disableStdin**: `boolean`

Whether input should be disabled.

#### Source

[xterm.d.ts:90](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L90)

***

### documentOverride?

> **`optional`** **documentOverride**: `any`

A Document to use instead of the one that xterm.js was attached
to. The purpose of this is to improve support in multi-window
applications where HTML elements may be references across multiple
windows which can cause problems with `instanceof`.

The type is `any` because using `Document` can cause TS to have
performance/compiler problems.

#### Source

[xterm.d.ts:101](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L101)

***

### drawBoldTextInBrightColors?

> **`optional`** **drawBoldTextInBrightColors**: `boolean`

Whether to draw bold text in bright colors. The default is true.

#### Source

[xterm.d.ts:106](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L106)

***

### fastScrollModifier?

> **`optional`** **fastScrollModifier**: `"none"` \| `"alt"` \| `"ctrl"` \| `"shift"`

The modifier key hold to multiply scroll speed.

#### Source

[xterm.d.ts:111](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L111)

***

### fastScrollSensitivity?

> **`optional`** **fastScrollSensitivity**: `number`

The scroll speed multiplier used for fast scrolling.

#### Source

[xterm.d.ts:116](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L116)

***

### fontFamily?

> **`optional`** **fontFamily**: `string`

The font family used to render text.

#### Source

[xterm.d.ts:126](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L126)

***

### fontSize?

> **`optional`** **fontSize**: `number`

The font size used to render text.

#### Source

[xterm.d.ts:121](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L121)

***

### fontWeight?

> **`optional`** **fontWeight**: [`FontWeight`]({% link _docs/api/terminal/type-aliases/fontweight.md %})

The font weight used to render non-bold text.

#### Source

[xterm.d.ts:131](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L131)

***

### fontWeightBold?

> **`optional`** **fontWeightBold**: [`FontWeight`]({% link _docs/api/terminal/type-aliases/fontweight.md %})

The font weight used to render bold text.

#### Source

[xterm.d.ts:136](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L136)

***

### ignoreBracketedPasteMode?

> **`optional`** **ignoreBracketedPasteMode**: `boolean`

Whether to ignore the bracketed paste mode. When true, this will always
paste without the `\x1b[200~` and `\x1b[201~` sequences, even when the
shell enables bracketed mode.

#### Source

[xterm.d.ts:143](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L143)

***

### letterSpacing?

> **`optional`** **letterSpacing**: `number`

The spacing in whole pixels between characters.

#### Source

[xterm.d.ts:148](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L148)

***

### lineHeight?

> **`optional`** **lineHeight**: `number`

The line height used to render text.

#### Source

[xterm.d.ts:153](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L153)

***

### linkHandler?

> **`optional`** **linkHandler**: [`ILinkHandler`]({% link _docs/api/terminal/interfaces/ilinkhandler.md %})

The handler for OSC 8 hyperlinks. Links will use the `confirm` browser
API with a strongly worded warning if no link handler is set.

When setting this, consider the security of users opening these links,
at a minimum there should be a tooltip or a prompt when hovering or
activating the link respectively. An example of what might be possible is
a terminal app writing link in the form `javascript:...` that runs some
javascript, a safe approach to prevent that is to validate the link
starts with http(s)://.

#### Source

[xterm.d.ts:166](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L166)

***

### logLevel?

> **`optional`** **logLevel**: [`LogLevel`]({% link _docs/api/terminal/type-aliases/loglevel.md %})

What log level to use, this will log for all levels below and including
what is set:

1. trace
2. debug
3. info (default)
4. warn
5. error
6. off

#### Source

[xterm.d.ts:179](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L179)

***

### logger?

> **`optional`** **logger**: [`ILogger`]({% link _docs/api/terminal/interfaces/ilogger.md %})

A logger to use instead of `console`.

#### Source

[xterm.d.ts:184](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L184)

***

### macOptionClickForcesSelection?

> **`optional`** **macOptionClickForcesSelection**: `boolean`

Whether holding a modifier key will force normal selection behavior,
regardless of whether the terminal is in mouse events mode. This will
also prevent mouse events from being emitted by the terminal. For
example, this allows you to use xterm.js' regular selection inside tmux
with mouse mode enabled.

#### Source

[xterm.d.ts:198](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L198)

***

### macOptionIsMeta?

> **`optional`** **macOptionIsMeta**: `boolean`

Whether to treat option as the meta key.

#### Source

[xterm.d.ts:189](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L189)

***

### minimumContrastRatio?

> **`optional`** **minimumContrastRatio**: `number`

The minimum contrast ratio for text in the terminal, setting this will
change the foreground color dynamically depending on whether the contrast
ratio is met. Example values:

- 1: The default, do nothing.
- 4.5: Minimum for WCAG AA compliance.
- 7: Minimum for WCAG AAA compliance.
- 21: White on black or black on white.

#### Source

[xterm.d.ts:210](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L210)

***

### overviewRulerWidth?

> **`optional`** **overviewRulerWidth**: `number`

The width, in pixels, of the canvas for the overview ruler. The overview
ruler will be hidden when not set.

#### Source

[xterm.d.ts:312](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L312)

***

### rightClickSelectsWord?

> **`optional`** **rightClickSelectsWord**: `boolean`

Whether to select the word under the cursor on right click, this is
standard behavior in a lot of macOS applications.

#### Source

[xterm.d.ts:216](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L216)

***

### screenReaderMode?

> **`optional`** **screenReaderMode**: `boolean`

Whether screen reader support is enabled. When on this will expose
supporting elements in the DOM to support NVDA on Windows and VoiceOver
on macOS.

#### Source

[xterm.d.ts:223](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L223)

***

### scrollOnUserInput?

> **`optional`** **scrollOnUserInput**: `boolean`

Whether to scroll to the bottom whenever there is some user input. The
default is true.

#### Source

[xterm.d.ts:236](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L236)

***

### scrollSensitivity?

> **`optional`** **scrollSensitivity**: `number`

The scrolling speed multiplier used for adjusting normal scrolling speed.

#### Source

[xterm.d.ts:241](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L241)

***

### scrollback?

> **`optional`** **scrollback**: `number`

The amount of scrollback in the terminal. Scrollback is the amount of
rows that are retained when lines are scrolled beyond the initial
viewport.

#### Source

[xterm.d.ts:230](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L230)

***

### smoothScrollDuration?

> **`optional`** **smoothScrollDuration**: `number`

The duration to smoothly scroll between the origin and the target in
milliseconds. Set to 0 to disable smooth scrolling and scroll instantly.

#### Source

[xterm.d.ts:247](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L247)

***

### tabStopWidth?

> **`optional`** **tabStopWidth**: `number`

The size of tab stops in the terminal.

#### Source

[xterm.d.ts:252](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L252)

***

### theme?

> **`optional`** **theme**: [`ITheme`]({% link _docs/api/terminal/interfaces/itheme.md %})

The color theme of the terminal.

#### Source

[xterm.d.ts:257](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L257)

***

### windowOptions?

> **`optional`** **windowOptions**: [`IWindowOptions`]({% link _docs/api/terminal/interfaces/iwindowoptions.md %})

Enable various window manipulation and report features.
All features are disabled by default for security reasons.

#### Source

[xterm.d.ts:306](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L306)

***

### ~~windowsMode?~~

> **`optional`** **windowsMode**: `boolean`

Whether "Windows mode" is enabled. Because Windows backends winpty and
conpty operate by doing line wrapping on their side, xterm.js does not
have access to wrapped lines. When Windows mode is enabled the following
changes will be in effect:

- Reflow is disabled.
- Lines are assumed to be wrapped if the last character of the line is
  not whitespace.

When using conpty on Windows 11 version >= 21376, it is recommended to
disable this because native text wrapping sequences are output correctly
thanks to https://github.com/microsoft/terminal/issues/405

#### Deprecated

Use [windowsPty]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#windowspty). This value will be ignored if
windowsPty is set.

#### Source

[xterm.d.ts:276](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L276)

***

### windowsPty?

> **`optional`** **windowsPty**: [`IWindowsPty`]({% link _docs/api/terminal/interfaces/iwindowspty.md %})

Compatibility information when the pty is known to be hosted on Windows.
Setting this will turn on certain heuristics/workarounds depending on the
values:

- `if (backend !== undefined || buildNumber !== undefined)`
  - When increasing the rows in the terminal, the amount increased into
    the scrollback. This is done because ConPTY does not behave like
    expect scrollback to come back into the viewport, instead it makes
    empty rows at of the viewport. Not having this behavior can result in
    missing data as the rows get replaced.
- `if !(backend === 'conpty' && buildNumber >= 21376)`
  - Reflow is disabled
  - Lines are assumed to be wrapped if the last character of the line is
    not whitespace.

#### Source

[xterm.d.ts:294](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L294)

***

### wordSeparator?

> **`optional`** **wordSeparator**: `string`

A string containing all characters that are considered word separated by
the double click to select work logic.

#### Source

[xterm.d.ts:300](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L300)
