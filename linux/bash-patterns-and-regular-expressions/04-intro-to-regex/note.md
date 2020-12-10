## BREs vs EREs

##### ERE syntax

| Special character | Function                |
| ----------------- | ----------------------- |
| .                 | Matches one character   |
| []                | Character sets          |
| \                 | Escape single character |
| ()                | Pattern grouping        |
| \|                | Alternation             |
| * + {}            | Repetition operators    |
| ^                 | Leading anchor          |
| $                 | Trailing anchor         |
| [^abc]            | Negates pattern         |

If we need any special characters to match themselves, we need to include them
in square brackets or escape them with a backslash.

Ex:

```bash
echo abababfdsdf | grep -E '(ab)'
```



##### BRE syntax

In BREs, escaping below characters makes them special

| None-special character | Function             |
| ---------------------- | -------------------- |
| ?, +, {}, *            | Repetition operators |
| \|                     | Alternation          |
| ()                     | Pattern grouping     |
| .                      |                      |
| []                     |                      |
| \                      |                      |

Ex:

```bash
> echo abababfdsdf | grep '\(ab\)'
```

##### Regex support in command line tools

| Tool          | Regex Type |
| ------------- | ---------- |
| Grep, grep -G | BRE        |
| grep -E       | ERE        |
| sed           | BRE        |
| sed -E        | ERE        |
| awk           | ERE        |
| Bash [[ =~ ]] | ERE        |

