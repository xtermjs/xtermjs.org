---
title: Terminal
category: API
layout: docs
---

## Methods

### `write(text)`

- `text` - String - The text to write to the terminal.

> Writes the given text to the terminal.

```javascript
// Writes "Hello World!" in the terminal.
term.write('Hello World!')
```

### `writeln(text)`

- `text` - String - The text to write to the terminal.

> Writes the given text to the terminal, followed by a line break (`\n`).

```javascript
// Writes "Hello World!\n" in the terminal.
term.write('Hello World!')
```