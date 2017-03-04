---
title: fullscreen
category: addon
---

The fullscreen addon provides the `toggleFullscreen` method that makes the terminal occupy the full viewport and back.

> ⚠️ **Attention:** Do not forget to include [`addons/fullscreen/fullscreen.css`](https://github.com/sourcelair/xterm.js/blob/master/addons/fullscreen/fullscreen.css)!

```javascript
var Terminal = require('xterm');

Terminal.loadAddon('fullscreen');  // Load the `fullscreen` addon

var term = new Terminal();

term.open(document.getElementById('terminal-container'));  // Open the terminal in #terminal-container

term.toggleFullscreen();  // Now the terminal should occupy the full viewport
term.toggleFullscreen();  // Now the terminal should be back to normal
```

## Methods

### `toggleFullscreen([fullscreen])`

- `fullscreen` - Boolean - Whether to set the terminal to fullscreen mode or not

Set or unset the terminal's fullscreen mode according to the given argument. If no `fullscreen` argument was given, then invert the terminal's fullscreen mode.

#### Example

```javascript
var Terminal = require('xterm');

Terminal.loadAddon('fullscreen');  // Load the `fullscreen` addon

var term = new Terminal();

term.open(document.getElementById('terminal-container'));  // Open the terminal in #terminal-container

term.toggleFullscreen(true);  // Force terminal fullscreen mode
term.toggleFullscreen(false);  // Force removal of terminal's fullscreen mode

// ... user code ...
term.toggleFullscreen()  // Toggle the terminal's fullscreen state
```
