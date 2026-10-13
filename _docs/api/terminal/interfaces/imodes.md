---
title: IModes
category: API-interfaces
layout: docs
---


# Interface: IModes

Terminal modes as set by SM/DECSET.

## Hierarchy

* **IModes**

## Index

### Properties

* [applicationCursorKeysMode]({% link _docs/api/terminal/interfaces/imodes.md %}#readonly-applicationcursorkeysmode)
* [applicationKeypadMode]({% link _docs/api/terminal/interfaces/imodes.md %}#readonly-applicationkeypadmode)
* [bracketedPasteMode]({% link _docs/api/terminal/interfaces/imodes.md %}#readonly-bracketedpastemode)
* [insertMode]({% link _docs/api/terminal/interfaces/imodes.md %}#readonly-insertmode)
* [mouseTrackingMode]({% link _docs/api/terminal/interfaces/imodes.md %}#readonly-mousetrackingmode)
* [originMode]({% link _docs/api/terminal/interfaces/imodes.md %}#readonly-originmode)
* [reverseWraparoundMode]({% link _docs/api/terminal/interfaces/imodes.md %}#readonly-reversewraparoundmode)
* [sendFocusMode]({% link _docs/api/terminal/interfaces/imodes.md %}#readonly-sendfocusmode)
* [synchronizedOutputMode]({% link _docs/api/terminal/interfaces/imodes.md %}#readonly-synchronizedoutputmode)
* [wraparoundMode]({% link _docs/api/terminal/interfaces/imodes.md %}#readonly-wraparoundmode)

## Properties

### `Readonly` applicationCursorKeysMode

• **applicationCursorKeysMode**: *boolean*

*Defined in [xterm.d.ts:1911](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1911)*

Application Cursor Keys (DECCKM): `CSI ? 1 h`

___

### `Readonly` applicationKeypadMode

• **applicationKeypadMode**: *boolean*

*Defined in [xterm.d.ts:1915](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1915)*

Application Keypad Mode (DECNKM): `CSI ? 6 6 h`

___

### `Readonly` bracketedPasteMode

• **bracketedPasteMode**: *boolean*

*Defined in [xterm.d.ts:1919](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1919)*

Bracketed Paste Mode: `CSI ? 2 0 0 4 h`

___

### `Readonly` insertMode

• **insertMode**: *boolean*

*Defined in [xterm.d.ts:1923](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1923)*

Insert Mode (IRM): `CSI 4 h`

___

### `Readonly` mouseTrackingMode

• **mouseTrackingMode**: *"none" | "x10" | "vt200" | "drag" | "any"*

*Defined in [xterm.d.ts:1932](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1932)*

Mouse Tracking, this can be one of the following:
- none: This is the default value and can be reset with DECRST
- x10: Send Mouse X & Y on button press `CSI ? 9 h`
- vt200: Send Mouse X & Y on button press and release `CSI ? 1 0 0 0 h`
- drag: Use Cell Motion Mouse Tracking `CSI ? 1 0 0 2 h`
- any: Use All Motion Mouse Tracking `CSI ? 1 0 0 3 h`

___

### `Readonly` originMode

• **originMode**: *boolean*

*Defined in [xterm.d.ts:1936](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1936)*

Origin Mode (DECOM): `CSI ? 6 h`

___

### `Readonly` reverseWraparoundMode

• **reverseWraparoundMode**: *boolean*

*Defined in [xterm.d.ts:1940](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1940)*

Reverse-wraparound Mode: `CSI ? 4 5 h`

___

### `Readonly` sendFocusMode

• **sendFocusMode**: *boolean*

*Defined in [xterm.d.ts:1944](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1944)*

Send FocusIn/FocusOut events: `CSI ? 1 0 0 4 h`

___

### `Readonly` synchronizedOutputMode

• **synchronizedOutputMode**: *boolean*

*Defined in [xterm.d.ts:1951](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1951)*

Synchronized Output Mode: `CSI ? 2 0 2 6 h`

When enabled, output is buffered and only rendered when the mode is
disabled, allowing for atomic screen updates without tearing.

___

### `Readonly` wraparoundMode

• **wraparoundMode**: *boolean*

*Defined in [xterm.d.ts:1955](https://github.com/xtermjs/xterm.js/blob/6.0.0/typings/xterm.d.ts#L1955)*

Auto-Wrap Mode (DECAWM): `CSI ? 7 h`
