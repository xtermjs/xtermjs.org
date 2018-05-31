---
category: addons-modules
layout: docs
---

## Index

### Interfaces

* [IZmodemOptions]({% link _docs/api/addons/interfaces/izmodemoptions.md %})


### Variables

* [zmodem]({% link _docs/api/addons/modules/zmodem.md %}#zmodem)


### Functions

* [apply]({% link _docs/api/addons/modules/zmodem.md %}#apply)
* [zmodemAttach]({% link _docs/api/addons/modules/zmodem.md %}#zmodemattach)



---

## Variables

<a id="zmodem"></a>

### `<Let>` zmodem

**● zmodem**: *`any`*

*Defined in [zmodem/zmodem.ts:39](https://github.com/xtermjs/xterm.js/blob/master/src/addons/zmodem/zmodem.ts#L39)*



Allow xterm.js to handle ZMODEM uploads and downloads.

This addon is a wrapper around zmodem.js. It adds the following to the Terminal class:

*   function `zmodemAttach(<WebSocket>, <Object>)` \- creates a Zmodem.Sentry on the passed WebSocket object. The Object passed is optional and can contain:
    
    ```
    - noTerminalWriteOutsideSession: Suppress writes from the Sentry
         object to the Terminal while there is no active Session. This
         is necessary for compatibility with, for example, the
         `attach.js` addon.
    ```
    
*   event `zmodemDetect` \- fired on Zmodem.Sentry’s `on_detect` callback. Passes the zmodem.js Detection object.
    
*   event `zmodemRetract` \- fired on Zmodem.Sentry’s `on_retract` callback.
    

You’ll need to provide logic to handle uploads and downloads. See zmodem.js’s documentation for more details.

**IMPORTANT:** After you confirm() a zmodem.js Detection, if you have used the `attach` or `terminado` addons, you’ll need to suspend their operation for the duration of the ZMODEM session. (The demo does this via `detach()` and a re-`attach()`.)




___

## Functions

<a id="apply"></a>

###  apply

▸ **apply**(terminalConstructor: *`Terminal`*): `void`



*Defined in [zmodem/zmodem.ts:88](https://github.com/xtermjs/xterm.js/blob/master/src/addons/zmodem/zmodem.ts#L88)*



**Parameters:**

| Param | Type |
| ------ | ------ |
| terminalConstructor | `Terminal` |




**Returns:** `void`





___
<a id="zmodemattach"></a>

###  zmodemAttach

▸ **zmodemAttach**(ws: *`WebSocket`*, opts?: *[IZmodemOptions]({% link _docs/api/addons/interfaces/izmodemoptions.md %})*): `void`



*Defined in [zmodem/zmodem.ts:45](https://github.com/xtermjs/xterm.js/blob/master/src/addons/zmodem/zmodem.ts#L45)*



**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| ws | `WebSocket` | - |
| `Default value` opts | [IZmodemOptions]({% link _docs/api/addons/interfaces/izmodemoptions.md %}) |  {} |




**Returns:** `void`





___

