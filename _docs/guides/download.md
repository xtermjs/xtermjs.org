---
title: Downloading
category: Guides
---

There are several ways to download xterm.js, depending on the way you want to consume it inside your JavaScript application. We suggest strongly though using a package manager like [NPM](npmjs.org/package/xterm) or [Bower](http://bower.io/).

You can either download official releases of xterm.js or arbitrary commits, which is not encouraged for production usage. All the production ready releases of xterm.js are available at [https://github.com/sourcelair/xterm.js/releases](https://github.com/sourcelair/xterm.js/releases).

## NPM
The best way to download xterm.js for use in your project is through [NPM](npmjs.org/package/xterm).

```
npm install --save xterm
```

## Bower
Another way to download xterm.js for your project is through [Bower](http://bower.io/).

```
bower install --save xterm.js
```

## GitHub Releases
All xterm.js releases are available as tar and zip archives at [https://github.com/sourcelair/xterm.js/releases](https://github.com/sourcelair/xterm.js/releases), to download them manually.

## Clone the Git repository
You can always clone the whole xterm.js repository and checkout any arbitrary commit you would like to use. We suggest not doing this though unless you are certain about your actions, as only official tagged releases of xterm.js are considered production-ready.

```
git clone https://github.com/sourcelair/xterm.js
```

Next, take a look at the different ways of [importing xterm.js](/docs/guides/import) into your project.