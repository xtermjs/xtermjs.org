---
title: ITerminalOptions
category: API-interfaces
layout: docs
---


# Interface: ITerminalOptions

An object containing options for the terminal.

## Hierarchy

* **ITerminalOptions**

## Index

### Properties

* [allowProposedApi]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-allowproposedapi)
* [allowTransparency]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-allowtransparency)
* [altClickMovesCursor]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-altclickmovescursor)
* [convertEol]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-converteol)
* [cursorBlink]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-cursorblink)
* [cursorInactiveStyle]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-cursorinactivestyle)
* [cursorStyle]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-cursorstyle)
* [cursorWidth]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-cursorwidth)
* [customGlyphs]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-customglyphs)
* [disableStdin]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-disablestdin)
* [documentOverride]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-documentoverride)
* [drawBoldTextInBrightColors]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-drawboldtextinbrightcolors)
* [fastScrollSensitivity]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-fastscrollsensitivity)
* [fontFamily]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-fontfamily)
* [fontSize]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-fontsize)
* [fontWeight]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-fontweight)
* [fontWeightBold]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-fontweightbold)
* [ignoreBracketedPasteMode]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-ignorebracketedpastemode)
* [letterSpacing]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-letterspacing)
* [lineHeight]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-lineheight)
* [linkHandler]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-linkhandler)
* [logLevel]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-loglevel)
* [logger]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-logger)
* [macOptionClickForcesSelection]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-macoptionclickforcesselection)
* [macOptionIsMeta]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-macoptionismeta)
* [minimumContrastRatio]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-minimumcontrastratio)
* [overviewRuler]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-overviewruler)
* [reflowCursorLine]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-reflowcursorline)
* [rescaleOverlappingGlyphs]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-rescaleoverlappingglyphs)
* [rightClickSelectsWord]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-rightclickselectsword)
* [screenReaderMode]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-screenreadermode)
* [scrollOnEraseInDisplay]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-scrolloneraseindisplay)
* [scrollOnUserInput]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-scrollonuserinput)
* [scrollSensitivity]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-scrollsensitivity)
* [scrollback]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-scrollback)
* [smoothScrollDuration]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-smoothscrollduration)
* [tabStopWidth]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-tabstopwidth)
* [theme]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-theme)
* [windowOptions]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-windowoptions)
* [windowsPty]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-windowspty)
* [wordSeparator]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-wordseparator)

## Properties

### `Optional` allowProposedApi

• **allowProposedApi**? : *boolean*

*Defined in [xterm.d.ts:32](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L32)*

Whether to allow the use of proposed API. When false, any usage of APIs
marked as experimental/proposed will throw an error. The default is
false.

___

### `Optional` allowTransparency

• **allowTransparency**? : *boolean*

*Defined in [xterm.d.ts:40](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L40)*

Whether background should support non-opaque color. It must be set before
executing the `Terminal.open()` method and can't be changed later without
executing it again. Note that enabling this can negatively impact
performance.

___

### `Optional` altClickMovesCursor

• **altClickMovesCursor**? : *boolean*

*Defined in [xterm.d.ts:46](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L46)*

If enabled, alt + click will move the prompt cursor to position
underneath the mouse. The default is true.

___

### `Optional` convertEol

• **convertEol**? : *boolean*

*Defined in [xterm.d.ts:58](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L58)*

When enabled the cursor will be set to the beginning of the next line
with every new line. This is equivalent to sending `\r\n` for each `\n`.
Normally the settings of the underlying PTY (`termios`) deal with the
translation of `\n` to `\r\n` and this setting should not be used. If you
deal with data from a non-PTY related source, this settings might be
useful.

**`see`** https://pubs.opengroup.org/onlinepubs/007904975/basedefs/termios.h.html

___

### `Optional` cursorBlink

• **cursorBlink**? : *boolean*

*Defined in [xterm.d.ts:63](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L63)*

Whether the cursor blinks.

___

### `Optional` cursorInactiveStyle

• **cursorInactiveStyle**? : *"outline" | "block" | "bar" | "underline" | "none"*

*Defined in [xterm.d.ts:78](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L78)*

The style of the cursor when the terminal is not focused.

___

### `Optional` cursorStyle

• **cursorStyle**? : *"block" | "underline" | "bar"*

*Defined in [xterm.d.ts:68](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L68)*

The style of the cursor when the terminal is focused.

___

### `Optional` cursorWidth

• **cursorWidth**? : *number*

*Defined in [xterm.d.ts:73](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L73)*

The width of the cursor in CSS pixels when `cursorStyle` is set to 'bar'.

___

### `Optional` customGlyphs

