---
title: fit
category: addon
---

The fit addon provides the `fit` method that lets you adjust the size and geometry (columns 𝗑 rows) of the terminal to fit the size of the parent element.

```ts
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';

const term = new Terminal();
const fitAddon = new FitAddon();
term.loadAddon(fitAddon);

// Open the terminal in #terminal-container
term.open(document.getElementById('terminal-container'));

// Make the terminal's size and geometry fit the size of #terminal-container
fitAddon.fit();
```
