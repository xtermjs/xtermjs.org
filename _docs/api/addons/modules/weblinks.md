---
category: addons-modules
layout: docs
---

## Index

### Variables

* [bodyClause]({% link _docs/api/addons/modules/weblinks.md %}#bodyclause)
* [domainBodyClause]({% link _docs/api/addons/modules/weblinks.md %}#domainbodyclause)
* [domainCharacterSet]({% link _docs/api/addons/modules/weblinks.md %}#domaincharacterset)
* [end]({% link _docs/api/addons/modules/weblinks.md %}#end)
* [hashFragmentClause]({% link _docs/api/addons/modules/weblinks.md %}#hashfragmentclause)
* [hostClause]({% link _docs/api/addons/modules/weblinks.md %}#hostclause)
* [ipClause]({% link _docs/api/addons/modules/weblinks.md %}#ipclause)
* [localHostClause]({% link _docs/api/addons/modules/weblinks.md %}#localhostclause)
* [negatedDomainCharacterSet]({% link _docs/api/addons/modules/weblinks.md %}#negateddomaincharacterset)
* [negatedPathCharacterSet]({% link _docs/api/addons/modules/weblinks.md %}#negatedpathcharacterset)
* [pathClause]({% link _docs/api/addons/modules/weblinks.md %}#pathclause)
* [portClause]({% link _docs/api/addons/modules/weblinks.md %}#portclause)
* [protocolClause]({% link _docs/api/addons/modules/weblinks.md %}#protocolclause)
* [queryStringClause]({% link _docs/api/addons/modules/weblinks.md %}#querystringclause)
* [queryStringHashFragmentCharacterSet]({% link _docs/api/addons/modules/weblinks.md %}#querystringhashfragmentcharacterset)
* [start]({% link _docs/api/addons/modules/weblinks.md %}#start)
* [strictUrlRegex]({% link _docs/api/addons/modules/weblinks.md %}#stricturlregex)
* [tldClause]({% link _docs/api/addons/modules/weblinks.md %}#tldclause)


### Functions

* [apply]({% link _docs/api/addons/modules/weblinks.md %}#apply)
* [handleLink]({% link _docs/api/addons/modules/weblinks.md %}#handlelink)
* [webLinksInit]({% link _docs/api/addons/modules/weblinks.md %}#weblinksinit)



---

## Variables

<a id="bodyclause"></a>

### `<Const>` bodyClause

**● bodyClause**: *`string`* =  hostClause + pathClause + queryStringClause + hashFragmentClause

*Defined in [webLinks/webLinks.ts:24](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L24)*





___
<a id="domainbodyclause"></a>

### `<Const>` domainBodyClause

**● domainBodyClause**: *`string`* =  '(' + domainCharacterSet + ')'

*Defined in [webLinks/webLinks.ts:13](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L13)*





___
<a id="domaincharacterset"></a>

### `<Const>` domainCharacterSet

**● domainCharacterSet**: *"[\da-z\.-]+"* = "[\da-z\.-]+"

*Defined in [webLinks/webLinks.ts:11](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L11)*





___
<a id="end"></a>

### `<Const>` end

**● end**: *`string`* =  ')($|' + negatedPathCharacterSet + ')'

*Defined in [webLinks/webLinks.ts:26](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L26)*





___
<a id="hashfragmentclause"></a>

### `<Const>` hashFragmentClause

**● hashFragmentClause**: *`string`* =  '(#' + queryStringHashFragmentCharacterSet + ')?'

*Defined in [webLinks/webLinks.ts:22](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L22)*





___
<a id="hostclause"></a>

### `<Const>` hostClause

**● hostClause**: *`string`* =  '((' + domainBodyClause + '\\.' + tldClause + ')|' + ipClause + '|' + localHostClause + ')' + portClause + '?'

*Defined in [webLinks/webLinks.ts:18](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L18)*





___
<a id="ipclause"></a>

### `<Const>` ipClause

**● ipClause**: *"((\d{1,3}\.){3}\d{1,3})"* = "((\d{1,3}\.){3}\d{1,3})"

*Defined in [webLinks/webLinks.ts:15](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L15)*





___
<a id="localhostclause"></a>

### `<Const>` localHostClause

**● localHostClause**: *"(localhost)"* = "(localhost)"

*Defined in [webLinks/webLinks.ts:16](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L16)*





___
<a id="negateddomaincharacterset"></a>

### `<Const>` negatedDomainCharacterSet

**● negatedDomainCharacterSet**: *"[^\da-z\.-]+"* = "[^\da-z\.-]+"

*Defined in [webLinks/webLinks.ts:12](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L12)*





___
<a id="negatedpathcharacterset"></a>

### `<Const>` negatedPathCharacterSet

**● negatedPathCharacterSet**: *"[^\/\w\.\-%]+"* = "[^\/\w\.\-%]+"

*Defined in [webLinks/webLinks.ts:23](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L23)*





___
<a id="pathclause"></a>

### `<Const>` pathClause

**● pathClause**: *"(\/[\/\w\.\-%~]*)*"* = "(\/[\/\w\.\-%~]*)*"

*Defined in [webLinks/webLinks.ts:19](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L19)*





___
<a id="portclause"></a>

### `<Const>` portClause

**● portClause**: *"(:\d{1,5})"* = "(:\d{1,5})"

*Defined in [webLinks/webLinks.ts:17](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L17)*





___
<a id="protocolclause"></a>

### `<Const>` protocolClause

**● protocolClause**: *"(https?:\/\/)"* = "(https?:\/\/)"

*Defined in [webLinks/webLinks.ts:10](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L10)*





___
<a id="querystringclause"></a>

### `<Const>` queryStringClause

**● queryStringClause**: *`string`* =  '(\\?' + queryStringHashFragmentCharacterSet + ')?'

*Defined in [webLinks/webLinks.ts:21](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L21)*





___
<a id="querystringhashfragmentcharacterset"></a>

### `<Const>` queryStringHashFragmentCharacterSet

**● queryStringHashFragmentCharacterSet**: *"[0-9\w\[\]\(\)\/\?\!#@$%&amp;&#x27;*+,:;~\&#x3D;\.\-]*"* = "[0-9\w\[\]\(\)\/\?\!#@$%&'*+,:;~\=\.\-]*"

*Defined in [webLinks/webLinks.ts:20](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L20)*





___
<a id="start"></a>

### `<Const>` start

**● start**: *`string`* =  '(?:^|' + negatedDomainCharacterSet + ')('

*Defined in [webLinks/webLinks.ts:25](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L25)*





___
<a id="stricturlregex"></a>

### `<Const>` strictUrlRegex

**● strictUrlRegex**: *`RegExp`* =  new RegExp(start + protocolClause + bodyClause + end)

*Defined in [webLinks/webLinks.ts:27](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L27)*





___
<a id="tldclause"></a>

### `<Const>` tldClause

**● tldClause**: *"([a-z\.]{2,6})"* = "([a-z\.]{2,6})"

*Defined in [webLinks/webLinks.ts:14](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L14)*





___

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
<a id="handlelink"></a>

###  handleLink

▸ **handleLink**(event: *`MouseEvent`*, uri: *`string`*): `void`



*Defined in [webLinks/webLinks.ts:29](https://github.com/xtermjs/xterm.js/blob/master/src/addons/webLinks/webLinks.ts#L29)*



**Parameters:**

| Param | Type |
| ------ | ------ |
| event | `MouseEvent` |
| uri | `string` |




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

