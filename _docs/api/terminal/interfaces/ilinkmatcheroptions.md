---
title: ILinkMatcherOptions
category: API-interfaces
layout: docs
---


# Interface: ILinkMatcherOptions

An object containing options for a link matcher.

## Hierarchy

**ILinkMatcherOptions**

## Index

### Properties

* [leaveCallback]({% link _docs/api/terminal/interfaces/ilinkmatcheroptions.md %}#leavecallback)
* [matchIndex]({% link _docs/api/terminal/interfaces/ilinkmatcheroptions.md %}#matchindex)
* [priority]({% link _docs/api/terminal/interfaces/ilinkmatcheroptions.md %}#priority)
* [tooltipCallback]({% link _docs/api/terminal/interfaces/ilinkmatcheroptions.md %}#tooltipcallback)
* [validationCallback]({% link _docs/api/terminal/interfaces/ilinkmatcheroptions.md %}#validationcallback)
* [willLinkActivate]({% link _docs/api/terminal/interfaces/ilinkmatcheroptions.md %}#willlinkactivate)

---

## Properties

<a id="leavecallback"></a>

### `<Optional>` leaveCallback

**● leaveCallback**: *`function`*

*Defined in [xterm.d.ts:293](https://github.com/xtermjs/xterm.js/blob/4.2.0/typings/xterm.d.ts#L293)*

A callback that fires when the mouse leaves a link. Note that this can happen even when tooltipCallback hasn't fired for the link yet.

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="matchindex"></a>

### `<Optional>` matchIndex

**● matchIndex**: *`number`*

*Defined in [xterm.d.ts:276](https://github.com/xtermjs/xterm.js/blob/4.2.0/typings/xterm.d.ts#L276)*

The index of the link from the regex.match(text) call. This defaults to 0 (for regular expressions without capture groups).

___
<a id="priority"></a>

### `<Optional>` priority

**● priority**: *`number`*

*Defined in [xterm.d.ts:300](https://github.com/xtermjs/xterm.js/blob/4.2.0/typings/xterm.d.ts#L300)*

The priority of the link matcher, this defines the order in which the link matcher is evaluated relative to others, from highest to lowest. The default value is 0.

___
<a id="tooltipcallback"></a>

### `<Optional>` tooltipCallback

**● tooltipCallback**: *`function`*

*Defined in [xterm.d.ts:287](https://github.com/xtermjs/xterm.js/blob/4.2.0/typings/xterm.d.ts#L287)*

A callback that fires when the mouse hovers over a link for a moment.

#### Type declaration
▸(event: *`MouseEvent`*, uri: *`string`*, location: *[IViewportRange]({% link _docs/api/terminal/interfaces/iviewportrange.md %})*): `boolean` \| `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `MouseEvent` |
| uri | `string` |
| location | [IViewportRange]({% link _docs/api/terminal/interfaces/iviewportrange.md %}) |

**Returns:** `boolean` \| `void`

___
<a id="validationcallback"></a>

### `<Optional>` validationCallback

**● validationCallback**: *`function`*

*Defined in [xterm.d.ts:282](https://github.com/xtermjs/xterm.js/blob/4.2.0/typings/xterm.d.ts#L282)*

A callback that validates whether to create an individual link, pass whether the link is valid to the callback.

#### Type declaration
▸(uri: *`string`*, callback: *`function`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| uri | `string` |
| callback | `function` |

**Returns:** `void`

___
<a id="willlinkactivate"></a>

### `<Optional>` willLinkActivate

**● willLinkActivate**: *`function`*

*Defined in [xterm.d.ts:308](https://github.com/xtermjs/xterm.js/blob/4.2.0/typings/xterm.d.ts#L308)*

A callback that fires when the mousedown and click events occur that determines whether a link will be activated upon click. This enables only activating a link when a certain modifier is held down, if not the mouse event will continue propagation (eg. double click to select word).

#### Type declaration
▸(event: *`MouseEvent`*, uri: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `MouseEvent` |
| uri | `string` |

**Returns:** `boolean`

___