• **customGlyphs**? : *boolean*

*Defined in [xterm.d.ts:87](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L87)*

Whether to draw custom glyphs for block element and box drawing
characters instead of using the font. This should typically result in
better rendering with continuous lines, even when line height and letter
spacing is used. Note that this doesn't work with the DOM renderer which
renders all characters using the font. The default is true.

___

### `Optional` disableStdin

• **disableStdin**? : *boolean*

*Defined in [xterm.d.ts:92](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L92)*

Whether input should be disabled.

___

### `Optional` documentOverride

• **documentOverride**? : *any | null*

*Defined in [xterm.d.ts:103](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L103)*

A {@link Document} to use instead of the one that xterm.js was attached
to. The purpose of this is to improve support in multi-window
applications where HTML elements may be references across multiple
windows which can cause problems with `instanceof`.

The type is `any` because using `Document` can cause TS to have
performance/compiler problems.

___

### `Optional` drawBoldTextInBrightColors

• **drawBoldTextInBrightColors**? : *boolean*

*Defined in [xterm.d.ts:108](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L108)*

Whether to draw bold text in bright colors. The default is true.

___

### `Optional` fastScrollSensitivity

• **fastScrollSensitivity**? : *number*

*Defined in [xterm.d.ts:113](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L113)*

The scroll speed multiplier used for fast scrolling when `Alt` is held.

___

### `Optional` fontFamily

• **fontFamily**? : *string*

*Defined in [xterm.d.ts:123](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L123)*

The font family used to render text.

___

### `Optional` fontSize

• **fontSize**? : *number*

*Defined in [xterm.d.ts:118](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L118)*

The font size used to render text.

___

### `Optional` fontWeight

