---
title: Encoding
category: Guides
---

## Rationale

__Do I really have to care for text encodings, isn't JS string supposed to work out of the box everywhere?__

For most programmers text encoding issues are a nightmare to deal with. For that reason most programming environments try to
hide that complexity behind default assumptions for their string types which makes dealing with string data
straight forward within that environment. For Javascript the web consortium has done a great job to standardize this in an almost uniform way (HTML5 as UTF-8, Javascript strings as UCS-2/UTF-16), which can be transcoded transparently. Thus most web / JS programmers dont face encoding issues anymore, if they follow those encodings.

But as soon the data leaves that well defined environment the situation gets worse - the interfaces involved have to agree about the correct data representation and their meaning. Thats a common problem with adapters to databases or other datasinks.
Xterm.js in particular has to digest and write back data from / to the operating system in the correct format. That is the point
where the default encoding of the operating system comes into play. Although we see a standardization towards Unicode (UTF-8) as exchange format in all major OS, legacy systems or certain programs still might use legacy encodings.


__Refresher - what is a text encoding?__

An encoding is a mapping of a piece of information to some meaning, a convention what it represents / stands for. 
In a computer system a text encoding typically maps certain bit sequences (numbers) to characters (charmap).

Historically text encodings evolved with the invention of automated information processing and the need to represent natural language systems in a machine / memory state (from Morse code, Baudot, ASCII up to Unicode variants). The earlier encodings were limited to certain languages (like ASCII with english letters only) and had a small memory footprint (ASCII is only 7 bit).
But with the adoption of computer systems worlwide in 70s and 80s this was a big limitation and led to the standardization of language specific 8 bit encodings (DOS encodings, ISO 8859), which can encode most latin based languages and several others with small alphabets. Languages with really big alphabets like CJK still could not be represented, thus several multibyte encoding systems were developed. This led to a nightmare of different encoding systems and the idea to standardize this further in one "to rule them all" - Unicode (1990).

