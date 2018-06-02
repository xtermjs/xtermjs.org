---
title: Connecting to Terminado
category: Guides
---

Xterm.js can connect to backends other than the default node.js backend, as an example we will build a simple [Terminado](https://github.com/takluyver/terminado) application, and hook up to it with xterm.js. Terminado is a python/tornado websocket host for terminal applications.

We begin by downloading and installing Terminado with `pip install terminado`.  The script for a basic `Terminado` application is surprisingly simple:

```python
import tornado.web
from tornado.ioloop import IOLoop
from terminado import TermSocket, SingleTermManager

if __name__ == '__main__':
    term_manager = SingleTermManager(shell_command=['bash'])
    handlers = [
                (r"/websocket", TermSocket, {'term_manager': term_manager}),
                (r"/()", tornado.web.StaticFileHandler, {'path':'index.html'}),
                (r"/(.*)", tornado.web.StaticFileHandler, {'path':'.'}),
               ]
    app = tornado.web.Application(handlers)
    app.listen(8010)
    IOLoop.current().start()
```

This script (referred to as `app.py`) is adapted from the [`Terminado` "single" example](https://github.com/takluyver/terminado/blob/master/demos/single.py).  This application requires an `index.html` that correctly hooks `Xterm.js` up to the websockets provided by the `Terminado` server at the `/websocket` endpoint. We will make use of the `terminado` addon provided by `Xterm.js` itself to create a barebones example:

```html
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="/dist/xterm.css" />
    <link rel="stylesheet" href="/demo/style.css" />
    <script src="/dist/xterm.js"></script>
    <script src="/dist/addons/terminado/terminado.js"></script>
  </head>
  <body>
    <div class="container">
      <div id="terminal-container"></div>
    </div>
    <script>
      terminado.apply(Terminal);

      var term = new Terminal(),
          protocol = (location.protocol === 'https:') ? 'wss://' : 'ws://',
          socketURL = protocol + location.hostname + ((location.port) ? (':' + location.port) : '') + "/websocket";
          sock = new WebSocket(socketURL);

      sock.addEventListener('open', function () {
        term.terminadoAttach(sock);
      });

      term.open(document.getElementById('terminal-container'));
    </script>
  </body>
</html>
```

Save this file as `index.html` alongside `app.py` in the root directory of the `Xterm.js` repository, run the application via `python app.py` and connect to `http://localhost:8010` to see a terminal created within your browser.

## Terminado communications protocol

The difference between the `terminadoAttach()` function provided by the `terminado` addon and the `attach()` function provided by the `attach` addon are minor. `Terminado` simply requires messages declare the type of data they carry by sending (for example) `['stdin', stdin_data]` instead of `stdin_data` over the websockets. The differences between the two addons can be easily seen by diff'ing the two addons' javascript files in the `dist/addons` directory of the `xterm.js` repository.
