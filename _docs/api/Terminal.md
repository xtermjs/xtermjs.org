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

## Constructor

Create a new terminal by using the `Terminal([options])` constructor.

### Options

#### `cursorBlink` (boolean)

Whether the terminal cursor blinks

#### `cols` (number)

The number of columns of the terminal (horizontal size).

#### `rows` (number)

The number of rows of the terminal (vertical size).

### Example

```javascript
var term = new Terminal({
  cursorBlink: false,  // Do not blink the terminal's cursor
  cols: 120,  // Set the terminal's width to 120 columns
  rows: 80  // Set the terminal's height to 80 rows
});
```

## Attributes

### `element`

The DOM element that hosts the terminal.

```javascript
// Log the class(es) of the terminal's host element
console.log(term.element.classList);
```

### `textarea`

The textarea element of the terminal that controls all input.

```javascript
// Log the keyCode of every keyDown event
term.textarea.onkeydown = function (e) {
  console.log('User pressed key with keyCode: ', e.keyCode);
}
```


## Methods

### `attachCustomKeydownHandler(customKeydownHandler)`

- `customKeydownHandler` - Function - The custom KeyboardEvent handler to attach.

Attach a custom keydown handler to allow consumers to allow certain key strokes
to skip processing by the terminal.

```javascript
// Completely ignore the `Tab` key using a custom keydown handler.
term.attachCustomKeydownHandler(function (e) {
  if (e.keyCode == 9) {
    // Do nothing
    e.preventDefault();
    return false;
  }
});
```

### `blur`

Remove the focus from the terminal.

```javascript
term.blur();
```

### `clear`

 Clears the entire buffer of the terminal, making the prompt line the new first line.

```javascript
term.clear();
```

### `destroy`

 Destroys the terminal and detaches it from the DOM.

```javascript
term.destroy();
```

### `focus`

Focus on the terminal

```javascript
term.focus();
```

### `getOption(key)`

- `key` - String - The option key

Retrieves an option from the terminal.

```javascript
var doesTheTerminalCursorBlink = term.getOption('cursorBlink');
```

### `on(event, callback)`

- `event` - string - The event to attach the callback
- `callback` - Function - The callback to run on the event

Attach a callback to run on a specific event.

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

Stop running a callback on an event.

```javascript
// Stop logging the terminal's size when it gets resized.
term.off('resize', logResize)
```

### `open(parent)`

- `parent` - HTMLElement - The DOM element to host the terminal

Open the terminal into the given parent element

```javascript
var terminalParent = document.getElementById('xterm-container');

// Expose the terminal into `terminalParent`.
term.open(terminalParent);
```

### `refresh(start, end, queue)`

- `start` - Number - The first row to be refreshed
- `end` - Number - The last row to be refreshed
- `queue` - Boolean - Queue the refresh to run asynchronously, when it's more optimal

Refresh (re-render) the terminal content between two rows (inclusive).

```javascript
var terminalParent = document.getElementById('xterm-container');

// Refresh the contents of the terminal from the 10th to the 20th line.
term.refresh(10, 20);
```

### `reset()`

Reset the terminal; reconstruct the instance and re-render the whole buffer.

```javascript
term.reset();
```

### `resize(x, y)`

- `x` - Number - The number of columns to set to the terminal
- `y` - Number - The number of rows to set to the terminal

Resize the geometry of the terminal.

```javascript
// Set the terminal to 120 columns wide and 80 rows tall
term.resize(120, 80);
```

### `scrollDisp(n)`

- `n` - Number - The number of rows to scroll down (or up if negative)

Scroll the terminal by a number of lines.

```javascript
// Scroll the terminal down by 5 rows
term.scrollDisp(5);

// Then scroll up to the previous position
term.scrollDisp(-5);
```

### `scrollPages(n)`

- `n` - Number - The number of pages to scroll down (or up if negative)

Scroll the terminal by a number of pages.

```javascript
// Scroll the terminal down 1 page
term.scrollDisp(1);

// Then scroll up to the previous position
term.scrollDisp(-1);
```

### `scrollToTop()`

Scrolls the terminal to the top of the buffer.

```javascript
term.scrollToTop();
```

### `scrollToBottom()`

Scrolls the terminal to the bottom of the buffer.

```javascript
term.scrollToBottom();
```

### `setOption(key, value)`

- `key` - String - The option key
- `value` - The option value

Sets an option on the terminal.

```javascript
term.setOption('cursorBlink', true);
```

### `write(text)`

- `text` - String - The text to write to the terminal.

Writes the given text to the terminal.

```javascript
// Writes "Hello World!" in the terminal.
term.write('Hello World!')
```

### `writeln(text)`

- `text` - String - The text to write to the terminal.

Writes the given text to the terminal, followed by a line break (`\n`).

```javascript
// Writes "Hello World!\n" in the terminal.
term.write('Hello World!')
```


## Events

The `Terminal` instances emit the following events.

You can listen to an event with the [`on`](#onevent-callback) method and
stop listening to an event with the [`off`](#onevent-callback) method.

### `blur`

Emitted when the terminal blurs (loses focus).

### `data`

- `data` - String - The data to be handled by the terminal

Emitted when a chunch of data is being dispatched to the terminal for handling.

### `focus`

Emitted when the terminal gets focus.

### `key`

- `key` - String - The key that got handled
- `e` - KeyboardEvent - The original `keydown` or `keypress` event

Emitted when the terminal handles a keydown or keypress event.

### `keydown`

- `e` - KeyboardEvent - The original `keydown`

Emitted after a `keydown` event on the terminal.

### `keypress`

- `e` - KeyboardEvent - The original `keypress`

Emitted after a `keypress` event on the terminal.

### `open`

Emitted when the terminal gets opened in a DOM element.

### `refresh`

- `data` - Object - `{element: this.element,  start: start, end: end}`

Emitted when the terminal gets a content refresh (re-render).

### `resize`

- `data` - Object - `{terminal: this, cols: x, rows: y}`

Emitted when the terminal gets resized to a new geometry.

### `scroll`

- `ydisp` - Number - The number of rows the terminal scrolled down (or up if negative).

Emitted when the terminal scrolls vertically. This event can be emitted manually to synchronize the scroll bar, this is useful if the terminal was resized while it was `display: none`.

