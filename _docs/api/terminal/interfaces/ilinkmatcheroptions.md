---
title: ILinkMatcherOptions
category: API-interfaces
layout: docs
---


# Interface: ILinkMatcherOptions

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

*Defined in [xterm.d.ts:337](https://github.com/meganrogge/xterm.js/blob/4.13.0/typings/xterm.d.ts#L337)*

#### Type declaration:

▸ (): *void*

___

### `Optional` matchIndex

• **matchIndex**? : *number*

*Defined in [xterm.d.ts:319](https://github.com/meganrogge/xterm.js/blob/4.13.0/typings/xterm.d.ts#L319)*

___

### `Optional` priority

• **priority**? : *number*

*Defined in [xterm.d.ts:344](https://github.com/meganrogge/xterm.js/blob/4.13.0/typings/xterm.d.ts#L344)*

___

### `Optional` tooltipCallback

• **tooltipCallback**? : *function*

*Defined in [xterm.d.ts:331](https://github.com/meganrogge/xterm.js/blob/4.13.0/typings/xterm.d.ts#L331)*

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

*Defined in [xterm.d.ts:325](https://github.com/meganrogge/xterm.js/blob/4.13.0/typings/xterm.d.ts#L325)*

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

*Defined in [xterm.d.ts:352](https://github.com/meganrogge/xterm.js/blob/4.13.0/typings/xterm.d.ts#L352)*

#### Type declaration:

▸ (`event`: MouseEvent, `uri`: string): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`event` | MouseEvent |
`uri` | string |
