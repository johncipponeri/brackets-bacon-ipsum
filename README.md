# Bacon Ipsum Generator for Brackets
An extension for [Brackets](https://github.com/adobe/brackets/) to generate
Bacon Ipsum text automatically.

### How to Install
1. Select **Brackets > File > Extension Manager...**
2. Search for this extension.
3. Click on the **Install** button.

### How to Use Bacon Ipsum Generator
For plaintext Bacon Ipsum, type `bacon` then press the **Control** key.

You can also add options to the `bacon` command with an underscore character
followed by the option name. For example: `bacon_wrap40.` Multiple options
can also be chained together. For example, typing `bacon_html_wrap40` and
then pressing the **Control** key will give you html formatted Bacon Ipsum text
and a word wrap width of 40 characters.  Using an unrecognized option will
insert an error message into the document.  Using more than one underscore
character in a row (e.g. `bacon__html___p3`) will insert an error message
into the document.

**Note:** Options to the far right of the chain always have the highest
priority. If two options in the chain conflict with each other, the option
on the right will have precedence. For example, the command `bacon_nowrap_wrap40`
will insert Bacon Ipsum text with a word wrap width of 40 characters and the
command `bacon_wrap40_nowrap` will insert Bacon Ipsum text with no word wrapping.

##### List of Current Options
**_p[count]:** Inserts a certain number of random Bacon Ipsum paragraphs into
the current document. The `count` option indicates how many paragraphs to insert.
For example, `bacon_p3` will insert three paragraphs into the document.
If the `count` option is not provided, one paragraph will be inserted.
If the type of Bacon Ipsum text is not specified, the extension will generate
paragraphs by default.

**_s[count]:** Inserts a certain number of random Bacon Ipsum sentences into
the current document. The `count` option indicates how many sentences to insert.
For example, `bacon_s3` will insert three sentences into the document.
If the `count` option is not provided, one sentence will be inserted.

**_w[count]:** Inserts a certain number of random Bacon Ipsum words into the
current document. The `count` option indicates how many words to insert.
For example, `bacon_w40` will insert 40 random words into the document.
If the `count` option is not provided, one word will be inserted.

**_short:** Makes all sentences or paragraphs short length.

**_medium:** Makes all sentences or paragraphs medium length.
If no size options are provided, the extension will use `_medium`
as the default option.

**_long:** Makes all sentences or paragraphs long length.

**_vlong:** Makes all sentences or paragraphs very long length.

**_nowrap:** Inserts Bacon Ipsum text without any word wrapping.

**_wrap[width]:** Word wraps Bacon Ipsum text using the specified `width`
For example, `bacon_wrap40` will wrap the text at 40 characters. If a word wrap
option is not provided, the extension will use `_wrap80` as the default option.
If you want to turn word wrap off, use the `_nowrap` option.  This option has
no effect on the `_link`, `_ol`, or `_ul` options.

**_link[count]:** Inserts a certain number of random Bacon Ipsum HTML links into
the current document. The HTML link will always point to http://www.brackets.io.
The `count` option indicates how many links to insert. For example, `bacon_link3`
will insert three links, separated by page breaks, into the document. If the
`count` option is not provided, one link will be inserted. To avoid badly
formatted HTML, the `_link` option ignores any `_wrap` options and is always
set to `_nowrap`.

**_ol[count], _ul[count]:** Inserts a random Bacon Ipsum HTML list into
the current document. Use `_ol` for an ordered list and `_ul` for an unordered
list. The `count` option indicates how many list items to insert. For example,
`bacon_ol3` will insert an ordered list with three list items into the document.
If the `count` option is not provided, a list with one item will be inserted.
To avoid badly formatted HTML, both of these options ignore any `_wrap` options
and are always set to `_nowrap`.

**_fortune[count]:** For when you get sick of nonsensical Latin phrases, this
option will insert random fortunes (similar to the Unix fortune program) into
the current document.  The `count` option indicates how many fortunes to insert.
For example, `bacon_fortune3` will insert three fortunes into the document. If
the `count` option is not provided, one fortune will be inserted.

**_html:** Wraps Bacon Ipsum text in `<p></p>` tags so it displays correctly in
HTML. For options `_p`, `_s`, and `_fortune` each individual paragraph, sentence,
or fortune is wrapped. For options `_w` and `_link`, the entire collection of
words or links is wrapped. This option is not available for lists since lists
are not inline elements.

**_?, _help:** Displays help for the Bacon Ipsum extension.  If this option is used,
all other options will be ignored and no Bacon Ipsum text will be generated.

**Note:** Any option that has a number associated with it (e.g. `_p3`, `_wrap40`)
can also be entered with the number portion in front of the option
(i.e. `_3p`, `_40wrap`) and it will work the same way.

### Known Issues

**Using with Emmet/Zen Code Extension:** If you use this extension with the
[Emmet Brackets extension](https://github.com/emmetio/brackets-emmet) some of
the Bacon Ipsum options may not work correctly.  This is because both
extensions use the Control key as a shortcut key.

The Control shortcut can be turned off in the Emmet extension.  Go into
"Preferences..." in the Emmet menu and uncheck the checkbox entitled
"Expand abbreviations with Control key". If you uncheck that setting, you
can use both extensions together by using Control to insert Bacon Ipsum text
and expanding Emmet abbreviations with the alternative shortcut keys:

**Ctrl-Alt-Enter** on Windows and **Command-Alt-Enter** on Mac.

### License
MIT-licensed -- see `main.js` for details.

### Compatibility
Tested on Brackets Sprint 22 and later, Windows 7.
