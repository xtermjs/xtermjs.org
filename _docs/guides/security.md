---
title: Security
category: Guides
---

Giving security advices for xterm.js integration developers depends alot on packages you use to build and run your application, whether it is a standalone desktop application or accessible over internet. We cannot cover the varity of these possiblities here and keep focused on terminal aspects in general in conjunction with browser / web technologies.

## Are terminals dangerous?

Terminals are the most fundamental concept for user interaction on all common operating systems. Of course terminals are not dangerous per se, but they offer great power to anyone who can access it. With great power comes great responsibility, sadly not all access attempts might be driven by good intentions. If you have decided to integrate a terminal component into your application, you have to be aware of basic access rules and their security implications. Your application now inherits the danger coming from unintended terminal access with wrong privileges, thus it should strictly follow security policies provided by the system and not try to hide or circumvent them (e.g. deploying a system service with root / administrator privileges to drive terminals along with your application is a really bad idea). If in doubt consider applying further guards to the terminal connection like explicit ssh logins.

Basic rules:
- think twice if you really need a terminal component in your application as it raises the security requirements
- never circumvent security measures provided by the system
- check privileges of your application and whether they apply to the terminal
- go as restrictive as possible, let application users change privileges if needed

## Concerns arising from xterm.js' technology stack

xterm.js provides the terminal logic written in Typescript (Javascript). The screen output relies on semantics provided by a modern HTML engine. Both facts introduce serveral security concerns.

### Javascript

The runtime logic of xterm.js is standalone, thus has no dependencies to other third party Javascript packages. We do this on purpose to avoid attacks through malicious code, that might have been added to a package we cannot control. This very strict handling seems abit paranoid, but keep in mind, that unintended access to a running terminal can not only harm the hosting system, but all systems a terminal session might be connected to. For xterm.js addons this strict rule is not applied (consult the addon maintainer).

For your application, most likely relying on third party packages, we can only encourage you to apply very high security standards when dealing with foreign code, to double check packages' trustworthiness or to take appropriate steps if in doubt.

### HTML engine

By using web technologies for the screen output xterm.js basically inherits all security concerns of web browsers with all known attack vectors. Bad enough? No, it gets worse - by placing a terminal into a HTML document it exposes direct shell access to any Javascript code on that page. Also keystrokes for terminal input have to go through Javascript, thus sensitive data like passwords can be read by any JS code. Users with high security requirements might stop right here and question a terminal solution based on webtechnologies. And yes, they have many good reasons to do so. Still we gonna try to give some advices to integration developers to mitigate most concerns.

**Hints for users with high security requirements**
- **Is the xterm.js application (incl. server component) self-controlled or from a trustworthy, secured and stable source?**  
  If you can answer that question with yes it is probably save to use the application as intented. But keep in mind that even for self deployed solutions the code already can be compromised, thus code audits might be needed to further backup the trust.
- **Does the xterm.js application load many third party ressources?**  
  This is a quite common deployment pattern in modern web development, probably most remote applications that offer terminal interaction via xterm.js are built that way. The problem for terminal I/O here comes from the question whether those third party additions can be trusted. For high security demands this should always be seen as suspicious and not be used unless you have a security report stating otherwise.
- **Are there clear NOGOs?**  
  Yes, probably more than "good conditions". Basically, if you cannot get satisfying answers from the two questions above, the application is more than suspicious and should not be used. Strong indicators, that an application should not be used, are:
    - There are ressources with no valid transport encryption (no TLS or broken certificate).
    - The application updates content from third party ressources (e.g. embedded ads).
    - The application retrieves third party content of unkown trust.
    - Insecure CDN ressources. We strongly discourage the usage of CDN based xterm.js solutions unless the service maintainer and the CDN build a chain of trust (e.g. they are trustworthy and take further steps to secure/authorize the CDN upload).
    - The application has known security issues (e.g. CVE). Of course this depends on the quality of the issue, but as soon as XSS or Javascript in general is involved, avoid that application until it gets fixed.
    - The terminal data has to go through a server component of unkown trust. Never use those popular bash-one-liner for sharing terminal content over an unkown server. If you really have to (e.g for some quick presentations), make sure to only give read access to unsensitive data. If write access or sensitive data is involved, always use trustworthy services. Always try to avoid actions that might further escalate the risk (e.g. password inputs).

**Gain back users' trust - harden your application**  
Lets look at the concerns more in detail and see if we can identify some basic rules to not put every system connected to xterm.js in danger on the first sight.

Note: The following was written with the most security challenging setup in mind - xterm.js embedded on a some webpage accessible through the internet. More contained applications like container / cloud services or standalone desktop programs still share the basic concerns but are less likely affected by others (see notes in the text).

- securing the HTML page (https://cheatsheetseries.owasp.org/)
- XSS and xterm.js (identify problematic API calls)
- new attack vector: terminal-to-webpage threat (identify terminal data as untrusted source)
- websockets
  - emphasize weak security measures by default
    - do not use the demo as it is (incl. attach addon)
    - no origin check, no CORS and such
  - emphasize the need to deploy further countermeasures:
    - TLS transport (wss)
    - authentication/authorization on top
