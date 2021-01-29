---
title: ITerminalOptions
category: API-interfaces
layout: docs
---


# Interface: ITerminalOptions

An object containing start up options for the terminal.

## Hierarchy

* **ITerminalOptions**

## Index

### Properties

* [allowProposedApi]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-allowproposedapi)
* [allowTransparency]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-allowtransparency)
* [altClickMovesCursor]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-altclickmovescursor)
* [bellSound]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-bellsound)
* [bellStyle]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-bellstyle)
* [cols]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-cols)
* [convertEol]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-converteol)
* [cursorBlink]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-cursorblink)
* [cursorStyle]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-cursorstyle)
* [cursorWidth]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-cursorwidth)
* [disableStdin]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-disablestdin)
* [drawBoldTextInBrightColors]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-drawboldtextinbrightcolors)
* [fastScrollModifier]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-fastscrollmodifier)
* [fastScrollSensitivity]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-fastscrollsensitivity)
* [fontFamily]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-fontfamily)
* [fontSize]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-fontsize)
* [fontWeight]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-fontweight)
* [fontWeightBold]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-fontweightbold)
* [letterSpacing]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-letterspacing)
* [lineHeight]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-lineheight)
* [linkTooltipHoverDuration]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-linktooltiphoverduration)
* [logLevel]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-loglevel)
* [macOptionClickForcesSelection]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-macoptionclickforcesselection)
* [macOptionIsMeta]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-macoptionismeta)
* [minimumContrastRatio]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-minimumcontrastratio)
* [rendererType]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-renderertype)
* [rightClickSelectsWord]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-rightclickselectsword)
* [rows]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-rows)
* [screenReaderMode]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-screenreadermode)
* [scrollSensitivity]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-scrollsensitivity)
* [scrollback]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-scrollback)
* [tabStopWidth]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-tabstopwidth)
* [theme]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-theme)
* [windowOptions]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-windowoptions)
* [windowsMode]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-windowsmode)
* [wordSeparator]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-wordseparator)

## Properties

### `Optional` allowProposedApi

• **allowProposedApi**? : *boolean*

*Defined in [xterm.d.ts:37](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L37)*

Whether to allow the use of proposed API. When false, any usage of APIs
marked as experimental/proposed will throw an error. This defaults to
true currently, but will change to false in v5.0.

___

### `Optional` allowTransparency

• **allowTransparency**? : *boolean*

*Defined in [xterm.d.ts:45](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L45)*

Whether background should support non-opaque color. It must be set before
executing the `Terminal.open()` method and can't be changed later without
executing it again. Note that enabling this can negatively impact
performance.

___

### `Optional` altClickMovesCursor

• **altClickMovesCursor**? : *boolean*

*Defined in [xterm.d.ts:51](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L51)*

If enabled, alt + click will move the prompt cursor to position
underneath the mouse. The default is true.

___

### `Optional` bellSound

• **bellSound**? : *string*

*Defined in [xterm.d.ts:56](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L56)*

A data uri of the sound to use for the bell when `bellStyle = 'sound'`.

___

### `Optional` bellStyle

• **bellStyle**? : *"none" | "sound"*

*Defined in [xterm.d.ts:61](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L61)*

The type of the bell notification the terminal will use.

___

### `Optional` cols

• **cols**? : *number*

*Defined in [xterm.d.ts:76](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L76)*

The number of columns in the terminal.

___

### `Optional` convertEol

• **convertEol**? : *boolean*

*Defined in [xterm.d.ts:71](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L71)*

When enabled the cursor will be set to the beginning of the next line
with every new line. This is equivalent to sending '\r\n' for each '\n'.
Normally the termios settings of the underlying PTY deals with the
translation of '\n' to '\r\n' and this setting should not be used. If you
deal with data from a non-PTY related source, this settings might be
useful.

___

### `Optional` cursorBlink

• **cursorBlink**? : *boolean*

*Defined in [xterm.d.ts:81](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L81)*

Whether the cursor blinks.

___

### `Optional` cursorStyle

• **cursorStyle**? : *"block" | "underline" | "bar"*

*Defined in [xterm.d.ts:86](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L86)*

The style of the cursor.

___

### `Optional` cursorWidth

• **cursorWidth**? : *number*

*Defined in [xterm.d.ts:91](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L91)*

The width of the cursor in CSS pixels when `cursorStyle` is set to 'bar'.

___

### `Optional` disableStdin

• **disableStdin**? : *boolean*

*Defined in [xterm.d.ts:96](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L96)*

Whether input should be disabled.

___

### `Optional` drawBoldTextInBrightColors

• **drawBoldTextInBrightColors**? : *boolean*

*Defined in [xterm.d.ts:101](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L101)*

Whether to draw bold text in bright colors. The default is true.

___

### `Optional` fastScrollModifier

• **fastScrollModifier**? : *"alt" | "ctrl" | "shift" | undefined*

*Defined in [xterm.d.ts:106](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L106)*

The modifier key hold to multiply scroll speed.

___

### `Optional` fastScrollSensitivity

• **fastScrollSensitivity**? : *number*

*Defined in [xterm.d.ts:111](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L111)*

The scroll speed multiplier used for fast scrolling.

___

### `Optional` fontFamily

• **fontFamily**? : *string*

*Defined in [xterm.d.ts:121](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L121)*

The font family used to render text.

___

### `Optional` fontSize

• **fontSize**? : *number*

