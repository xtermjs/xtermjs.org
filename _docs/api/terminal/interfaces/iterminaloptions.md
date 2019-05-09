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
* [enableBold]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#enablebold)
* [experimentalCharAtlas]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#experimentalcharatlas)
* [fontFamily]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#fontfamily)
* [fontSize]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#fontsize)
* [fontWeight]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#fontweight)
* [fontWeightBold]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#fontweightbold)
* [letterSpacing]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#letterspacing)
* [lineHeight]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#lineheight)
* [macOptionClickForcesSelection]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#macoptionclickforcesselection)
* [macOptionIsMeta]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#macoptionismeta)
* [rendererType]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#renderertype)
* [rightClickSelectsWord]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#rightclickselectsword)
* [rows]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#rows)
* [screenReaderMode]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#screenreadermode)
* [scrollback]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#scrollback)
* [tabStopWidth]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#tabstopwidth)
* [theme]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#theme)
* [windowsMode]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#windowsmode)

---

## Properties

<a id="allowtransparency"></a>

### `<Optional>` allowTransparency

**● allowTransparency**: *`boolean`*

*Defined in [xterm.d.ts:32](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L32)*

Whether background should support non-opaque color. It must be set before executing open() method and can't be changed later without excuting it again. Warning: Enabling this option can reduce performances somewhat.

___
<a id="bellsound"></a>

### `<Optional>` bellSound

**● bellSound**: *`string`*

*Defined in [xterm.d.ts:37](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L37)*

A data uri of the sound to use for the bell (needs bellStyle = 'sound').

___
<a id="bellstyle"></a>

### `<Optional>` bellStyle

**● bellStyle**: *"none" \| "sound"*

*Defined in [xterm.d.ts:42](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L42)*

The type of the bell notification the terminal will use.

___
<a id="cols"></a>

### `<Optional>` cols

**● cols**: *`number`*

*Defined in [xterm.d.ts:57](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L57)*

The number of columns in the terminal.

___
<a id="converteol"></a>

### `<Optional>` convertEol

**● convertEol**: *`boolean`*

*Defined in [xterm.d.ts:52](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L52)*

When enabled the cursor will be set to the beginning of the next line with every new line. This equivalent to sending '\\r\\n' for each '\\n'. Normally the termios settings of the underlying PTY deals with the translation of '\\n' to '\\r\\n' and this setting should not be used. If you deal with data from a non-PTY related source, this settings might be useful.

___
<a id="cursorblink"></a>

### `<Optional>` cursorBlink

**● cursorBlink**: *`boolean`*

*Defined in [xterm.d.ts:62](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L62)*

Whether the cursor blinks.

___
<a id="cursorstyle"></a>

### `<Optional>` cursorStyle

**● cursorStyle**: *"block" \| "underline" \| "bar"*

*Defined in [xterm.d.ts:67](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L67)*

The style of the cursor.

___
<a id="disablestdin"></a>

### `<Optional>` disableStdin

**● disableStdin**: *`boolean`*

*Defined in [xterm.d.ts:72](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L72)*

Whether input should be disabled.

___
<a id="drawboldtextinbrightcolors"></a>

### `<Optional>` drawBoldTextInBrightColors

**● drawBoldTextInBrightColors**: *`boolean`*

*Defined in [xterm.d.ts:77](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L77)*

Whether to draw bold text in bright colors. The default is true.

___
<a id="enablebold"></a>

### `<Optional>` enableBold

**● enableBold**: *`boolean`*

*Defined in [xterm.d.ts:84](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L84)*

Whether to enable the rendering of bold text.

*__deprecated__*:
 Use fontWeight and fontWeightBold instead.

___
<a id="experimentalcharatlas"></a>

### `<Optional>` experimentalCharAtlas

**● experimentalCharAtlas**: *"none" \| "static" \| "dynamic"*

*Defined in [xterm.d.ts:102](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L102)*

What character atlas implementation to use. The character atlas caches drawn characters, speeding up rendering significantly. However, it can introduce some minor rendering artifacts.

*   'none': Don't use an atlas.
*   'static': Generate an atlas when the terminal starts or is reconfigured. This atlas will only contain ASCII characters in 16 colors.
*   'dynamic': Generate an atlas using a LRU cache as characters are requested. Limited to ASCII characters (for now), but supports 256 colors. For characters covered by the static cache, it's slightly slower in comparison, since there's more overhead involved in managing the cache.

Currently defaults to 'static'. This option may be removed in the future. If it is, passed parameters will be ignored.

___
<a id="fontfamily"></a>

### `<Optional>` fontFamily

