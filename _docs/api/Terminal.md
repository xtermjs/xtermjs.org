---
title: Terminal
category: API
layout: docs
---

`Terminal` is the main class of xterm.js. It is used to construct terminal objects and allow programmatic manipulation of them.

```javascript
var term = new Terminal();

// Exposes the terminal in an existing DOM object.
term.open(document.getElementById('xterm-container'));
```

## Methods

### `attachCustomKeydownHandler(customKeydownHandler)`

- `customKeydownHandler` - Function - The custom KeyboardEvent handler to attach.

> Run a custom keydown handler before any keys are processed and
allow consumers to decide what keys should be processed by the terminal.

```javascript
// Completely ignore the `Esc` key using a custom keydown handler.
term.attachCustomKeydownHandler(function (e) {
  if (e.keyCode == 27) {
    // Do nothing
    e.preventDefault();
    return false;
  }
});
```

### `blur`

> Remove the focus from the terminal

```javascript
term.blur();
```

### `clear`

>  Clears the entire buffer of the terminal, making the prompt line the new first line.

```javascript
term.clear();
```

### `destroy`

>  Destroys the terminal and detaches it from the DOM.

```javascript
term.destroy();
```

### `focus`

> Focus on the terminal

```javascript
term.focus();
```

### `getOption(key)`

- `key` - String - The option key

> Retrieves an option from the terminal.

```javascript
var doesTheTerminalCursorBlink = term.getOption('cursorBlink');
```

### `on(event, callback)`

- `event` - string - The event to attach the callback
- `callback` - Function - The callback to run on the event

> Attach a callback to run on a specific event.

```javascript
function logResize(size) {
  console.log('Resized to ' + size.cols + ' cols and ' + size.rows + ' rows.');
}

// Log the terminal's size when it gets resized.
term.on('resize', logResize)
```

### `off(event, callback)`

- `event` - string - The event from which to detach the callback
- `callback` - Function - The callback to stop running on the event

> Stop running a callback on an event.

```javascript
// Stop logging the terminal's size when it gets resized.
term.off('resize', logResize)
```

### `open(parent)`

- `parent` - HTMLElement - The DOM element to host the terminal

> Open the terminal into the given parent element

```javascript
var terminalParent = document.getElementById('xterm-container');

// Expose the terminal into `terminalParent`.
term.open(terminalParent);
```

### `refresh(start, end, queue)`

- `start` - Number - The first row to be refreshed
- `end` - Number - The last row to be refreshed
- `queue` - Boolean - Queue the refresh to run asynchronously, when it's more optimal

> Refresh (re-render) the terminal content between two rows (inclusive).

```javascript
var terminalParent = document.getElementById('xterm-container');

// Refresh the contents of the terminal from the 10th to the 20th line.
term.refresh(10, 20);
```

### `reset()`

> Reset the terminal; reconstruct the instance and re-render the whole screen.

```javascript
term.reset();
```

### `resize(x, y)`

- `x` - Number - The number of columns to set to the terminal
- `y` - Number - The number of rows to set to the terminal

> Resize the geometry of the terminal.

```javascript
// Set the terminal to 120 columns wide and 80 rows tall
term.resize(120, 80);
```

### `scrollDisp(n)`

- `n` - Number - The number of rows to scroll down (or up if negative)

> Resize the geometry of the terminal.

```javascript
// Scroll the terminal down by 5 rows
term.scrollDisp(5);

// Then scroll up to the previous position
term.scrollDisp(-5);
```

### `setOption(key, value)`

- `key` - String - The option key
- `value` - The option value

> Sets an option on the terminal.

```javascript
term.setOption('cursorBlink', true);
```

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