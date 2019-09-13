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

        term.onKey(e => {
            const printable = !e.domEvent.altKey && !e.domEvent.altGraphKey && !e.domEvent.ctrlKey && !e.domEvent.metaKey;

            if (e.domEvent.keyCode === 13) {
                prompt(term);
            } else if (e.domEvent.keyCode === 8) {
                // Do not delete the prompt
                if (term._core.buffer.x > 2) {
                    term.write('\b \b');
                }
            } else if (printable) {
                term.write(e.key);
            }
        });
    }

    function prompt(term) {
      term.write('\r\n$ ');
    }
    runFakeTerminal();
});