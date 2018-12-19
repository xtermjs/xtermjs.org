---
title: Using addons
category: Guides
---

Addons are JavaScript modules that attach functions to the [`Terminal`](/docs/api/terminal/classes/terminal/) prototype to extend its functionality.

There are a handful available in the main repository in the [`addons`](https://github.com/sourcelair/xterm.js/tree/master/src/addons/) directory, but you can even write your own by leveraging on the [xterm.js public API](/docs/).

To use an xterm.js addon, you have to:

1. [import it](/docs/guides/import/) into your code
2. pass it as argument to the static method [`Terminal.applyAddon`](/docs/api/terminal/classes/terminal/#applyaddon)

## Example

```javascript
import { Terminal } from 'xterm';
import * as fit from 'xterm/lib/addons/fit/fit';

Terminal.applyAddon(fit);

let term = new Terminal();
term.open(document.getElementById('#terminal'));

term.fit();     // This method is now available for usage
fit.fit(term);  // This will do the exact same thing
```
