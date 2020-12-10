## What is brace expansion?

Brace expansion is expansion. It creates a list based on the pattern in the braces. This allows you to use it to create files. Globs only match patterns.

##### Brace expansion vs globs

- Globs and extended globs expand pathnames
- Brace expansions expand braces
- Brace expansions is processed first
- Globs are processed last
- Brace expansions don't depend on file existence
- Brace expansions operate on string

##### Speed comparison

*(100 000 filenames)*

| Method                           | Execution Time (seconds) |
| -------------------------------- | :----------------------: |
| ls file* > /dev/null             |           0.4            |
| ls file{1..100000} > /dev/null   |           0.3            |
| echo file{1..100000} > /dev/null |           0.1            |

Explanation:

**ls file* > /dev/null**

- Bash expands glob for all files in the directory
- `ls` stats all files
- `ls` sorts list
- `ls` displays the list

**ls file{1..100000} > /dev/null**

- Bash expands the braces to create the list in sorted order
- `ls` stats all files
- `ls` displays the list

This is faster, as braces is not expanded based on the existence of files

**echo file{1..100000} > /dev/null**

- Bash creates the list of file names without statting any files
- `echo` displays the list

##### Braces with glob

```bash
> ls file{1..10}*

Expanding to `file1*`, `file2*`, `file3*` first via the very fast
brace expansion and the doing pathname expansion last by processing the glob:
file1.txt, file2.txt, file2.txt

# ls stats file, echo not:
> touch file{1,2,4}.txt
> ls file{1..4}.txt
ls: file3.txt: No such file or directory # -> because ls did a stat on all four files
file1.txt file2.txt file4.txt
> echo file{1..4}.txt  # just print, do not make sure the file exists
file1.txt file2.txt file3.txt file4.txt

# More example on braces
> echo {1..10}
1 2 3 4 5 6 7 8 9 10
> echo {a..f}
a b c d e f
> echo {A..H}{1..5}
A1 A2 A3 A4 A5 B1 B2 B3 B4 B5 C1 C2 C3 C4 C5 D1 D2 D3 D4 D5 E1 E2 E3 E4 E5 F1 F2 F3 F4 F5 G1 G2 G3 G4 G5 H1 H2 H3 H4 H5
> echo {1..50..3}   # Increment by 3
1 4 7 10 13 16 19 22 25 28 31 34 37 40 43 46 49
> echo {01..50..3} # Increment by 3, padding results
01 04 07 10 13 16 19 22 25 28 31 34 37 40 43 46 49

```