• **fontWeight**? : *[FontWeight]({% link _docs/api/terminal/modules/xterm.md %}#fontweight)*

*Defined in [xterm.d.ts:128](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L128)*

The font weight used to render non-bold text.

___

### `Optional` fontWeightBold

• **fontWeightBold**? : *[FontWeight]({% link _docs/api/terminal/modules/xterm.md %}#fontweight)*

*Defined in [xterm.d.ts:133](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L133)*

The font weight used to render bold text.

___

### `Optional` ignoreBracketedPasteMode

• **ignoreBracketedPasteMode**? : *boolean*

*Defined in [xterm.d.ts:140](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L140)*

Whether to ignore the bracketed paste mode. When true, this will always
paste without the `\x1b[200~` and `\x1b[201~` sequences, even when the
shell enables bracketed mode.

___

### `Optional` letterSpacing

• **letterSpacing**? : *number*

*Defined in [xterm.d.ts:145](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L145)*

The spacing in whole pixels between characters.

___

### `Optional` lineHeight

• **lineHeight**? : *number*

*Defined in [xterm.d.ts:150](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L150)*

The line height used to render text.

___

### `Optional` linkHandler

• **linkHandler**? : *[ILinkHandler]({% link _docs/api/terminal/interfaces/ilinkhandler.md %}) | null*

*Defined in [xterm.d.ts:163](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L163)*

The handler for OSC 8 hyperlinks. Links will use the `confirm` browser
API with a strongly worded warning if no link handler is set.

When setting this, consider the security of users opening these links,
at a minimum there should be a tooltip or a prompt when hovering or
activating the link respectively. An example of what might be possible is
a terminal app writing link in the form `javascript:...` that runs some
javascript, a safe approach to prevent that is to validate the link
starts with http(s)://.

___

### `Optional` logLevel

• **logLevel**? : *[LogLevel]({% link _docs/api/terminal/modules/xterm.md %}#loglevel)*

*Defined in [xterm.d.ts:176](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L176)*

What log level to use, this will log for all levels below and including
what is set:

1. trace
2. debug
3. info (default)
4. warn
5. error
6. off

___

### `Optional` logger

• **logger**? : *[ILogger]({% link _docs/api/terminal/interfaces/ilogger.md %}) | null*

*Defined in [xterm.d.ts:181](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L181)*

A logger to use instead of `console`.

___

### `Optional` macOptionClickForcesSelection

• **macOptionClickForcesSelection**? : *boolean*

*Defined in [xterm.d.ts:195](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L195)*

Whether holding a modifier key will force normal selection behavior,
regardless of whether the terminal is in mouse events mode. This will
also prevent mouse events from being emitted by the terminal. For
example, this allows you to use xterm.js' regular selection inside tmux
with mouse mode enabled.

___

### `Optional` macOptionIsMeta

• **macOptionIsMeta**? : *boolean*

*Defined in [xterm.d.ts:186](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L186)*

Whether to treat option as the meta key.

___

### `Optional` minimumContrastRatio

• **minimumContrastRatio**? : *number*

*Defined in [xterm.d.ts:207](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L207)*

The minimum contrast ratio for text in the terminal, setting this will
change the foreground color dynamically depending on whether the contrast
ratio is met. Example values:

- 1: The default, do nothing.
- 4.5: Minimum for WCAG AA compliance.
- 7: Minimum for WCAG AAA compliance.
- 21: White on black or black on white.

___

### `Optional` overviewRuler

• **overviewRuler**? : *[IOverviewRulerOptions]({% link _docs/api/terminal/interfaces/ioverviewruleroptions.md %})*

*Defined in [xterm.d.ts:321](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L321)*

Controls the visibility and style of the overview ruler which visualizes
decorations underneath the scroll bar.

___

### `Optional` reflowCursorLine

• **reflowCursorLine**? : *boolean*

*Defined in [xterm.d.ts:214](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L214)*

Whether to reflow the line containing the cursor when the terminal is
resized. Defaults to false, because shells usually handle this
themselves.

___

### `Optional` rescaleOverlappingGlyphs

• **rescaleOverlappingGlyphs**? : *boolean*

*Defined in [xterm.d.ts:231](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L231)*

Whether to rescale glyphs horizontally that are a single cell wide but
have glyphs that would overlap following cell(s). This typically happens
for ambiguous width characters (eg. the roman numeral characters U+2160+)
which aren't featured in monospace fonts. This is an important feature
for achieving GB18030 compliance.

The following glyphs will never be rescaled:

- Emoji glyphs
- Powerline glyphs
- Nerd font glyphs

Note that this doesn't work with the DOM renderer. The default is false.

___

### `Optional` rightClickSelectsWord

• **rightClickSelectsWord**? : *boolean*

*Defined in [xterm.d.ts:237](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L237)*

Whether to select the word under the cursor on right click, this is
standard behavior in a lot of macOS applications.

___

### `Optional` screenReaderMode

• **screenReaderMode**? : *boolean*

*Defined in [xterm.d.ts:244](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L244)*

Whether screen reader support is enabled. When on this will expose
supporting elements in the DOM to support NVDA on Windows and VoiceOver
on macOS.

___

### `Optional` scrollOnEraseInDisplay

• **scrollOnEraseInDisplay**? : *boolean*

*Defined in [xterm.d.ts:258](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L258)*

If enabled the Erase in Display All (ED2) escape sequence will push
erased text to scrollback, instead of clearing only the viewport portion.
This emulates PuTTY's default clear screen behavior.

___

### `Optional` scrollOnUserInput

• **scrollOnUserInput**? : *boolean*

*Defined in [xterm.d.ts:264](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L264)*

Whether to scroll to the bottom whenever there is some user input. The
default is true.

___

### `Optional` scrollSensitivity

• **scrollSensitivity**? : *number*

*Defined in [xterm.d.ts:269](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L269)*

The scrolling speed multiplier used for adjusting normal scrolling speed.

___

### `Optional` scrollback

• **scrollback**? : *number*

*Defined in [xterm.d.ts:251](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L251)*

The amount of scrollback in the terminal. Scrollback is the amount of
rows that are retained when lines are scrolled beyond the initial
viewport. Defaults to 1000.

___

### `Optional` smoothScrollDuration

• **smoothScrollDuration**? : *number*

*Defined in [xterm.d.ts:275](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L275)*

The duration to smoothly scroll between the origin and the target in
milliseconds. Set to 0 to disable smooth scrolling and scroll instantly.

___

### `Optional` tabStopWidth

• **tabStopWidth**? : *number*

*Defined in [xterm.d.ts:280](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L280)*

The size of tab stops in the terminal.

___

### `Optional` theme

• **theme**? : *[ITheme]({% link _docs/api/terminal/interfaces/itheme.md %})*

*Defined in [xterm.d.ts:285](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L285)*

The color theme of the terminal.

___

### `Optional` windowOptions

• **windowOptions**? : *[IWindowOptions]({% link _docs/api/terminal/interfaces/iwindowoptions.md %})*

*Defined in [xterm.d.ts:315](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L315)*

Enable various window manipulation and report features.
All features are disabled by default for security reasons.

___

### `Optional` windowsPty

• **windowsPty**? : *[IWindowsPty]({% link _docs/api/terminal/interfaces/iwindowspty.md %})*

*Defined in [xterm.d.ts:303](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L303)*

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

___

### `Optional` wordSeparator

• **wordSeparator**? : *string*

*Defined in [xterm.d.ts:309](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L309)*

A string containing all characters that are considered word separated by
the double click to select work logic.
