---
title: Security
category: Guides
---

Giving security advices for xterm.js depends alot on your integration like the packages you use to build and run it, whether it is a standalone desktop application or accessible over internet. We cannot cover the varity of these possiblities here and keep focused on terminal aspects in general in conjunction with browser / web technologies.

## Are terminals dangerous?

Terminals are the most fundamental concept for user interaction on all common operating systems. Of course terminals are not dangerous per se, but they offer great power to anyone who can access it. With great power comes great responsibility, sadly not all access attempts might be driven by good intentions. If you have decided to integrate a terminal component in your application, you have to be aware of basic access rules and security implications. Your application now inherits the danger coming from unintended terminal access, thus it should follow security policies provided by the system and not try to hide or circumvent them (e.g. deploying a system service with root / administrator privileges to drive terminals along with your application is a really bad idea). If in doubt consider applying further guards to the terminal connection itself like explicit ssh logins.

Basic rules:
- think twice if you really need a terminal component in your application
- never circumvent security measures provides by the system
- check privileges of your application and whether they should be applied for the terminal component as well
- go as restrictive as possible, let application users change privileges if needed

## Concerns arising from xterm.js

xterm.js provides the terminal logic written in Typescript (Javascript). The screen screen output relies on semantics provided by a modern HTML engine. Both facts introduce serveral security concerns.

**Javascript**
The runtime logic of xterm.js is standalone, thus has no dependencies to other third party Javascript packages. We do this on purpose to avoid possible attacks through malicious code, that might have been added to a package we cannot control. This very strict handling seems abit paranoid, but keep in mind, that unintended access to a running terminal can not only harm the hosting system, but all systems a terminal session might be connected to.

For your application, most likely relying on third party packages, we can only encourage you to apply very high security standards when dealing with foreign code, to double check packages' trustworthiness or to take appropriate steps if in doubt.

**HTML engine**
By using web technologies for the screen output xterm.js basically inherits all security concerns of web browsers with all possible attack vectors. Bad enough? No, it gets worse - by placing a terminal into a HTML document it gives direct system access to any Javascript on that page (which also shortcuts browser security measures like process sandboxing). Outch.


-cdn?
-ads in pages?
-other foreign stuff?

**websockets**
