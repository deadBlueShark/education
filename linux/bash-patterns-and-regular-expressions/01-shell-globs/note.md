## What are globs?
##### Pattern matching in Bash:
- Globs
- Extendeds globs
- Brace expansion
- Basic Regex
- Extended Regex

##### Globs:

Globs match file names, whereas Regexes match text.

Ex: Thix example would get all files starting with the number 0 through 9, followed
by one character of any type, and then the word `file` followed by any numner of
characters of any type, and finally ended with `.txt`

```bash
> ls [0-9]?file*.txt
```

Use Regex to do the same job:

```bash
> ls | grep '[0-9].file.*\.txt'
```

*Note:* `ls` does not support Regex

##### Globs and Regex

`grep` could use globs and regex in the same line:

```bash
> grep '^A.*\.txt' *.txt
```

In this case, the shell interprets the `*.txt` glob and expands it into a list
of all files ending with `.txt` first and then passes that matched files to `grep`
and `grep` searches inside the files using Regex for any lines that start with
capital `A`, have any number of characters of any type, and end with `.txt`

To keep the shell from interpreting the `Regex` as a `glob`, we enclose the `Regex`
in single quotes.

## Shell expansion order
##### Types of Shell expansion
- Brace expansion
- Tilde expansion
- Parameter and variable expansion
- Command substitution
- Word splitting

## Wildcards
File globs: `*`
-> Matching any number of character, including the empty string

`*` is greedy, if you only want to match one character, use `?` wildcard

```bash
> ls file?.txt
file .txt file*.txt file-.txt

> ls file??.txt
file10.txt file12.txt file14.txt file16.txt file18.txt file20.txt
```

*Note:* If a filename starts with a `.`, this character must be matched explicitly.
(Thus, `rm *` will not remove .profile)

```bash
> ls a*.txt
a.b.txt

> ls .*
.hiddenfile

> ls *hiddenfile
zsh: no matches found: *hiddenfile
```
## Character sets

```bash
> ls [abc].txt
a.txt

> ls file[^a-z].txt
file .txt file*.txt file-.txt file3.txt file5.txt file6.txt file7.txt

# Same above (or `ls file[!a-z].txt` in some OS)
> ls file[\!a-z].txt
file .txt file*.txt file-.txt file3.txt file5.txt file6.txt file7.txt
```

The `character set` matches one character, just like the `question mark` wildcard,
but we have more concise list of which character to match.

We can remove the special meaning of `?`, `*` and `[` by preceding them by a
backslash, or in case this is part of a shell command line, enclosing them in quotes.

```bash
> ls 'file*.txt'
file*.txt

> ls file\*.txt
file*.txt

> ls file*.txt
file .txt  file-.txt  file10.txt file14.txt file18.txt file3.txt
```

## The effect of locale on searches
## Character classes (independent with locale)

```bash
> ls [[:upper:]]
A  B  Y  Z  Ç

> ls file[[:alpha:][:space:]].txt
file .txt fileC.txt filea.txt fileb.txt
```

`[::]` Matches one character of a certain type:
`[:lower:]`: lower case character
`[:upper:]`: upper case character
`[:digit:]`: numbers
`[:alpha:]`: Upper and lower case character
`[:alnum:]`: Upper and lower case plus numbers
`[:space:]`: Spaces, tabs and newlines
`[:graph:]`: Printable characters not including spaces
`[:print:]`: Printable character including spaces
`[:punct:]`: Punctuation
`[:cntrl:]`: Non-printable control characters
`[:xdigit:]`: Hexadecimal characters

