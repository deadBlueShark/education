## What are extended globs?
- Patterns can be more than one character
- Match multiple occurrences
- Allow grouping patterns
- Nesting pattern groups
- Logical AND and OR

##### `@(match)` -> match only one occurrence

| Pattern            | Match                | Would NOT Match      |
| ------------------ | -------------------- | -------------------- |
| photo@(.jpg)       | photo.jpg            | photo, photo.jpg.jpg |
| photo@(.jpg\|.png) | photo.jpg, photo.png |                      |



##### `?(match)` -> match 0 or 1 occurrence

| Pattern            | Match                       | Would NOT Match                      |
| ------------------ | --------------------------- | ------------------------------------ |
| photo?(.jpg\|.png) | photo, photo.jpg, photo.png | photo.gif, photo.jpg.jpg, photo2.jpg |

##### `+(match)` -> match 1 or more occurrence

| Pattern            | Match                                   | Would NOT Match  |
| ------------------ | --------------------------------------- | ---------------- |
| photo+(.jpg\|.png) | photo.jpg, photo.png, photo.jpg.jpg ... | photo, photo.gif |

##### `*(match)` -> match 0 or more occurrence

##### `!(match)` -> invert the match

##### Extended globs: nesting and group

| Pattern                                                      | Match                                    | Would NOT Match  |
| ------------------------------------------------------------ | ---------------------------------------- | ---------------- |
| photo!(?(.jpg))                                              | photo.jpg.jpg, photo.gif, photo2.jpg     | photo, photo.jpg |
| +(photo\|image)*+(.jpg\|png)<br />We would match files that begin with words `photo` or `file`, have any number of characters and end with one or more of `jpg` or `png` | photo.jpg, photo.png, photo2.png.png ... |                  |

Ex: 

You need to turn on `extended glog` first:

- Bash: `shopt -s extglob`

```bash
> ls photo@(.png)
photo.png

> ls photo?(.png)
photo  photo.png

> ls photo+(.png)
photo.png  photo.png.png

> ls photo*(.png)
photo  photo.png  photo.png.png

> ls photo*(.png)*(.jpg)
photo  photo.jpg  photo.jpg.jpg  photo.png  photo.png.png

> for i in photo.@(jpg|png) ; do echo $i ; done
photo.jpg
photo.png

> ls Archive-!(2015)-*-*@(tar)
Archive-2013-12-9.tar	Archive-2014-05-9.tar	Archive-2014-12-9.tar	Archive-2016-05-9.tar
```

##### Extended Globs vs Regular Expressions

| Extended Globs        | Regular Expressions   |
| --------------------- | --------------------- |
| @(pattern)            | (pattern)             |
| ?(pattern)            | (pattern)?            |
| +(pattern)            | (pattern)+            |
| *(pattern)            | (pattern)*            |
| !(pattern)            | (!pattern)            |
| *(pattern1\|pattern2) | (pattern1\|pattern2)* |
| N\A                   | (pattern){3}          |

