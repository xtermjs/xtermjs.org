## Getting Started

First you need to install the module, we ship exclusively through [npm](https://www.npmjs.com/) so you need that installed and then add xterm.js as a dependency by running:

```
npm install xterm
```

To start using xterm.js on your browser, add the `xterm.js` and `xterm.css` to the head of your html page. Then create a `<div id="terminal"></div>` onto which xterm can attach itself. Finally instantiate the `Terminal` object and then call the `open` function with the DOM object of the `div`.

```html
<!doctype html>
  <html>
    <head>
      <link rel="stylesheet" href="node_modules/@xterm/xterm/css/xterm.css" />
      <script src="node_modules/@xterm/xterm/lib/xterm.js"></script>
    </head>
    <body>
      <div id="terminal"></div>
      <script>
        var term = new Terminal();
        term.open(document.getElementById('terminal'));
        term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
      </script>
    </body>
  </html>
```
