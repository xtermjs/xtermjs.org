---
title: Using addons
category: Guides
---

Addons are JavaScript modules that attach functions to the [`Terminal`](/docs/api/Terminal/) prototype to extend its functionality.

There are a handful available in the main repository in the [`addons`](https://github.com/sourcelair/xterm.js/tree/master/addons/) directory, but you can even write your own by leveraging on the [xterm.js public API](/docs/).

There are two ways to use addons, depending on whether you are using a module system (only [CommonJS](https://nodejs.org/docs/latest/api/modules.html) and [RequireJS](http://requirejs.org/) are supported currently) or not.

## Using a module system

If you are using [CommonJS](https://nodejs.org/docs/latest/api/modules.html) or [RequireJS](http://requirejs.org/) in your application, you should use the [`loadAddon`](/docs/api/Terminal/#loadaddonaddon-callback) static method to load an addon. Below you can find examples for both cases.

### [CommonJS](https://nodejs.org/docs/latest/api/modules.html) example

```javascript
var term = new Terminal();
var fitAddon = Terminal.loadAddon('fit');

term.open(document.getElementById('#terminal'));

term.fit();          // This method is now available for usage
fitAddon.fit(term);  // This will do the exact same thing
```

### [RequireJS](http://requirejs.org/) example

```javascript
var term = new Terminal();

term.open(document.getElementById('#terminal'));

Terminal.loadAddon('fit', function (fitAddon) {
  term.fit();          // This method is now available for usage
  fitAddon.fit(term);  // This will do the exact same thing
});
```

## Plain browser environment (without a module system)
To use an addon in a plain browser environment, just include the JavaScript file after xterm.js. The function should then be exposed on the Terminal object.

### Example
```html
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="bower_components/xterm.js/dist/xterm.css" />
    <script src="bower_components/xterm.js/dist/xterm.js"></script>
    <script src="bower_components/xterm.js/addons/fit.js"></script>
  </head>
  <body>
    <div id="terminal"></div>
    <script>
      var term = new Terminal();

      term.open(document.getElementById('#terminal'));
      term.fit();  // You can use this method since you loaded the `fit` addon above
    </script>
  </body>
</html>
```