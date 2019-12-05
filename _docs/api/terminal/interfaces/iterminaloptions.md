---
title: ITerminalOptions
category: API-interfaces
layout: docs
---


# Interface: ITerminalOptions

An object containing start up options for the terminal.

## Hierarchy

**ITerminalOptions**

## Index

### Properties

* [allowTransparency]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#allowtransparency)
* [bellSound]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#bellsound)
* [bellStyle]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#bellstyle)
* [cols]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#cols)
* [convertEol]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#converteol)
* [cursorBlink]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#cursorblink)
* [cursorStyle]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#cursorstyle)
* [disableStdin]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#disablestdin)
* [drawBoldTextInBrightColors]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#drawboldtextinbrightcolors)
* [fastScrollModifier]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#fastscrollmodifier)
* [fastScrollSensitivity]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#fastscrollsensitivity)
* [fontFamily]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#fontfamily)
* [fontSize]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#fontsize)
* [fontWeight]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#fontweight)
* [fontWeightBold]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#fontweightbold)
* [letterSpacing]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#letterspacing)
* [lineHeight]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#lineheight)
* [logLevel]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#loglevel)
* [macOptionClickForcesSelection]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#macoptionclickforcesselection)
* [macOptionIsMeta]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#macoptionismeta)
* [minimumContrastRatio]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#minimumcontrastratio)
* [rendererType]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#renderertype)
* [rightClickSelectsWord]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#rightclickselectsword)
* [rows]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#rows)
* [screenReaderMode]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#screenreadermode)
* [scrollSensitivity]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#scrollsensitivity)
* [scrollback]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#scrollback)
* [tabStopWidth]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#tabstopwidth)
* [theme]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#theme)
* [windowsMode]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#windowsmode)
* [wordSeparator]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#wordseparator)

---

## Properties

<a id="allowtransparency"></a>

### `<Optional>` allowTransparency

**● allowTransparency**: *`boolean`*

*Defined in [xterm.d.ts:38](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L38)*

Whether background should support non-opaque color. It must be set before executing the `Terminal.open()` method and can't be changed later without executing it again. Note that enabling this can negatively impact performance.

___
<a id="bellsound"></a>

### `<Optional>` bellSound

**● bellSound**: *`string`*

*Defined in [xterm.d.ts:43](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L43)*

A data uri of the sound to use for the bell when `bellStyle = 'sound'`.

___
<a id="bellstyle"></a>

### `<Optional>` bellStyle

**● bellStyle**: *"none" \| "sound"*

*Defined in [xterm.d.ts:48](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L48)*

The type of the bell notification the terminal will use.

___
<a id="cols"></a>

### `<Optional>` cols

**● cols**: *`number`*

*Defined in [xterm.d.ts:63](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L63)*

The number of columns in the terminal.

___
<a id="converteol"></a>

### `<Optional>` convertEol

**● convertEol**: *`boolean`*

*Defined in [xterm.d.ts:58](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L58)*

When enabled the cursor will be set to the beginning of the next line with every new line. This is equivalent to sending '\\r\\n' for each '\\n'. Normally the termios settings of the underlying PTY deals with the translation of '\\n' to '\\r\\n' and this setting should not be used. If you deal with data from a non-PTY related source, this settings might be useful.

___
<a id="cursorblink"></a>

### `<Optional>` cursorBlink

**● cursorBlink**: *`boolean`*

*Defined in [xterm.d.ts:68](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L68)*

Whether the cursor blinks.

___
<a id="cursorstyle"></a>

### `<Optional>` cursorStyle

**● cursorStyle**: *"block" \| "underline" \| "bar"*

*Defined in [xterm.d.ts:73](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L73)*

The style of the cursor.

___
<a id="disablestdin"></a>

### `<Optional>` disableStdin

**● disableStdin**: *`boolean`*

*Defined in [xterm.d.ts:78](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L78)*

Whether input should be disabled.

___
<a id="drawboldtextinbrightcolors"></a>

### `<Optional>` drawBoldTextInBrightColors

**● drawBoldTextInBrightColors**: *`boolean`*

*Defined in [xterm.d.ts:83](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L83)*

Whether to draw bold text in bright colors. The default is true.

___
<a id="fastscrollmodifier"></a>

### `<Optional>` fastScrollModifier

**● fastScrollModifier**: *"alt" \| "ctrl" \| "shift" \| `undefined`*

*Defined in [xterm.d.ts:88](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L88)*

The modifier key hold to multiply scroll speed.

___
<a id="fastscrollsensitivity"></a>

### `<Optional>` fastScrollSensitivity

**● fastScrollSensitivity**: *`number`*

*Defined in [xterm.d.ts:93](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L93)*

The scroll speed multiplier used for fast scrolling.

___
<a id="fontfamily"></a>

### `<Optional>` fontFamily

**● fontFamily**: *`string`*

*Defined in [xterm.d.ts:103](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L103)*

The font family used to render text.

___
<a id="fontsize"></a>

### `<Optional>` fontSize

**● fontSize**: *`number`*

*Defined in [xterm.d.ts:98](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L98)*

The font size used to render text.

___
<a id="fontweight"></a>

### `<Optional>` fontWeight

