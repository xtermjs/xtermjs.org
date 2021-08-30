$(function () {
  var term = new window.Terminal({
    fontFamily: '"Cascadia Code", Menlo, monospace',
    // rendererType: 'dom'
  });
  term.open(document.querySelector('.demo .inner'));

  function runFakeTerminal() {
    if (term._initialized) {
      return;
    }

    term._initialized = true;

    term.prompt = () => {
      term.write('\r\n$ ');
    };

    // TODO: Use a nicer default font
    term.writeln([
      '    Xterm.js is the frontend component that powers many terminals including',
      '                           \x1b[3mVS Code\x1b[0m, \x1b[3mHyper\x1b[0m and \x1b[3mTheia\x1b[0m!',
      '',
      ' ┌ \x1b[1mFeatures\x1b[0m ──────────────────────────────────────────────────────────────────┐',
      ' │                                                                            │',
      ' │  \x1b[1mApps just work                         Performance\x1b[0m                        │',
      // TODO: Link to https://www.npmjs.com/package/xterm-addon-webgl
      ' │    Xterm.js works with most terminal     Xterm.js is \x1b[3mfast\x1b[0m and includes an  │',
      ' │    apps like bash, vim and tmux          optional WebGL-based renderer     │',
      ' │                                                                            │',
      ' │  \x1b[1mUnicode support                        Self-contained\x1b[0m                     │',
      ' │    Supports CJK, emojis and IMEs         Zero external dependencies        │',
      ' │                                                                            │',
      ' │  \x1b[1mAccessible                             And much more...\x1b[0m                   │',
      // TODO: Links/buttons
      ' │    A screen reader mode is available     Links, themes, addons, typed API  │',
      ' │                                                                            │',
      ' └────────────────────────────────────────────────────────────────────────────┘',
      ''
    ].join('\n\r'));

    term.writeln('Welcome to xterm.js');
    term.writeln('This is a local terminal emulation, without a real terminal in the back-end.');
    term.writeln('Type some keys and commands to play around.');
    term.writeln('');
    prompt(term);

    term.onData(e => {
      switch (e) {
        case '\u0003': // Ctrl+C
          term.write('^C');
        case '\r': // Enter
          prompt(term);
          break;
        case '\u007F': // Backspace (DEL)
          // Do not delete the prompt
          if (term._core.buffer.x > 2) {
            term.write('\b \b');
          }
          break;
        default: // Print all other characters for demo
          term.write(e);
      }
    });
  }

  function prompt(term) {
    term.write('\r\n$ ');
  }  
  runFakeTerminal();
});