---
category: addons-modules
layout: docs
---

## Index

### Functions

* [apply]({% link _docs/api/addons/modules/weblinks.md %}#apply)
* [webLinksInit]({% link _docs/api/addons/modules/weblinks.md %}#weblinksinit)



---

## Functions

<a id="apply"></a>

###  apply

▸ **apply**(terminalConstructor: *`Terminal`*): `void`



*Defined in [webLinks/webLinks.ts:44](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L44)*



**Parameters:**

| Param | Type |
| ------ | ------ |
| terminalConstructor | `Terminal` |




**Returns:** `void`





___
<a id="weblinksinit"></a>

###  webLinksInit

▸ **webLinksInit**(term: *`Terminal`*, handler?: *`function`*, options?: *`ILinkMatcherOptions`*): `void`



*Defined in [webLinks/webLinks.ts:39](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L39)*



Initialize the web links addon, registering the link matcher.


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| term | `Terminal` | - |  The terminal to use web links within. |
| `Default value` handler | `function` |  handleLink |  A custom handler to use. |
| `Default value` options | `ILinkMatcherOptions` |  {} |  Custom options to use, matchIndex will always be ignored. |




**Returns:** `void`





___