**● fontWeight**: *[FontWeight]({% link _docs/api/terminal/modules/xterm.md %}#fontweight)*

*Defined in [xterm.d.ts:108](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L108)*

The font weight used to render non-bold text.

___
<a id="fontweightbold"></a>

### `<Optional>` fontWeightBold

**● fontWeightBold**: *[FontWeight]({% link _docs/api/terminal/modules/xterm.md %}#fontweight)*

*Defined in [xterm.d.ts:113](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L113)*

The font weight used to render bold text.

___
<a id="letterspacing"></a>

### `<Optional>` letterSpacing

**● letterSpacing**: *`number`*

*Defined in [xterm.d.ts:118](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L118)*

The spacing in whole pixels between characters..

___
<a id="lineheight"></a>

### `<Optional>` lineHeight

**● lineHeight**: *`number`*

*Defined in [xterm.d.ts:123](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L123)*

The line height used to render text.

___
<a id="loglevel"></a>

### `<Optional>` logLevel

**● logLevel**: *[LogLevel]({% link _docs/api/terminal/modules/xterm.md %}#loglevel)*

*Defined in [xterm.d.ts:135](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L135)*

What log level to use, this will log for all levels below and including what is set:

1.  debug
2.  info (default)
3.  warn
4.  error
5.  off

___
<a id="macoptionclickforcesselection"></a>

### `<Optional>` macOptionClickForcesSelection

**● macOptionClickForcesSelection**: *`boolean`*

*Defined in [xterm.d.ts:149](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L149)*

Whether holding a modifier key will force normal selection behavior, regardless of whether the terminal is in mouse events mode. This will also prevent mouse events from being emitted by the terminal. For example, this allows you to use xterm.js' regular selection inside tmux with mouse mode enabled.

___
<a id="macoptionismeta"></a>

### `<Optional>` macOptionIsMeta

**● macOptionIsMeta**: *`boolean`*

*Defined in [xterm.d.ts:140](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L140)*

Whether to treat option as the meta key.

___
<a id="minimumcontrastratio"></a>

### `<Optional>` minimumContrastRatio

**● minimumContrastRatio**: *`number`*

*Defined in [xterm.d.ts:161](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L161)*

The minimum contrast ratio for text in the terminal, setting this will change the foreground color dynamically depending on whether the contrast ratio is met. Example values:

*   1: The default, do nothing.
*   4.5: Minimum for WCAG AA compliance.
*   7: Minimum for WCAG AAA compliance.
*   21: White on black or black on white.

___
<a id="renderertype"></a>

### `<Optional>` rendererType

**● rendererType**: *[RendererType]({% link _docs/api/terminal/modules/xterm.md %}#renderertype)*

*Defined in [xterm.d.ts:171](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L171)*

The type of renderer to use, this allows using the fallback DOM renderer when canvas is too slow for the environment. The following features do not work when the DOM renderer is used:

*   Letter spacing
*   Cursor blink

___
<a id="rightclickselectsword"></a>

### `<Optional>` rightClickSelectsWord

**● rightClickSelectsWord**: *`boolean`*

*Defined in [xterm.d.ts:177](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L177)*

Whether to select the word under the cursor on right click, this is standard behavior in a lot of macOS applications.

___
<a id="rows"></a>

### `<Optional>` rows

**● rows**: *`number`*

*Defined in [xterm.d.ts:182](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L182)*

The number of rows in the terminal.

___
<a id="screenreadermode"></a>

### `<Optional>` screenReaderMode

**● screenReaderMode**: *`boolean`*

*Defined in [xterm.d.ts:189](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L189)*

Whether screen reader support is enabled. When on this will expose supporting elements in the DOM to support NVDA on Windows and VoiceOver on macOS.

___
<a id="scrollsensitivity"></a>

### `<Optional>` scrollSensitivity

**● scrollSensitivity**: *`number`*

*Defined in [xterm.d.ts:201](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L201)*

The scrolling speed multiplier used for adjusting normal scrolling speed.

___
<a id="scrollback"></a>

### `<Optional>` scrollback

**● scrollback**: *`number`*

*Defined in [xterm.d.ts:196](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L196)*

The amount of scrollback in the terminal. Scrollback is the amount of rows that are retained when lines are scrolled beyond the initial viewport.

___
<a id="tabstopwidth"></a>

### `<Optional>` tabStopWidth

**● tabStopWidth**: *`number`*

*Defined in [xterm.d.ts:206](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L206)*

The size of tab stops in the terminal.

___
<a id="theme"></a>

### `<Optional>` theme

**● theme**: *[ITheme]({% link _docs/api/terminal/interfaces/itheme.md %})*

*Defined in [xterm.d.ts:211](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L211)*

The color theme of the terminal.

___
<a id="windowsmode"></a>

### `<Optional>` windowsMode

**● windowsMode**: *`boolean`*

*Defined in [xterm.d.ts:223](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L223)*

Whether "Windows mode" is enabled. Because Windows backends winpty and conpty operate by doing line wrapping on their side, xterm.js does not have access to wrapped lines. When Windows mode is enabled the following changes will be in effect:

*   Reflow is disabled.
*   Lines are assumed to be wrapped if the last character of the line is not whitespace.

___
<a id="wordseparator"></a>

### `<Optional>` wordSeparator

**● wordSeparator**: *`string`*

*Defined in [xterm.d.ts:229](https://github.com/Tyriar/xterm.js/blob/4.3.0/typings/xterm.d.ts#L229)*

A string containing all characters that are considered word separated by the double click to select work logic.

___