*Defined in [xterm.d.ts:116](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L116)*

The font size used to render text.

___

### `Optional` fontWeight

• **fontWeight**? : *[FontWeight]({% link _docs/api/terminal/modules/xterm.md %}#fontweight)*

*Defined in [xterm.d.ts:126](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L126)*

The font weight used to render non-bold text.

___

### `Optional` fontWeightBold

• **fontWeightBold**? : *[FontWeight]({% link _docs/api/terminal/modules/xterm.md %}#fontweight)*

*Defined in [xterm.d.ts:131](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L131)*

The font weight used to render bold text.

___

### `Optional` letterSpacing

• **letterSpacing**? : *number*

*Defined in [xterm.d.ts:136](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L136)*

The spacing in whole pixels between characters.

___

### `Optional` lineHeight

• **lineHeight**? : *number*

*Defined in [xterm.d.ts:141](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L141)*

The line height used to render text.

___

### `Optional` linkTooltipHoverDuration

• **linkTooltipHoverDuration**? : *number*

*Defined in [xterm.d.ts:148](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L148)*

The duration in milliseconds before link tooltip events fire when
hovering on a link.

**`deprecated`** This will be removed when the link matcher API is removed.

___

### `Optional` logLevel

• **logLevel**? : *[LogLevel]({% link _docs/api/terminal/modules/xterm.md %}#loglevel)*

*Defined in [xterm.d.ts:160](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L160)*

What log level to use, this will log for all levels below and including
what is set:

1. debug
2. info (default)
3. warn
4. error
5. off

___

### `Optional` macOptionClickForcesSelection

• **macOptionClickForcesSelection**? : *boolean*

*Defined in [xterm.d.ts:174](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L174)*

Whether holding a modifier key will force normal selection behavior,
regardless of whether the terminal is in mouse events mode. This will
also prevent mouse events from being emitted by the terminal. For
example, this allows you to use xterm.js' regular selection inside tmux
with mouse mode enabled.

___

### `Optional` macOptionIsMeta

• **macOptionIsMeta**? : *boolean*

*Defined in [xterm.d.ts:165](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L165)*

Whether to treat option as the meta key.

___

### `Optional` minimumContrastRatio

• **minimumContrastRatio**? : *number*

*Defined in [xterm.d.ts:186](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L186)*

The minimum contrast ratio for text in the terminal, setting this will
change the foreground color dynamically depending on whether the contrast
ratio is met. Example values:

- 1: The default, do nothing.
- 4.5: Minimum for WCAG AA compliance.
- 7: Minimum for WCAG AAA compliance.
- 21: White on black or black on white.

___

### `Optional` rendererType

• **rendererType**? : *[RendererType]({% link _docs/api/terminal/modules/xterm.md %}#renderertype)*

*Defined in [xterm.d.ts:196](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L196)*

The type of renderer to use, this allows using the fallback DOM renderer
when canvas is too slow for the environment. The following features do
not work when the DOM renderer is used:

- Letter spacing
- Cursor blink

___

### `Optional` rightClickSelectsWord

• **rightClickSelectsWord**? : *boolean*

*Defined in [xterm.d.ts:202](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L202)*

Whether to select the word under the cursor on right click, this is
standard behavior in a lot of macOS applications.

___

### `Optional` rows

• **rows**? : *number*

*Defined in [xterm.d.ts:207](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L207)*

The number of rows in the terminal.

___

### `Optional` screenReaderMode

• **screenReaderMode**? : *boolean*

*Defined in [xterm.d.ts:214](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L214)*

Whether screen reader support is enabled. When on this will expose
supporting elements in the DOM to support NVDA on Windows and VoiceOver
on macOS.

___

### `Optional` scrollSensitivity

• **scrollSensitivity**? : *number*

*Defined in [xterm.d.ts:226](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L226)*

The scrolling speed multiplier used for adjusting normal scrolling speed.

___

### `Optional` scrollback

• **scrollback**? : *number*

*Defined in [xterm.d.ts:221](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L221)*

The amount of scrollback in the terminal. Scrollback is the amount of
rows that are retained when lines are scrolled beyond the initial
viewport.

___

### `Optional` tabStopWidth

• **tabStopWidth**? : *number*

*Defined in [xterm.d.ts:231](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L231)*

The size of tab stops in the terminal.

___

### `Optional` theme

• **theme**? : *[ITheme]({% link _docs/api/terminal/interfaces/itheme.md %})*

*Defined in [xterm.d.ts:236](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L236)*

The color theme of the terminal.

___

### `Optional` windowOptions

• **windowOptions**? : *[IWindowOptions]({% link _docs/api/terminal/interfaces/iwindowoptions.md %})*

*Defined in [xterm.d.ts:260](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L260)*

Enable various window manipulation and report features.
All features are disabled by default for security reasons.

___

### `Optional` windowsMode

• **windowsMode**? : *boolean*

*Defined in [xterm.d.ts:248](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L248)*

Whether "Windows mode" is enabled. Because Windows backends winpty and
conpty operate by doing line wrapping on their side, xterm.js does not
have access to wrapped lines. When Windows mode is enabled the following
changes will be in effect:

- Reflow is disabled.
- Lines are assumed to be wrapped if the last character of the line is
  not whitespace.

___

### `Optional` wordSeparator

• **wordSeparator**? : *string*

*Defined in [xterm.d.ts:254](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L254)*

A string containing all characters that are considered word separated by the
double click to select work logic.
