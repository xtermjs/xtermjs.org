---
title: IWindowOptions
category: API-interfaces
layout: docs
---


# Interface: IWindowOptions

Enable various window manipulation and report features (CSI Ps ; Ps ; Ps t).

Most settings have no default implementation, as they heavily rely on
the embedding environment.

To implement a feature, create a custom CSI hook like this:
```ts
term.parser.addCsiHandler({final: 't'}, params => {
  const ps = params[0];
  switch (ps) {
    case XY:
      ...            // your implementation for option XY
      return true;   // signal Ps=XY was handled
  }
  return false;      // any Ps that was not handled
});
```

Note on security:
Most features are meant to deal with some information of the host machine
where the terminal runs on. This is seen as a security risk possibly leaking
sensitive data of the host to the program in the terminal. Therefore all options
(even those without a default implementation) are guarded by the boolean flag
and disabled by default.

## Hierarchy

* **IWindowOptions**

## Index

### Properties

* [fullscreenWin]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-fullscreenwin)
* [getCellSizePixels]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-getcellsizepixels)
* [getIconTitle]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-geticontitle)
* [getScreenSizeChars]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-getscreensizechars)
* [getScreenSizePixels]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-getscreensizepixels)
* [getWinPosition]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-getwinposition)
* [getWinSizeChars]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-getwinsizechars)
* [getWinSizePixels]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-getwinsizepixels)
* [getWinState]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-getwinstate)
* [getWinTitle]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-getwintitle)
* [lowerWin]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-lowerwin)
* [maximizeWin]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-maximizewin)
* [minimizeWin]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-minimizewin)
* [popTitle]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-poptitle)
* [pushTitle]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-pushtitle)
* [raiseWin]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-raisewin)
* [refreshWin]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-refreshwin)
* [restoreWin]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-restorewin)
* [setWinLines]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-setwinlines)
* [setWinPosition]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-setwinposition)
* [setWinSizeChars]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-setwinsizechars)
* [setWinSizePixels]({% link _docs/api/terminal/interfaces/iwindowoptions.md %}#optional-setwinsizepixels)

## Properties

### `Optional` fullscreenWin

• **fullscreenWin**? : *boolean*

*Defined in [xterm.d.ts:473](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L473)*

Ps=10 ; 0  Undo full-screen mode.
Ps=10 ; 1  Change to full-screen.
Ps=10 ; 2  Toggle full-screen.
No default implementation.

___

### `Optional` getCellSizePixels

• **getCellSizePixels**? : *boolean*

*Defined in [xterm.d.ts:501](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L501)*

Ps=16  Report xterm character cell size in pixels. Result is "CSI 6 ; height ; width t".
Has a default implementation.

___

### `Optional` getIconTitle

• **getIconTitle**? : *boolean*

*Defined in [xterm.d.ts:516](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L516)*

Ps=20  Report xterm window's icon label. Result is "OSC L label ST".
No default implementation.

___

### `Optional` getScreenSizeChars

• **getScreenSizeChars**? : *boolean*

*Defined in [xterm.d.ts:511](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L511)*

Ps=19  Report the size of the screen in characters. Result is "CSI 9 ; height ; width t".
No default implementation.

___

### `Optional` getScreenSizePixels

• **getScreenSizePixels**? : *boolean*

*Defined in [xterm.d.ts:496](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L496)*

Ps=15    Report size of the screen in pixels. Result is "CSI 5 ; height ; width t".
No default implementation.

___

### `Optional` getWinPosition

• **getWinPosition**? : *boolean*

*Defined in [xterm.d.ts:485](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L485)*

Ps=13      Report xterm window position. Result is "CSI 3 ; x ; y t".
Ps=13 ; 2  Report xterm text-area position. Result is "CSI 3 ; x ; y t".
No default implementation.

___

### `Optional` getWinSizeChars

• **getWinSizeChars**? : *boolean*

*Defined in [xterm.d.ts:506](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L506)*

Ps=18  Report the size of the text area in characters. Result is "CSI 8 ; height ; width t".
Has a default implementation.

___

### `Optional` getWinSizePixels

• **getWinSizePixels**? : *boolean*

*Defined in [xterm.d.ts:491](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L491)*

Ps=14      Report xterm text area size in pixels. Result is "CSI 4 ; height ; width t".
Ps=14 ; 2  Report xterm window size in pixels. Result is "CSI  4 ; height ; width t".
Has a default implementation.

___

### `Optional` getWinState

• **getWinState**? : *boolean*

*Defined in [xterm.d.ts:479](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L479)*

Ps=11   Report xterm window state.
If the xterm window is non-iconified, it returns "CSI 1 t".
If the xterm window is iconified, it returns "CSI 2 t".
No default implementation.

___

### `Optional` getWinTitle

• **getWinTitle**? : *boolean*

*Defined in [xterm.d.ts:521](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L521)*

Ps=21  Report xterm window's title. Result is "OSC l label ST".
No default implementation.

___

### `Optional` lowerWin

• **lowerWin**? : *boolean*

*Defined in [xterm.d.ts:448](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L448)*

Ps=6    Lower the xterm window to the bottom of the stacking order.
No default implementation.

___

### `Optional` maximizeWin

• **maximizeWin**? : *boolean*

*Defined in [xterm.d.ts:466](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L466)*

Ps=9 ; 0   Restore maximized window.
Ps=9 ; 1   Maximize window (i.e., resize to screen size).
Ps=9 ; 2   Maximize window vertically.
Ps=9 ; 3   Maximize window horizontally.
No default implementation.

___

### `Optional` minimizeWin

• **minimizeWin**? : *boolean*

*Defined in [xterm.d.ts:424](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L424)*

Ps=2    Iconify window.
No default implementation.

___

### `Optional` popTitle

• **popTitle**? : *boolean*

*Defined in [xterm.d.ts:535](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L535)*

Ps=23 ; 0  Restore xterm icon and window title from stack.
Ps=23 ; 1  Restore xterm icon title from stack.
Ps=23 ; 2  Restore xterm window title from stack.
All variants have a default implementation.

___

### `Optional` pushTitle

• **pushTitle**? : *boolean*

*Defined in [xterm.d.ts:528](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L528)*

Ps=22 ; 0  Save xterm icon and window title on stack.
Ps=22 ; 1  Save xterm icon title on stack.
Ps=22 ; 2  Save xterm window title on stack.
All variants have a default implementation.

___

### `Optional` raiseWin

• **raiseWin**? : *boolean*

*Defined in [xterm.d.ts:443](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L443)*

Ps=5    Raise the window to the front of the stacking order.
No default implementation.

___

### `Optional` refreshWin

• **refreshWin**? : *boolean*

*Defined in [xterm.d.ts:450](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L450)*

Ps=7    Refresh the window.

___

### `Optional` restoreWin

• **restoreWin**? : *boolean*

*Defined in [xterm.d.ts:419](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L419)*

Ps=1    De-iconify window.
No default implementation.

___

### `Optional` setWinLines

• **setWinLines**? : *boolean*

*Defined in [xterm.d.ts:541](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L541)*

Ps>=24  Resize to Ps lines (DECSLPP).
DECSLPP is not implemented. This settings is also used to
enable / disable DECCOLM (earlier variant of DECSLPP).

___

### `Optional` setWinPosition

• **setWinPosition**? : *boolean*

*Defined in [xterm.d.ts:430](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L430)*

Ps=3 ; x ; y
Move window to [x, y].
No default implementation.

___

### `Optional` setWinSizeChars

• **setWinSizeChars**? : *boolean*

*Defined in [xterm.d.ts:458](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L458)*

Ps = 8 ; height ; width
Resize the text area to given height and width in characters.
Omitted parameters should reuse the current height or width.
Zero parameters use the display's height or width.
No default implementation.

___

### `Optional` setWinSizePixels

• **setWinSizePixels**? : *boolean*

*Defined in [xterm.d.ts:438](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L438)*

Ps = 4 ; height ; width
Resize the window to given `height` and `width` in pixels.
Omitted parameters should reuse the current height or width.
Zero parameters should use the display's height or width.
No default implementation.
