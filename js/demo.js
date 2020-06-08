$(function () {
  // HACK: This should be window.Terminal once upgraded to 4.0.1
  var term = new window.Terminal.Terminal();
  term.open(document.getElementById('terminal'));

  function runFakeTerminal() {
    if (term._initialized) {
      return;
    }

    term._initialized = true;

    term.prompt = () => {
      term.write('\r\n$ ');
    };

    term.writeln('Welcome to xterm.js');
    term.writeln('This is a local terminal emulation, without a real terminal in the back-end.');
    term.writeln('Type some keys and commands to play around.');
    term.writeln('');
    prompt(term);

    term.onData(e => {
      switch (e) {
        case '\r': // Enter
        case '\u0003': // Ctrl+C
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