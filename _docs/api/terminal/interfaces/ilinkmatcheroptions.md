---
title: ILinkMatcherOptions
category: API-interfaces
layout: docs
---


# Interface: ILinkMatcherOptions

An object containing options for a link matcher.

## Hierarchy

* **ILinkMatcherOptions**

## Index

### Properties

* [leaveCallback]({% link _docs/api/terminal/interfaces/ilinkmatcheroptions.md %}#optional-leavecallback)
* [matchIndex]({% link _docs/api/terminal/interfaces/ilinkmatcheroptions.md %}#optional-matchindex)
* [priority]({% link _docs/api/terminal/interfaces/ilinkmatcheroptions.md %}#optional-priority)
* [tooltipCallback]({% link _docs/api/terminal/interfaces/ilinkmatcheroptions.md %}#optional-tooltipcallback)
* [validationCallback]({% link _docs/api/terminal/interfaces/ilinkmatcheroptions.md %}#optional-validationcallback)
* [willLinkActivate]({% link _docs/api/terminal/interfaces/ilinkmatcheroptions.md %}#optional-willlinkactivate)

## Properties

### `Optional` leaveCallback

• **leaveCallback**? : *function*

*Defined in [xterm.d.ts:337](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L337)*

A callback that fires when the mouse leaves a link. Note that this can
happen even when tooltipCallback hasn't fired for the link yet.

#### Type declaration:

▸ (): *void*

___

### `Optional` matchIndex

• **matchIndex**? : *number*

*Defined in [xterm.d.ts:319](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L319)*

The index of the link from the regex.match(text) call. This defaults to 0
(for regular expressions without capture groups).

___

### `Optional` priority

• **priority**? : *number*

*Defined in [xterm.d.ts:344](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L344)*

The priority of the link matcher, this defines the order in which the
link matcher is evaluated relative to others, from highest to lowest. The
default value is 0.

___

### `Optional` tooltipCallback

• **tooltipCallback**? : *function*

*Defined in [xterm.d.ts:331](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L331)*

A callback that fires when the mouse hovers over a link for a period of
time (defined by [ITerminalOptions.linkTooltipHoverDuration]({% link _docs/api/terminal/interfaces/iterminaloptions.md %}#optional-linktooltiphoverduration)).

#### Type declaration:

▸ (`event`: MouseEvent, `uri`: string, `location`: [IViewportRange]({% link _docs/api/terminal/interfaces/iviewportrange.md %})): *boolean | void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | MouseEvent |
`uri` | string |
`location` | [IViewportRange]({% link _docs/api/terminal/interfaces/iviewportrange.md %}) |

___

### `Optional` validationCallback

• **validationCallback**? : *function*

*Defined in [xterm.d.ts:325](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L325)*

A callback that validates whether to create an individual link, pass
whether the link is valid to the callback.

#### Type declaration:

▸ (`uri`: string, `callback`: function): *void*

**Parameters:**

▪ **uri**: *string*

▪ **callback**: *function*

▸ (`isValid`: boolean): *void*

**Parameters:**

Name | Type |
------ | ------ |
`isValid` | boolean |

___

### `Optional` willLinkActivate

• **willLinkActivate**? : *function*

*Defined in [xterm.d.ts:352](https://github.com/xtermjs/xterm.js/blob/4.10.0/typings/xterm.d.ts#L352)*

A callback that fires when the mousedown and click events occur that
determines whether a link will be activated upon click. This enables
only activating a link when a certain modifier is held down, if not the
mouse event will continue propagation (eg. double click to select word).

#### Type declaration:

▸ (`event`: MouseEvent, `uri`: string): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`event` | MouseEvent |
`uri` | string |