**● fontFamily**: *`string`*

*Defined in [xterm.d.ts:112](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L112)*

The font family used to render text.

___
<a id="fontsize"></a>

### `<Optional>` fontSize

**● fontSize**: *`number`*

*Defined in [xterm.d.ts:107](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L107)*

The font size used to render text.

___
<a id="fontweight"></a>

### `<Optional>` fontWeight

**● fontWeight**: *[FontWeight]({% link _docs/api/terminal/modules/xterm.md %}#fontweight)*

*Defined in [xterm.d.ts:117](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L117)*

The font weight used to render non-bold text.

___
<a id="fontweightbold"></a>

### `<Optional>` fontWeightBold

**● fontWeightBold**: *[FontWeight]({% link _docs/api/terminal/modules/xterm.md %}#fontweight)*

*Defined in [xterm.d.ts:122](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L122)*

The font weight used to render bold text.

___
<a id="letterspacing"></a>

### `<Optional>` letterSpacing

**● letterSpacing**: *`number`*

*Defined in [xterm.d.ts:127](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L127)*

The spacing in whole pixels between characters..

___
<a id="lineheight"></a>

### `<Optional>` lineHeight

**● lineHeight**: *`number`*

*Defined in [xterm.d.ts:132](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L132)*

The line height used to render text.

___
<a id="macoptionclickforcesselection"></a>

### `<Optional>` macOptionClickForcesSelection

**● macOptionClickForcesSelection**: *`boolean`*

*Defined in [xterm.d.ts:146](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L146)*

Whether holding a modifier key will force normal selection behavior, regardless of whether the terminal is in mouse events mode. This will also prevent mouse events from being emitted by the terminal. For example, this allows you to use xterm.js' regular selection inside tmux with mouse mode enabled.

___
<a id="macoptionismeta"></a>

### `<Optional>` macOptionIsMeta

**● macOptionIsMeta**: *`boolean`*

*Defined in [xterm.d.ts:137](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L137)*

Whether to treat option as the meta key.

___
<a id="renderertype"></a>

### `<Optional>` rendererType

**● rendererType**: *[RendererType]({% link _docs/api/terminal/modules/xterm.md %}#renderertype)*

*Defined in [xterm.d.ts:156](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L156)*

The type of renderer to use, this allows using the fallback DOM renderer when canvas is too slow for the environment. The following features do not work when the DOM renderer is used:

*   Letter spacing
*   Cursor blink

___
<a id="rightclickselectsword"></a>

### `<Optional>` rightClickSelectsWord

**● rightClickSelectsWord**: *`boolean`*

*Defined in [xterm.d.ts:162](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L162)*

Whether to select the word under the cursor on right click, this is standard behavior in a lot of macOS applications.

___
<a id="rows"></a>

### `<Optional>` rows

**● rows**: *`number`*

*Defined in [xterm.d.ts:167](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L167)*

The number of rows in the terminal.

___
<a id="screenreadermode"></a>

### `<Optional>` screenReaderMode

**● screenReaderMode**: *`boolean`*

*Defined in [xterm.d.ts:174](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L174)*

Whether screen reader support is enabled. When on this will expose supporting elements in the DOM to support NVDA on Windows and VoiceOver on macOS.

___
<a id="scrollback"></a>

### `<Optional>` scrollback

**● scrollback**: *`number`*

*Defined in [xterm.d.ts:180](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L180)*

The amount of scrollback in the terminal. Scrollback is the amount of rows that are retained when lines are scrolled beyond the initial viewport.

___
<a id="tabstopwidth"></a>

### `<Optional>` tabStopWidth

**● tabStopWidth**: *`number`*

*Defined in [xterm.d.ts:185](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L185)*

The size of tab stops in the terminal.

___
<a id="theme"></a>

### `<Optional>` theme

**● theme**: *[ITheme]({% link _docs/api/terminal/interfaces/itheme.md %})*

*Defined in [xterm.d.ts:190](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L190)*

The color theme of the terminal.

___
<a id="windowsmode"></a>

### `<Optional>` windowsMode

**● windowsMode**: *`boolean`*

*Defined in [xterm.d.ts:202](https://github.com/xtermjs/xterm.js/blob/3.13.0/typings/xterm.d.ts#L202)*

Whether "Windows mode" is enabled. Because Windows backends winpty and conpty operate by doing line wrapping on their side, xterm.js does not have access to wrapped lines. When Windows mode is enabled the following changes will be in effect:

*   Reflow is disabled.
*   Lines are assumed to be wrapped if the last character of the line is not whitespace.

___

