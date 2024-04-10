---
category: API-interfaces
layout: docs
---


***

[@xterm/xterm]({% link _docs/api/terminal/readme.md %}) / IModes

# Interface: IModes

Terminal modes as set by SM/DECSET.

## Properties

### applicationCursorKeysMode

> **`readonly`** **applicationCursorKeysMode**: `boolean`

Application Cursor Keys (DECCKM): `CSI ? 1 h`

#### Source

[xterm.d.ts:1869](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1869)

***

### applicationKeypadMode

> **`readonly`** **applicationKeypadMode**: `boolean`

Application Keypad Mode (DECNKM): `CSI ? 6 6 h`

#### Source

[xterm.d.ts:1873](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1873)

***

### bracketedPasteMode

> **`readonly`** **bracketedPasteMode**: `boolean`

Bracketed Paste Mode: `CSI ? 2 0 0 4 h`

#### Source

[xterm.d.ts:1877](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1877)

***

### insertMode

> **`readonly`** **insertMode**: `boolean`

Insert Mode (IRM): `CSI 4 h`

#### Source

[xterm.d.ts:1881](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1881)

***

### mouseTrackingMode

> **`readonly`** **mouseTrackingMode**: `"none"` \| `"x10"` \| `"vt200"` \| `"drag"` \| `"any"`

Mouse Tracking, this can be one of the following:
- none: This is the default value and can be reset with DECRST
- x10: Send Mouse X & Y on button press `CSI ? 9 h`
- vt200: Send Mouse X & Y on button press and release `CSI ? 1 0 0 0 h`
- drag: Use Cell Motion Mouse Tracking `CSI ? 1 0 0 2 h`
- any: Use All Motion Mouse Tracking `CSI ? 1 0 0 3 h`

#### Source

[xterm.d.ts:1890](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1890)

***

### originMode

> **`readonly`** **originMode**: `boolean`

Origin Mode (DECOM): `CSI ? 6 h`

#### Source

[xterm.d.ts:1894](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1894)

***

### reverseWraparoundMode

> **`readonly`** **reverseWraparoundMode**: `boolean`

Reverse-wraparound Mode: `CSI ? 4 5 h`

#### Source

[xterm.d.ts:1898](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1898)

***

### sendFocusMode

> **`readonly`** **sendFocusMode**: `boolean`

Send FocusIn/FocusOut events: `CSI ? 1 0 0 4 h`

#### Source

[xterm.d.ts:1902](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1902)

***

### wraparoundMode

> **`readonly`** **wraparoundMode**: `boolean`

Auto-Wrap Mode (DECAWM): `CSI ? 7 h`

#### Source

[xterm.d.ts:1906](https://github.com/xtermjs/xterm.js/blob/5.5.0/typings/xterm.d.ts#L1906)
