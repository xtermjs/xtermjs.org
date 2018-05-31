---
title: ITerminalOptions
category: terminal-interfaces
layout: docs
---

An object containing start up options for the terminal.

## Hierarchy

**ITerminalOptions**

## Index

### Properties

* [allowTransparency]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#allowtransparency)
* [bellSound]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#bellsound)
* [bellStyle]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#bellstyle)
* [cols]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#cols)
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
* [macOptionIsMeta]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#macoptionismeta)
* [rightClickSelectsWord]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#rightclickselectsword)
* [rows]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#rows)
* [screenReaderMode]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#screenreadermode)
* [scrollback]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#scrollback)
* [tabStopWidth]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#tabstopwidth)
* [theme]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#theme)

---

## Properties

<a id="allowtransparency"></a>

### `<Optional>` allowTransparency

**● allowTransparency**: *`boolean`*

*Defined in [xterm.d.ts:25](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L25)*

Whether background should support non-opaque color. It must be set before executing open() method and can't be changed later without excuting it again. Warning: Enabling this option can reduce performances somewhat.

___
<a id="bellsound"></a>

### `<Optional>` bellSound

**● bellSound**: *`string`*

*Defined in [xterm.d.ts:30](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L30)*

A data uri of the sound to use for the bell (needs bellStyle = 'sound').

___
<a id="bellstyle"></a>

### `<Optional>` bellStyle

**● bellStyle**: * "none" &#124; "sound"
*

*Defined in [xterm.d.ts:35](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L35)*

The type of the bell notification the terminal will use.

___
<a id="cols"></a>

### `<Optional>` cols

**● cols**: *`number`*

*Defined in [xterm.d.ts:40](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L40)*

The number of columns in the terminal.

___
<a id="cursorblink"></a>

### `<Optional>` cursorBlink

**● cursorBlink**: *`boolean`*

*Defined in [xterm.d.ts:45](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L45)*

Whether the cursor blinks.

___
<a id="cursorstyle"></a>

### `<Optional>` cursorStyle

**● cursorStyle**: * "block" &#124; "underline" &#124; "bar"
*

*Defined in [xterm.d.ts:50](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L50)*

The style of the cursor.

___
<a id="disablestdin"></a>

### `<Optional>` disableStdin

**● disableStdin**: *`boolean`*

*Defined in [xterm.d.ts:55](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L55)*

Whether input should be disabled.

___
<a id="drawboldtextinbrightcolors"></a>

### `<Optional>` drawBoldTextInBrightColors

**● drawBoldTextInBrightColors**: *`boolean`*

*Defined in [xterm.d.ts:60](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L60)*

Whether to draw bold text in bright colors. The default is true.

___
<a id="enablebold"></a>

### `<Optional>` enableBold

**● enableBold**: *`boolean`*

*Defined in [xterm.d.ts:67](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L67)*

Whether to enable the rendering of bold text.
*__deprecated__*: Use fontWeight and fontWeightBold instead.

___
<a id="experimentalcharatlas"></a>

### `<Optional>` experimentalCharAtlas

**● experimentalCharAtlas**: * "none" &#124; "static" &#124; "dynamic"
*

*Defined in [xterm.d.ts:85](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L85)*

What character atlas implementation to use. The character atlas caches drawn characters, speeding up rendering significantly. However, it can introduce some minor rendering artifacts.

*   'none': Don't use an atlas.
*   'static': Generate an atlas when the terminal starts or is reconfigured. This atlas will only contain ASCII characters in 16 colors.
*   'dynamic': Generate an atlas using a LRU cache as characters are requested. Limited to ASCII characters (for now), but supports 256 colors. For characters covered by the static cache, it's slightly slower in comparison, since there's more overhead involved in managing the cache.

Currently defaults to 'static'. This option may be removed in the future. If it is, passed parameters will be ignored.

___
<a id="fontfamily"></a>

### `<Optional>` fontFamily

**● fontFamily**: *`string`*

*Defined in [xterm.d.ts:95](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L95)*

The font family used to render text.

___
<a id="fontsize"></a>

### `<Optional>` fontSize

**● fontSize**: *`number`*

*Defined in [xterm.d.ts:90](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L90)*

The font size used to render text.

___
<a id="fontweight"></a>

### `<Optional>` fontWeight

**● fontWeight**: *[FontWeight]({% link _docs/api/terminal/modules/xterm.md %}#fontweight)*

*Defined in [xterm.d.ts:100](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L100)*

The font weight used to render non-bold text.

___
<a id="fontweightbold"></a>

### `<Optional>` fontWeightBold

**● fontWeightBold**: *[FontWeight]({% link _docs/api/terminal/modules/xterm.md %}#fontweight)*

*Defined in [xterm.d.ts:105](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L105)*

The font weight used to render bold text.

___
<a id="letterspacing"></a>

### `<Optional>` letterSpacing

**● letterSpacing**: *`number`*

*Defined in [xterm.d.ts:110](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L110)*

The spacing in whole pixels between characters..

___
<a id="lineheight"></a>

### `<Optional>` lineHeight

**● lineHeight**: *`number`*

*Defined in [xterm.d.ts:115](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L115)*

The line height used to render text.

___
<a id="macoptionismeta"></a>

### `<Optional>` macOptionIsMeta

**● macOptionIsMeta**: *`boolean`*

*Defined in [xterm.d.ts:120](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L120)*

Whether to treat option as the meta key.

___
<a id="rightclickselectsword"></a>

### `<Optional>` rightClickSelectsWord

**● rightClickSelectsWord**: *`boolean`*

*Defined in [xterm.d.ts:126](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L126)*

Whether to select the word under the cursor on right click, this is standard behavior in a lot of macOS applications.

___
<a id="rows"></a>

### `<Optional>` rows

**● rows**: *`number`*

*Defined in [xterm.d.ts:131](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L131)*

The number of rows in the terminal.

___
<a id="screenreadermode"></a>

### `<Optional>` screenReaderMode

**● screenReaderMode**: *`boolean`*

*Defined in [xterm.d.ts:138](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L138)*

Whether screen reader support is enabled. When on this will expose supporting elements in the DOM to support NVDA on Windows and VoiceOver on macOS.

___
<a id="scrollback"></a>

### `<Optional>` scrollback

**● scrollback**: *`number`*

*Defined in [xterm.d.ts:144](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L144)*

The amount of scrollback in the terminal. Scrollback is the amount of rows that are retained when lines are scrolled beyond the initial viewport.

___
<a id="tabstopwidth"></a>

### `<Optional>` tabStopWidth

**● tabStopWidth**: *`number`*

*Defined in [xterm.d.ts:149](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L149)*

The size of tab stops in the terminal.

___
<a id="theme"></a>

### `<Optional>` theme

**● theme**: *[ITheme]({% link _docs/api/terminal/interfaces/itheme.md %})*

*Defined in [xterm.d.ts:154](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L154)*

The color theme of the terminal.

___

