---
category: addons-modules
layout: docs
---

## Index

### Functions

* [apply]({% link _docs/api/addons/modules/search.md %}#apply)
* [findNext]({% link _docs/api/addons/modules/search.md %}#findnext)
* [findPrevious]({% link _docs/api/addons/modules/search.md %}#findprevious)



---

## Functions

<a id="apply"></a>

###  apply

▸ **apply**(terminalConstructor: *`Terminal`*): `void`



*Defined in [search/search.ts:40](https://github.com/xtermjs/xterm.js/blob/master/src/addons/search/search.ts#L40)*



**Parameters:**

| Param | Type |
| ------ | ------ |
| terminalConstructor | `Terminal` |




**Returns:** `void`





___
<a id="findnext"></a>

###  findNext

▸ **findNext**(terminal: *`Terminal`*, term: *`string`*): `boolean`



*Defined in [search/search.ts:18](https://github.com/xtermjs/xterm.js/blob/master/src/addons/search/search.ts#L18)*



Find the next instance of the term, then scroll to and select it. If it doesn't exist, do nothing.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| terminal | `Terminal` |
| term | `string` |  Tne search term. |




**Returns:** `boolean`
Whether a result was found.






___
<a id="findprevious"></a>

###  findPrevious

▸ **findPrevious**(terminal: *`Terminal`*, term: *`string`*): `boolean`



*Defined in [search/search.ts:32](https://github.com/xtermjs/xterm.js/blob/master/src/addons/search/search.ts#L32)*



Find the previous instance of the term, then scroll to and select it. If it doesn't exist, do nothing.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| terminal | `Terminal` |
| term | `string` |  Tne search term. |




**Returns:** `boolean`
Whether a result was found.






___

