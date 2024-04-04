---
category: API-interfaces
layout: docs
---


***

[@xterm/xterm]({% link _docs/api/terminal/readme.md %}) / IWindowOptions

# Interface: IWindowOptions

Enable various window manipulation and report features
(`CSI Ps ; Ps ; Ps t`).

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
where the terminal runs on. This is seen as a security risk possibly
leaking sensitive data of the host to the program in the terminal.
Therefore all options (even those without a default implementation) are
guarded by the boolean flag and disabled by default.

## Properties

### fullscreenWin?

> **`optional`** **fullscreenWin**: `boolean`

Ps=10 ; 0  Undo full-screen mode.
Ps=10 ; 1  Change to full-screen.
Ps=10 ; 2  Toggle full-screen.
No default implementation.

#### Source

[xterm.d.ts:690](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L690)

***

### getCellSizePixels?

> **`optional`** **getCellSizePixels**: `boolean`

Ps=16  Report xterm character cell size in pixels. Result is "CSI 6 ; height ; width t".
Has a default implementation.

#### Source

[xterm.d.ts:718](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L718)

***

### getIconTitle?

> **`optional`** **getIconTitle**: `boolean`

Ps=20  Report xterm window's icon label. Result is "OSC L label ST".
No default implementation.

#### Source

[xterm.d.ts:733](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L733)

***

### getScreenSizeChars?

> **`optional`** **getScreenSizeChars**: `boolean`

Ps=19  Report the size of the screen in characters. Result is "CSI 9 ; height ; width t".
No default implementation.

#### Source

[xterm.d.ts:728](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L728)

***

### getScreenSizePixels?

> **`optional`** **getScreenSizePixels**: `boolean`

Ps=15    Report size of the screen in pixels. Result is "CSI 5 ; height ; width t".
No default implementation.

#### Source

[xterm.d.ts:713](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L713)

***

### getWinPosition?

> **`optional`** **getWinPosition**: `boolean`

Ps=13      Report xterm window position. Result is "CSI 3 ; x ; y t".
Ps=13 ; 2  Report xterm text-area position. Result is "CSI 3 ; x ; y t".
No default implementation.

#### Source

[xterm.d.ts:702](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L702)

***

### getWinSizeChars?

> **`optional`** **getWinSizeChars**: `boolean`

Ps=18  Report the size of the text area in characters. Result is "CSI 8 ; height ; width t".
Has a default implementation.

#### Source

[xterm.d.ts:723](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L723)

***

### getWinSizePixels?

> **`optional`** **getWinSizePixels**: `boolean`

Ps=14      Report xterm text area size in pixels. Result is "CSI 4 ; height ; width t".
Ps=14 ; 2  Report xterm window size in pixels. Result is "CSI  4 ; height ; width t".
Has a default implementation.

#### Source

[xterm.d.ts:708](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L708)

***

### getWinState?

> **`optional`** **getWinState**: `boolean`

Ps=11   Report xterm window state.
If the xterm window is non-iconified, it returns "CSI 1 t".
If the xterm window is iconified, it returns "CSI 2 t".
No default implementation.

#### Source

[xterm.d.ts:696](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L696)

***

### getWinTitle?

> **`optional`** **getWinTitle**: `boolean`

Ps=21  Report xterm window's title. Result is "OSC l label ST".
No default implementation.

#### Source

[xterm.d.ts:738](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L738)

***

### lowerWin?

> **`optional`** **lowerWin**: `boolean`

Ps=6    Lower the xterm window to the bottom of the stacking order.
No default implementation.

#### Source

[xterm.d.ts:665](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L665)

***

### maximizeWin?

> **`optional`** **maximizeWin**: `boolean`

Ps=9 ; 0   Restore maximized window.
Ps=9 ; 1   Maximize window (i.e., resize to screen size).
Ps=9 ; 2   Maximize window vertically.
Ps=9 ; 3   Maximize window horizontally.
No default implementation.

#### Source

[xterm.d.ts:683](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L683)

***

### minimizeWin?

> **`optional`** **minimizeWin**: `boolean`

Ps=2    Iconify window.
No default implementation.

#### Source

[xterm.d.ts:641](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L641)

***

### popTitle?

> **`optional`** **popTitle**: `boolean`

Ps=23 ; 0  Restore xterm icon and window title from stack.
Ps=23 ; 1  Restore xterm icon title from stack.
Ps=23 ; 2  Restore xterm window title from stack.
All variants have a default implementation.

#### Source

[xterm.d.ts:752](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L752)

***

### pushTitle?

> **`optional`** **pushTitle**: `boolean`

Ps=22 ; 0  Save xterm icon and window title on stack.
Ps=22 ; 1  Save xterm icon title on stack.
Ps=22 ; 2  Save xterm window title on stack.
All variants have a default implementation.

#### Source

[xterm.d.ts:745](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L745)

***

### raiseWin?

> **`optional`** **raiseWin**: `boolean`

Ps=5    Raise the window to the front of the stacking order.
No default implementation.

#### Source

[xterm.d.ts:660](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L660)

***

### refreshWin?

> **`optional`** **refreshWin**: `boolean`

Ps=7    Refresh the window.

#### Source

[xterm.d.ts:667](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L667)

***

### restoreWin?

> **`optional`** **restoreWin**: `boolean`

Ps=1    De-iconify window.
No default implementation.

#### Source

[xterm.d.ts:636](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L636)

***

### setWinLines?

> **`optional`** **setWinLines**: `boolean`

Ps>=24  Resize to Ps lines (DECSLPP).
DECSLPP is not implemented. This settings is also used to
enable / disable DECCOLM (earlier variant of DECSLPP).

#### Source

[xterm.d.ts:758](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L758)

***

### setWinPosition?

> **`optional`** **setWinPosition**: `boolean`

Ps=3 ; x ; y
Move window to [x, y].
No default implementation.

#### Source

[xterm.d.ts:647](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L647)

***

### setWinSizeChars?

> **`optional`** **setWinSizeChars**: `boolean`

Ps = 8 ; height ; width
Resize the text area to given height and width in characters.
Omitted parameters should reuse the current height or width.
Zero parameters use the display's height or width.
No default implementation.

#### Source

[xterm.d.ts:675](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L675)

***

### setWinSizePixels?

> **`optional`** **setWinSizePixels**: `boolean`

Ps = 4 ; height ; width
Resize the window to given `height` and `width` in pixels.
Omitted parameters should reuse the current height or width.
Zero parameters should use the display's height or width.
No default implementation.

#### Source

[xterm.d.ts:655](https://github.com/xtermjs/xterm.js/blob/5.4.0/typings/xterm.d.ts#L655)
