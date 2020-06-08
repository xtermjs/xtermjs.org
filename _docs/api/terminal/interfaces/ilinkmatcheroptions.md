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

*Defined in [xterm.d.ts:316](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L316)*

A callback that fires when the mouse leaves a link. Note that this can
happen even when tooltipCallback hasn't fired for the link yet.

#### Type declaration:

▸ (): *void*

___

### `Optional` matchIndex

• **matchIndex**? : *number*

*Defined in [xterm.d.ts:299](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L299)*

The index of the link from the regex.match(text) call. This defaults to 0
(for regular expressions without capture groups).

___

### `Optional` priority

• **priority**? : *number*

*Defined in [xterm.d.ts:323](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L323)*

The priority of the link matcher, this defines the order in which the
link matcher is evaluated relative to others, from highest to lowest. The
default value is 0.

___

### `Optional` tooltipCallback

• **tooltipCallback**? : *function*

*Defined in [xterm.d.ts:310](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L310)*

A callback that fires when the mouse hovers over a link for a moment.

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

*Defined in [xterm.d.ts:305](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L305)*

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

*Defined in [xterm.d.ts:331](https://github.com/xtermjs/xterm.js/blob/4.4.0/typings/xterm.d.ts#L331)*

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
