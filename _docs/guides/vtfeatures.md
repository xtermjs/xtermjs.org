---
title: Supported VT features and terminal sequences
category: Guides
---



### TODO
- improve table sorting:
  - sort C0/C1 in byte order
  - sort OSC in numerical order
  - sort CSI/ESC/DCS in final byte order
- references


xterm.js version: 4.3.0

### Table of Contents

- [General notes](#general-notes)
- [C0](#c0)
- [C1](#c1)
- [CSI](#csi)
- [DCS](#dcs)
- [ESC](#esc)
- [OSC](#osc)

### General notes

This document lists xterm.js' support of terminal sequences. The sequences are grouped by their type:

- C0: single byte command (7bit control characters, byte range \x00 .. \x1f)
- C1: single byte command (8bit control characters, byte range \x80 .. \x9f)
- ESC: sequence starting with `ESC` (`\x1b`)
- CSI - Control Sequence Introducer: sequence starting with `ESC [` (7bit) or CSI (`\x9b` 8bit)
- DCS - Device Control String: sequence starting with `ESC P` (7bit) or DCS (`\x90` 8bit)
- OSC - Operating System Command: sequence starting with `ESC ]` (7bit) or OSC (`\x9d` 8bit)

Application Program Command (APC), Privacy Message (PM) and Start of String (SOS) are recognized but not supported,
any sequence of these types will be ignored. They are also not hookable by the API.

Note that the list only contains sequences implemented in xterm.js' core codebase. Missing sequences are either
not supported or unstable/experimental. Furthermore addons or integrations can provide additional custom sequences.

To denote the sequences the following tables use the same abbreviations as xterm does:
- `Ps`: A single (usually optional) numeric parameter, composed of one or more decimal digits.
- `Pm`: A multiple numeric parameter composed of any number of single numeric parameters, separated by ; character(s),
  e.g. ` Ps ; Ps ; ... `.
- `Pt`: A text parameter composed of printable characters. Note that for most commands with `Pt` only
  ASCII printables are specified to work. Additionally the parser will let pass any codepoint greater than C1 as printable.


### C0

| Mnemonic | Name | Sequence | Short Description | Status |
| -------- | ---- | -------- | ----------------- | ------ |
| BEL | Bell | `\a` | Ring the bell. _[more](#bell)_ | supported |
| BS | Backspace | `\b` | Move the cursor one position to the left.  | supported |
| SO | Shift Out | `\x0e` | Switch to an alternative character set.  | partly |
| FF | Form Feed | `\f` | Treated as LF.  | supported |
| SI | Shift In | `\x0f` | Return to regular character set after Shift Out.  | supported |
| LF | Line Feed | `\n` | Move the cursor one row down, scrolling if needed. _[more](#line-feed)_ | supported |
| CR | Carriage Return | `\r` | Move the cursor to the beginning of the row.  | supported |
| HT | Horizontal Tabulation | `\t` | Move the cursor to the next character tab stop.  | supported |
| VT | Vertical Tabulation | `\v` | Treated as LF.  | supported |

#### Bell
The behavior of the bell is further customizable with `ITerminalOptions.bellStyle`
and `ITerminalOptions.bellSound`.
#### Line Feed
Scrolling is restricted to scroll margins and will only happen on the bottom line.



### C1

| Mnemonic | Name | Sequence | Short Description | Status |
| -------- | ---- | -------- | ----------------- | ------ |
| DCS | Device Control String | `\x90` | Start of a DCS sequence.  | supported |
| IND | Index | `\x84` | Move the cursor one line down scrolling if needed.  | supported |
| NEL | Next Line | `\x85` | Move the cursor to the beginning of the next row.  | supported |
| HTS | Horizontal Tabulation Set | `\x88` | Places a tab stop at the current cursor position.  | supported |
| CSI | Control Sequence Introducer | `\x9b` | Start of a CSI sequence.  | supported |
| ST | String Terminator | `\x9c` | Terminator used for string type sequences.  | supported |
| OSC | Operating System Command | `\x9d` | Start of an OSC sequence.  | supported |
| PM | Privacy Message | `\x9e` | Start of a privacy message.  | supported |
| APC | Application Program Command | `\x9f` | Start of an APC sequence.  | supported |




### CSI

| Mnemonic | Name | Sequence | Short Description | Status |
| -------- | ---- | -------- | ----------------- | ------ |
| DCH | Delete Character | `CSI Ps P` | Delete `Ps` characters (default=1). _[more](#delete-character)_ | supported |
| CUU | Cursor Up | `CSI Ps A` | Move cursor `Ps` times up (default=1). _[more](#cursor-up)_ | supported |
| SR | Scroll Right | `CSI Ps SP A` | Scroll viewport `Ps` times to the right. _[more](#scroll-right)_ | supported |
| SL | Scroll Left | `CSI Ps SP @` | Scroll viewport `Ps` times to the left. _[more](#scroll-left)_ | supported |
| ICH | Insert Characters | `CSI Ps @` | Insert `Ps` (blank) characters (default = 1). _[more](#insert-characters)_ | supported |
| SD | Scroll Down | `CSI Ps T` | Scroll `Ps` lines down (default=1).  | supported |
| CPL | Cursor Backward | `CSI Ps F` | Move cursor `Ps` times up (default=1) and to the first column. _[more](#cursor-backward)_ | supported |
| CUF | Cursor Forward | `CSI Ps C` | Move cursor `Ps` times forward (default=1).  | supported |
| CUB | Cursor Backward | `CSI Ps D` | Move cursor `Ps` times backward (default=1).  | supported |
| CUD | Cursor Down | `CSI Ps B` | Move cursor `Ps` times down (default=1). _[more](#cursor-down)_ | supported |
| CNL | Cursor Next Line | `CSI Ps E` | Move cursor `Ps` times down (default=1) and to the first column. _[more](#cursor-next-line)_ | supported |
| DECIC | Insert Columns | `CSI Ps &#39; }` | Insert `Ps` columns at cursor position. _[more](#insert-columns)_ | supported |
| VPR | Vertical Position Relative | `CSI Ps e` | Move cursor `Ps` times down (default=1).  | supported |
| DA2 | Secondary Device Attributes | `CSI &gt; c` | Send primary device attributes.  | supported |
| CHT | Cursor Horizontal Tabulation | `CSI Ps I` | Move cursor `Ps` times tabs forward (default=1).  | supported |
| CBT | Cursor Backward Tabulation | `CSI Ps Z` | Move cursor `Ps` tabs backward (default=1).  | supported |
| ED | Erase In Display | `CSI Ps J` | Erase various parts of the viewport. _[more](#erase-in-display)_ | supported |
| DECSED | Selective Erase In Display | `CSI ? Ps J` | Currently the same as ED.  | partly |
| EL | Erase In Line | `CSI Ps K` | Erase various parts of the active row. _[more](#erase-in-line)_ | supported |
| DECSEL | Selective Erase In Line | `CSI ? Ps K` | Currently the same as EL.  | partly |
| IL | Insert Line | `CSI Ps L` | Insert `Ps` blank lines at active row (default=1). _[more](#insert-line)_ | supported |
| DL | Delete Line | `CSI Ps M` | Delete `Ps` lines at active row (default=1). _[more](#delete-line)_ | supported |
| VPA | Vertical Position Absolute | `CSI Ps d` | Move cursor to `Ps`-th row (default=1).  | supported |
| HPR | Horizontal Position Relative | `CSI Ps a` | Same as CUF.  | supported |
| SU | Scroll Up | `CSI Ps S` | Scroll `Ps` lines up (default=1).  | supported |
| CHA | Cursor Horizontal Absolute | `CSI Ps G` | Move cursor to `Ps`-th column of the active row (default=1).  | supported |
| HPA | Horizontal Position Absolute | `CSI Ps &#x60;` | Same as CHA.  | supported |
| CUP | Cursor Position | `CSI Ps ; Ps H` | Set cursor to position [`Ps`, `Ps`] (default = [1, 1]). _[more](#cursor-position)_ | supported |
| DA1 | Primary Device Attributes | `CSI c` | Send primary device attributes.  | supported |
| REP | Repeat Preceding Character | `CSI Ps b` | Repeat preceding character `Ps` times (default=1). _[more](#repeat-preceding-character)_ | supported |
| ECH | Erase Character | `CSI Ps X` | Erase `Ps` characters from current cursor position to the right (default=1). _[more](#erase-character)_ | supported |
| SGR | Select Graphic Rendition | `CSI Pm m` | Set/Reset various text attributes. _[more](#select-graphic-rendition)_ | partly |
| SCORC | Restore Cursor | `CSI u` | Restore cursor position, charmap and text attributes.  | partly |
| TBC | Tab Clear | `CSI Ps g` | Clear tab stops at current position (0) or all (3) (default=0). _[more](#tab-clear)_ | supported |
| SM | Set Mode | `CSI Pm h` | Set various terminal modes. _[more](#set-mode)_ | partly |
| DECSET | DEC Private Set Mode | `CSI ? Pm h` | Set various terminal attributes. _[more](#dec-private-set-mode)_ | partly |
| RM | Reset Mode | `CSI Pm l` | Set various terminal attributes. _[more](#reset-mode)_ | partly |
| DECRST | DEC Private Reset Mode | `CSI ? Pm l` | Reset various terminal attributes. _[more](#dec-private-reset-mode)_ | partly |
| HVP | Horizontal and Vertical Position | `CSI Ps ; Ps f` | Same as CUP.  | supported |
| DSR | Device Status Report | `CSI Ps n` | Request cursor position (CPR) with `Ps` = 6.  | supported |
| DECDSR | DEC Device Status Report | `CSI ? Ps n` | Only CPR is supported (same as DSR).  | partly |
| DECSTR | Soft Terminal Reset | `CSI ! p` | Reset several terminal attributes to initial state. _[more](#soft-terminal-reset)_ | supported |
| DECSCUSR | Set Cursor Style | `CSI Ps SP q` | Set cursor style. _[more](#set-cursor-style)_ | supported |
| DECSTBM | Set Top and Bottom Margin | `CSI Ps ; Ps r` | Set top and bottom margins of the viewport [top;bottom] (default = viewport size).  | supported |
| SCOSC | Save Cursor | `CSI s` | Save cursor position, charmap and text attributes.  | partly |
| DECDC | Delete Columns | `CSI Ps &#39; ~` | Delete `Ps` columns at cursor position. _[more](#delete-columns)_ | supported |

#### Delete Character
As characters are deleted, the remaining characters between the cursor and right margin move to the left.
Character attributes move with the characters. The terminal adds blank characters at the right margin.
#### Cursor Up
If the cursor would pass the top scroll margin, it will stop there.
#### Scroll Right
SL moves the content of all lines within the scroll margins `Ps` times to the right.
Content at the right margin is lost.
SL has no effect outside of the scroll margins.
#### Scroll Left
SL moves the content of all lines within the scroll margins `Ps` times to the left.
SL has no effect outside of the scroll margins.
#### Insert Characters
The ICH sequence inserts `Ps` blank characters. The cursor remains at the beginning of the blank characters.
Text between the cursor and right margin moves to the right. Characters moved past the right margin are lost.
#### Cursor Backward
Same as CUU, additionally places the cursor at the first column.
#### Cursor Down
If the cursor would pass the bottom scroll margin, it will stop there.
#### Cursor Next Line
Same as CUD, additionally places the cursor at the first column.
#### Insert Columns
DECIC inserts `Ps` times blank columns at the cursor position for all lines with the scroll margins,
moving content to the right. Content at the right margin is lost.
DECIC has no effect outside the scrolling margins.
#### Erase In Display
Supported param values:
| Ps | Effect                                                       |
| -- | ------------------------------------------------------------ |
| 0  | Erase from the cursor through the end of the viewport.       |
| 1  | Erase from the beginning of the viewport through the cursor. |
| 2  | Erase complete viewport.                                     |
| 3  | Erase scrollback.                                            |
#### Erase In Line
Supported param values:
| Ps | Effect                                                   |
| -- | -------------------------------------------------------- |
| 0  | Erase from the cursor through the end of the row.        |
| 1  | Erase from the beginning of the line through the cursor. |
| 2  | Erase complete line.                                     |
#### Insert Line
For every inserted line at the scroll top one line at the scroll bottom gets removed.
The cursor is set to the first column.
IL has no effect if the cursor is outside the scroll margins.
#### Delete Line
For every deleted line at the scroll top one blank line at the scroll bottom gets appended.
The cursor is set to the first column.
DL has no effect if the cursor is outside the scroll margins.
#### Cursor Position
If ORIGIN mode is set, places the cursor to the absolute position within the scroll margins.
If ORIGIN mode is not set, places the cursor to the absolute position within the viewport.
Note that the coordinates are 1-based, thus the top left position starts at `1 ; 1`.
#### Repeat Preceding Character
REP repeats the previous character `Ps` times advancing the cursor, also wrapping if DECAWM is set.
REP no effect if the sequence does not follow a printable ASCII character
(NOOP for any other sequence in between or NON ASCII characters).
#### Erase Character
ED erases `Ps` characters from current cursor position to the right.
ED works inside or outside the scrolling margins.
#### Select Graphic Rendition
SGR selects one or more character attributes at the same time. Multiple params (up to 32)
are applied from in order from left to right. The changed attributes are applied to all new
characters received. If you move characters in the viewport by scrolling or any other means,
then the attributes move with the characters.
Supported param values by SGR:
| Param     | Meaning                                                  | Status      |
| --------- | -------------------------------------------------------- | ----------- |
| 0         | Normal (default). Resets any other preceding SGR.        | supported   |
| 1         | Bold. (also see `options.drawBoldTextInBrightColors`)    | supported   |
| 2         | Faint, decreased intensity.                              | supported   |
| 3         | Italic.                                                  | supported   |
| 4         | Underlined. (no support for newer underline styles)      | supported   |
| 5         | Slowly blinking.                                         | unsupported |
| 6         | Rapidly blinking.                                        | unsupported |
| 7         | Inverse. Flips foreground and background color.          | supported   |
| 8         | Invisible (hidden).                                      | supported   |
| 9         | Crossed-out characters.                                  | unsupported |
| 21        | Doubly  underlined.                                      | unsupported |
| 22        | Normal (neither bold nor faint).                         | supported   |
| 23        | No italic.                                               | supported   |
| 24        | Not underlined.                                          | supported   |
| 25        | Steady (not blinking).                                   | supported   |
| 27        | Positive (not inverse).                                  | supported   |
| 28        | Visible (not hidden).                                    | supported   |
| 29        | Not Crossed-out.                                         | unsupported |
| 30        | Foreground color: Black.                                 | supported   |
| 31        | Foreground color: Red.                                   | supported   |
| 32        | Foreground color: Green.                                 | supported   |
| 33        | Foreground color: Yellow.                                | supported   |
| 34        | Foreground color: Blue.                                  | supported   |
| 35        | Foreground color: Magenta.                               | supported   |
| 36        | Foreground color: Cyan.                                  | supported   |
| 37        | Foreground color: White.                                 | supported   |
| 38        | Foreground color: Extended color (see below).            | supported   |
| 39        | Foreground color: Default (original).                    | supported   |
| 40        | Background color: Black.                                 | supported   |
| 41        | Background color: Red.                                   | supported   |
| 42        | Background color: Green.                                 | supported   |
| 43        | Background color: Yellow.                                | supported   |
| 44        | Background color: Blue.                                  | supported   |
| 45        | Background color: Magenta.                               | supported   |
| 46        | Background color: Cyan.                                  | supported   |
| 47        | Background color: White.                                 | supported   |
| 48        | Background color: Extended color (see below).            | supported   |
| 49        | Background color: Default (original).                    | supported   |
| 90 - 97   | Bright foreground color (analogous to 30 -37).           | supported   |
| 100 - 107 | Bright background color (analogous to 40 -47).           | supported   |
Extended colors are supported for foreground (Ps=38) and background (Ps=48) as follows:
| Ps + 1 | Meaning                                                                 | Status      |
| ------ | ----------------------------------------------------------------------- | ----------- |
| 0      | Implementation defined.                                                 | unsupported |
| 1      | Transparent.                                                            | unsupported |
| 2      | RGB color, in the form `Ps ; 2 ; R ; G ; B` or `Ps : 2 : : R : G : B`.  | supported   |
| 3      | CMY color.                                                              | unsupported |
| 4      | CMYK color.                                                             | unsupported |
| 5      | Indexed (256 colors), in the form `Ps ; 5 ; INDEX` or `Ps : 5 : INDEX`. | supported   |
#### Tab Clear
Clearing tabstops off the active row (Ps = 2, VT100) is currently not supported.
#### Set Mode
Supported param values by SM:
| Param | Action                                 | Status      |
| ----- | -------------------------------------- | ----------- |
| 2     | Keyboard Action Mode (KAM). Always on. | unsupported |
| 4     | Insert Mode (IRM).                     | supported   |
| 12    | Send/receive (SRM). Always off.        | unsupported |
| 20    | Automatic Newline (LNM). Always off.   | unsupported |
#### DEC Private Set Mode
Supported param values by DECSET:
| param | Action                                                  | Status      |
| ----- | ------------------------------------------------------- | ----------- |
| 1     | Application Cursor Keys (DECCKM).                       | supported   |
| 2     | Designate US-ASCII for character sets G0-G3 (DECANM).   | supported   |
| 3     | 132 Column Mode (DECCOLM).                              | supported   |
| 6     | Origin Mode (DECOM).                                    | supported   |
| 7     | Auto-wrap Mode (DECAWM).                                | supported   |
| 8     | Auto-repeat Keys (DECARM). Always on.                   | unsupported |
| 9     | X10 xterm mouse protocol.                               | supported   |
| 12    | Start Blinking Cursor.                                  | supported   |
| 25    | Show Cursor (DECTCEM).                                  | supported   |
| 47    | Use Alternate Screen Buffer.                            | supported   |
| 66    | Application keypad (DECNKM).                            | supported   |
| 1000  | X11 xterm mouse protocol.                               | supported   |
| 1002  | Use Cell Motion Mouse Tracking.                         | supported   |
| 1003  | Use All Motion Mouse Tracking.                          | supported   |
| 1004  | Send FocusIn/FocusOut events                            | supported   |
| 1005  | Enable UTF-8 Mouse Mode.                                | unsupported |
| 1006  | Enable SGR Mouse Mode.                                  | supported   |
| 1015  | Enable urxvt Mouse Mode.                                | unsupported |
| 1047  | Use Alternate Screen Buffer.                            | supported   |
| 1048  | Save cursor as in DECSC.                                | supported   |
| 1049  | Save cursor and switch to alternate buffer clearing it. | partly      |
| 2004  | Set bracketed paste mode.                               | supported   |
#### Reset Mode
Supported param values by RM:
| Param | Action                                 | Status      |
| ----- | -------------------------------------- | ----------- |
| 2     | Keyboard Action Mode (KAM). Always on. | unsupported |
| 4     | Replace Mode (IRM). (default)          | supported   |
| 12    | Send/receive (SRM). Always off.        | unsupported |
| 20    | Normal Linefeed (LNM). Always off.     | unsupported |
#### DEC Private Reset Mode
Supported param values by DECRST:
| param | Action                                                  | Status      |
| ----- | ------------------------------------------------------- | ----------- |
| 1     | Normal Cursor Keys (DECCKM).                            | supported   |
| 2     | Designate VT52 mode (DECANM).                           | unsupported |
| 3     | 80 Column Mode (DECCOLM).                               | broken      |
| 6     | Normal Cursor Mode (DECOM).                             | supported   |
| 7     | No Wraparound Mode (DECAWM).                            | supported   |
| 8     | No Auto-repeat Keys (DECARM).                           | unsupported |
| 9     | Don't send Mouse X & Y on button press.                 | supported   |
| 12    | Stop Blinking Cursor.                                   | supported   |
| 25    | Hide Cursor (DECTCEM).                                  | supported   |
| 47    | Use Normal Screen Buffer.                               | supported   |
| 66    | Numeric keypad (DECNKM).                                | supported   |
| 1000  | Don't send Mouse reports.                               | supported   |
| 1002  | Don't use Cell Motion Mouse Tracking.                   | supported   |
| 1003  | Don't use All Motion Mouse Tracking.                    | supported   |
| 1004  | Don't send FocusIn/FocusOut events.                     | supported   |
| 1005  | Disable UTF-8 Mouse Mode.                               | unsupported |
| 1006  | Disable SGR Mouse Mode.                                 | supported   |
| 1015  | Disable urxvt Mouse Mode.                               | unsupported |
| 1047  | Use Normal Screen Buffer (clearing screen if in alt).   | supported   |
| 1048  | Restore cursor as in DECRC.                             | supported   |
| 1049  | Use Normal Screen Buffer and restore cursor.            | supported   |
| 2004  | Reset bracketed paste mode.                             | supported   |
#### Soft Terminal Reset
There are two terminal reset sequences - RIS and DECSTR. While RIS performs almost a full terminal bootstrap,
DECSTR only resets certain attributes. For most needs DECSTR should be sufficient.
Attributes reset to default values:
- cursor is reset (default = visible, home position)
- IRM is reset (dafault = false)
- scroll margins are reset (default = viewport size)
- erase attributes are reset to default
- charsets are reset
#### Set Cursor Style
Supported cursor styles:
 - empty, 0 or 1: steady block
 - 2: blink block
 - 3: steady underline
 - 4: blink underline
 - 5: steady bar
 - 6: blink bar
#### Delete Columns
DECDC deletes `Ps` times columns at the cursor position for all lines with the scroll margins,
moving content to the left. Blank columns are added at the right margin.
DECDC has no effect outside the scrolling margins.



### DCS

| Mnemonic | Name | Sequence | Short Description | Status |
| -------- | ---- | -------- | ----------------- | ------ |
| SIXEL | SIXEL Graphics | `DCS Ps ; Ps ; Ps ; q 	Pt ST` | Draw SIXEL image starting at cursor position.  | unsupported |
| DECRQSS | Request Selection or Setting | `DCS $ q Pt ST` | Request several terminal settings. _[more](#request-selection-or-setting)_ | partly |
| DECUDK | User Defined Keys | `DCS Ps ; Ps | Pt ST` | Definitions for user-defined keys.  | unsupported |
| XTGETTCAP | Request Terminfo String | `DCS + q Pt ST` | Request Terminfo String.  | unsupported |
| XTSETTCAP | Set Terminfo Data | `DCS + p Pt ST` | Set Terminfo Data.  | unsupported |

#### Request Selection or Setting
Response is in the form `ESC P 1 $ r Pt ST` for valid requests, where `Pt` contains the corresponding CSI string,
`ESC P 0 ST` for invalid requests.\
Supported requests and responses:
| Type                             | Request           | Response (`Pt`)    |
| -------------------------------- | ----------------- | ------------------ |
| Graphic Rendition (SGR)          | `DCS $ q m ST`    | always reporting `0m` (currently broken) |
| Top and Bottom Margins (DECSTBM) | `DCS $ q r ST`    | `Ptop ; Pbottom r` |
| Cursor Style (DECSCUSR)          | `DCS $ q SP q ST` | `Pstyle SP q`      |
| Protection Attribute (DECSCA)    | `DCS $ q " q ST`  | always reporting `0 " q` (DECSCA is unsupported) |
| Conformance Level (DECSCL)       | `DCS $ q " p ST`  | always reporting `61 ; 1 " p` (DECSCL is unsupported) |



### ESC

| Mnemonic | Name | Sequence | Short Description | Status |
| -------- | ---- | -------- | ----------------- | ------ |
| SC | Save Cursor | `ESC 7` | Save cursor position, charmap and text attributes.  | supported |
| DECALN | Screen Alignment Pattern | `ESC # 8` | Fill viewport with a test pattern (E).  | supported |
| RC | Restore Cursor | `ESC 8` | Restore cursor position, charmap and text attributes.  | supported |
| IND | Index | `ESC D` | Move the cursor one line down scrolling if needed.  | supported |
| NEL | Next Line | `ESC E` | Move the cursor to the beginning of the next row.  | supported |
| HTS | Horizontal Tabulation Set | `ESC H` | Places a tab stop at the current cursor position.  | supported |
| IR | Reverse Index | `ESC M` | Move the cursor one line up scrolling if needed.  | supported |
| DCS | Device Control String | `ESC P` | Start of a DCS sequence.  | supported |
| CSI | Control Sequence Introducer | `ESC [` | Start of a CSI sequence.  | supported |
| ST | String Terminator | `ESC \` | Terminator used for string type sequences.  | supported |
| OSC | Operating System Command | `ESC ]` | Start of an OSC sequence.  | supported |
| PM | Privacy Message | `ESC ^` | Start of a privacy message.  | supported |
| APC | Application Program Command | `ESC _` | Start of an APC sequence.  | supported |




### OSC

| Identifier | Sequence | Short Description | Status |
| ---------- | -------- | ----------------- | ------ |
| 1 | `OSC 1 ; Pt BEL` | Set icon name.  | unsupported |
| 0 | `OSC 0 ; Pt BEL` | Set window title and icon name. _[more](#set-windows-title-and-icon-name)_ | partly |
| 2 | `OSC 2 ; Pt BEL` | Set window title. _[more](#set-windows-title)_ | supported |

#### Set Windows Title and Icon Name
Icon name is not supported. For Window Title see below.
#### Set Windows Title
xterm.js does not manipulate the title directly, instead exposes changes via the event `Terminal.onTitleChange`.


