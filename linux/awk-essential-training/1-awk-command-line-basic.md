## Working with records, fields, patterns and actions

`awk` looks at its input as a series of records, each record consisting of a series of fields.

By default, each record is a line of text, and each field is separated from the next by white 

space, one or more spaces and/or tab characters.

Ex: 

```bash
# Reverse first name and last name
> tail -n 3 names.txt                          
Nigel Boone
Gretchen Foreman
Serena Goodman

> tail -n 3 names.txt | awk '{print $2, $1}'
Boone Nigel
Foreman Gretchen
Goodman Serena
```

`awk` uses a dollar sign followed by a number to denote each field. The special field zero (`$0`)

refers to the entire line. 

*The `print` command:*

- The `print` command without any arguments, prints the entire current line.

- The `comma` in the `print` tells `awk` to insert a field separator (default is a single space).

  - What's actually going on is concatenation, in `awk` program, writing two string or 

  ​       variables next to each other results in the two values being concatenated or stuck 

  ​       together at runtime.

```bash
> tail -n 5 names.txt | awk '{print $2$1}'    
BooneNigel
ForemanGretchen

# ", " is a string, concat with $2, $1
> tail -n 2 names.txt | awk '{print $2", "$1}'
Boone, Nigel
Foreman, Gretchen

# NF is number of fields
> tail -n 3 dukeofyork.txt | awk '{print $0" -> "NF" words"}'
And when they were down they were down -> 8 words
And when they were only half-way up -> 7 words
They were neither up nor down -> 6 words
```

The structure of an `awk` program:

- Whenever you invoke `awk`, you must specify a program for it to execute, a program can be:

  - Simple program on the command
  - Program from file

- Program consist of one or more statements, each of which consists of a `pattern` and or an 

  `action` 

- You can omit the `pattern` or the `action`, but not both

- The `action` part of an `awk` statement is enclosed in curly braces

- If you don't specify otherwise an `action` is applied to every line of the input

```bash
# The action is 'print', so it just output each line of the input file
> awk '{print}' dukeofyork.txt
The grand old Duke of York
He had ten thousand men
```

- If you want to have an `action` that applies to only part of the input, putting a pattern before 

  opening brace of the action

```bash
> awk '/He/{print}' dukeofyork.txt
He had ten thousand men
He marched them up to the top of the hill

# print lines that have six words
> awk 'NF==6{print}' dukeofyork.txt
The grand old Duke of York
And he marched them down again
They were neither up nor down
```

- You can also use a pattern without an action (the default action is just to print the input line)

```bash
> awk '/And/' dukeofyork.txt
And he marched them down again
And when they were up they were up
And when they were down they were down
And when they were only half-way up
```

- You can specify multiple pattern action statements in a single `awk` program

```bash
> awk '/And/{print $0,"->","Match [And]"} /and/{print $0,"->","Match [and]"}' dukeofyork.txt
The grand old Duke of York -> Match [and]
He had ten thousand men -> Match [and]
And he marched them down again -> Match [And]
And when they were up they were up -> Match [And]
And when they were down they were down -> Match [And]
And when they were only half-way up -> Match [And]
```

## Using AWK command-line flags

- -f: specify that the following argument is the name of a file that contains an AWK program

```bash
> cat swap          
{print $2, $1}

> awk -f swap names.txt 
Galloway Gretchen
Steele Isaac
Myers Wayne
```

- -F: tell AWK to use the following argument as the field separator (in input source), default is white space

```bash
> cat separator.txt 
Le,Chi,Nguyen
Ly,Thuong,Kiet
Tran,Quoc,Tuan

# Not understand `,` separator
> awk '{print $3}' separator.txt 

> awk -F , '{print $3}' separator.txt
Nguyen
Kiet
Tuan
```

- -v: specify the value of an AWK variable on the command line

```bash
> awk -F , -v greet=Hello '{print greet,$3}' separator.txt
Hello Nguyen
Hello Kiet
Hello Tuan
```

