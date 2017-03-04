---
title: fit
category: addon
---

The fit addon provides the `fit` method that lets you adjust the size and geometry (columns 𝗑 rows) of the terminal to fit the size of the parent element.

```javascript
var Terminal = require('xterm');

Terminal.loadAddon('fit');  // Load the `fit` addon

var term = new Terminal();

term.open(document.getElementById('terminal-container'));  // Open the terminal in #terminal-container

term.fit();  // Make the terminal's size and geometry fit the size of #terminal-container
```

## Methods

### `fit()`

Adjusts the size and geometry of the given terminal to fit the size of it's parent element.

#### Example

```javascript
term.fit();  // Make the terminal's size and geometry fit the size of #terminal-container
```