See the [Wikipedia entry](https://en.wikipedia.org/wiki/Character_encoding) for more background on the evolution of text encodings.


__What encodings are currently in use?__

That is somewhat tricky to answer. In general we see a replacement of all legacy encodings by Unicode variants (mostly UTF-8 for data exchange and UTF-16/UTF-32 for internal memory usage) on all systems. But its still possible get in contact with legacy encodings on older systems / machines. Therefore we gonna list here the most common:

- ASCII  
  fundamental 7 bit encoding, unlikely to go anytime soon as it is weaved into ISO 8859 encodings and Unicode (1:1 compatible). 

- ISO 8859 family  
  several 8 bit encodings. 8859-1 (western/latin-1) was the standard of HTML4 and in many older POSIX systems. This family has several derived encodings like Windows-1252. Still in use, but mostly replaced by Unicode encodings.

- other 8 bit encodings  
  Beside the ISO 8859 family there were other 8 bit encodings quite common in the 80s. Most common was CP-437 as default on IBM-PCs (DOS encoding). CP-437 and its other language variants (like CP-850) can still be found on some systems (e.g. as legacy encoding in cmd.exe on Windows). Not used in the Web context.

- CJK encodings  
  This is the most heterogeneous group of encodings with very different encoding paradigms. Most can be seen as ancient and are replaced by Unicode. If interested, see a list of formerly common CJK encodings [here](https://en.wikipedia.org/wiki/CJK_characters#Encoding).

- Unicode  
  Standard for most scenarios these days replacing 8 bit and CJK encodings. The Unicode specification maintains a really big charmap of 1,114,112 codepoints in several 16 bit planes (U+0000 to U+10FFFF). Most of these codepoints are not defined yet, they are subject to ongoing specifications done by the Unicode Consortium. Unicode is backwards compatible to ASCII (incorporates ASCII as subset).  
  Note that the Unicode charmap is not an encoding itself, it is treated as an abstract character room, that an Unicode compatible encoding should be capable to represent. Thus the real memory representation is left to a certain Unicode encoding. Thats where the UTF encoding family enters the stage:

  Due to being really big a direct 1:1 mapping of codepoints is not feasible anymore in many circumstances as every codepoint (character in the Unicode table) would take at least 2^21 bits (or 4 bytes memory aligned). Thus several UTF encodings were developed to optimize the handling in regards of memory consumption or processing speed:
    - UTF-8  
    Developed by the father of UNIX [Mr. Ken Thompson](https://en.wikipedia.org/wiki/Ken_Thompson) UTF-8 is optimized to reduce memory consumption and bandwidth as exchange format. It achieves that as a variable multibyte encoding (up to 4 bytes) that represents more common codepoints with shorter byte sequences (ASCII, the most common in english / western languages, takes only one byte, thus an ASCII string is directly compatible to UTF-8). Downside is a higher processing penalty for typical string actions, therefore it is less commonly used for in memory handling. Standard in most modern data exchanges (like WWW), also some programming languages started to use it as internal memory represenation (like Rust). UTF-8 has several advantages over other Unicode encodings like "self healing" (dropping a byte does not scramble the whole data) and not being endianess dependent.
    - UTF-16  
    This originates back to the earlier Unicode specifications with only 65,535 codepoints (UCS-2, 16 bit). Over time it became clear, that 65,535 codepoints are not sufficiant to represent enough characters, thus the Unicode table got extended to 1,114,112 codepoints and the former UCS-2 encoding (2 byte) was extended to a variable multibyte encoding, where the higher codepoints are formed by surrogate pairs (two 2 byte codepoints of a certain range). This is seen in many systems as default internal Unicode encoding (in Windows as wchar_t, internal string representation in Java and .NET), also Javascript uses this internally (with a fallback to UCS-2 in most engines). In speed / memory consumption UTF-16 is a mixed case - while it can encode CJK codepoints < 65,536 more efficient than UTF-8 (2 byte vs 3 bytes), ASCII is more expensive (also 2 bytes) and it is still quite expensive to process due to the surrogate pairs. Also it's memory layout depents on endianess (UTF-16BE, UTF-16LE), it is not self healing and not directly ASCII compatible (needs one padding byte). Thus it is hardly seen as exchange format.
    - UTF-32  
    This encoding maps codepoints directly to 4 byte numbers in the memory, thus it is stable and very fast for string processing. Used by many modern POSIX systems (wchar_t in C/C++). Not suitable for data exchange due to very high memory consumption, endianess (UTF-32BE, UTF-32LE), not being self healing and not directly ASCII compatible (needs 3 padding bytes).


## default encodings and locale settings in operating systems 

To understand how encodings influence a terminal emulator we have to look first, how a typical console program is developed in most systems and how that program later on interacts with the terminal.

Lets take simple C examples. Note that the following will apply to any programming language, still a certain language might apply different default assumptions about string literal encodings.

```C
#include <stdio.h>

int main(void) {
  printf("Hello World!\n");
  wprintf(L"Ümläuts\n");
  return 0;
}
```

```C
#include <wchar.h>
#include <locale.h>

int main(void) {
  setlocale(LC_ALL,""); /* set to default encoding */
  wprintf(L"Ümläuts\n");
  return 0;
}
```

Compiled and executed this will most likely print "Hello World!" correctly. Depending on your system and terminal encoding the second snippet might be correct (if everything is correctly set up in the system), shows some rubbish or nothing at all.

__What happens behind the scenes?__

1. Editor encoding  
  First thing to note here is the question, what input encoding the editor applied to the string literals. Since the first string is just ASCII it will work with most other encodings. Try to save the second snippet to a file and re-open it with different editor encodings to see the difference. (Or inspect the files with a hexeditor and compare the values to the charmap of the selected encoding).  
  Summary: Basically the input stage, which translates keystrokes to numbers (character to byte mapping, **input encoding**).
2. Compilation / interpretion  
  Depending on the language used, the bytes of the string literals get copied over to the executables altered or unaltered. In C the L"" marks the literal as wide, thus the bytes are inserted as UTF-16 on Windows, on Linux as UTF-32. The first string is only marked as 8 bit thus gets copied directly. In the executables these strings are now sequences of bytes (hardcoded in the clib of the operating system).
  Note: Other languages might apply other encodings here (e.g. UTF-8 in Rust).
  Summary: Basically a step, where bytes of the "input encoding" might get trancoded into some other encoding favoured by the programming language environment.
3. Execution  
  During execution `printf` simply grabs the memory location of the bytes and puts everything up to the null termination into `STDOUT`. `wprintf` does a little bit more - it changes `STDOUT` into wide mode and then passes all bytes up to double null termination into STDOUT. `setlocale` is needed to initialize the C runtime with the expected output encoding, which turns the internal byte representation (UTF-16 or UTF-32) into the right byte stream. Note that other programming laguages provide similar interfaces locale settings (like `java.util.Locale` in Java).
  Summary: A step, that transcodes the process internal encoding into the appropriate **output encoding**.
4. pseudoterminal (POSIX) or ConPty (Windows) invocation  
  STDOUT is a file handle / file descriptor provided by the OS kernel for a certain process. It acts as a pipe with a write end at the current process and a read end accessible from somewhere else. For programs running in a terminal (emulator) under POSIX this is either a terminal device driver or the slave side of a pseudoterminal (pts driver subsystem). Beside some additional TTY processing (see [termios manpage](http://man7.org/linux/man-pages/man3/termios.3.html)) it pipes the data to the reading endpoint (master side of a pseudoterminal or a real terminal device). For Windows it works conceptually similar, but the involved interfaces differ slightly (via conhost, eventually with new ConPty interface in between).
  Summary: Does some TTY transformation on the data, does not directly impact encoding itself.
5. Terminal / Console output
  Finally the terminal (emulator) or cmd.exe read the incoming bytes, processes control characters and mirrors printable characters to the user. To do that, the terminal decodes the bytes with it's text encoding (which again defaults to the system default encoding) and places the appropriate font glyphs on the screen.
  Summary: Final step, which does the reverse mapping to output meaningful characters (byte to character mapping).

As one can see there is alot going on to get those strings shown in a terminal window with lots of assumptions. Whenever a terminal outputs scrambled data for a certain process, some of the assumptions on the way to the terminal were wrong:

- editor input encoding was wrong (this was a common error in the past for programming beginners, nowadays most editors default to UTF-8 input)
- `setlocale` is missing (falls back to ASCII or ISO 8859-1) or the wrong locale was applied  
  This is not a problem for pure 7 bit ASCII data, in fact this is most commonly used in system software that only need english letters for output. Many low level C programs never call `setlocale` explicitly.
- terminal encoding differs from encoding used in `setlocale`  
  That is a quite common issue, e.g. when connecting to a remote system with ssh that uses a different system encoding than the terminal host system. This also can happen if a certain program deliberately sets it's own locale not compatible with the terminal's encoding (like some applications do under Windows, e.g. git bash which defaults to UTF-8 regardless of the system encoding).
- terminal encoding is not capable to decode a certain codepoint
  As most terminals can deal with Unicode (UTF-8) these days it is quite unlikely to happen. Still if the terminal encoding is not the same as the input encoding or a superset (like UTF-8 for ASCII), some glyphs simply cannot be represented and will be shown as '?'.

