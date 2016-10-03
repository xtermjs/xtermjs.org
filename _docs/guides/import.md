---
title: Importing
category: Guides
---

Xterm.js ships its core and add-ons as [UMD modules](https://github.com/umdjs/umd), which means it should work in all mainstream JavaScript environments; from a plain browser, to Node.js and Electron app.

> **⚠️  Attention!** Do not forget to import the [CSS stylesheet](https://github.com/sourcelair/xterm.js/blob/master/src/xterm.css) of xterm.js into your app to get it working appropriately.

## Native modules

```javascript
import xterm as Terminal
```

## CommonJS

```javascript
let Terminal = require('xterm');
```

## Asynchronous Module System (AMD)

```javascript
define(['path/to/xterm/src/xterm'], function (Terminal) {
  // Your code here
});
```

## Plain browser (no module system)

```html
<script src="/path/to/xterm/js/xterm.js"></script>
```