---
title: ILocalizableStrings
category: API-interfaces
layout: docs
---


# Interface: ILocalizableStrings

The set of localizable strings.

## Hierarchy

* **ILocalizableStrings**

## Index

### Properties

* [promptLabel]({% link _docs/api/terminal/interfaces/ilocalizablestrings.md %}#promptlabel)
* [tooMuchOutput]({% link _docs/api/terminal/interfaces/ilocalizablestrings.md %}#toomuchoutput)

## Properties

###  promptLabel

• **promptLabel**: *string*

*Defined in [xterm.d.ts:407](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L407)*

The aria label for the underlying input textarea for the terminal.

___

###  tooMuchOutput

• **tooMuchOutput**: *string*

*Defined in [xterm.d.ts:413](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L413)*

Announcement for when line reading is suppressed due to too many lines
being printed to the terminal when `screenReaderMode` is enabled.
