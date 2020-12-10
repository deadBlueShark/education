## Exploring basic input-field separators

The field separator can actually be any regular expression

```bash
> awk -F ',+' '{print $2}'
hello,,,,world
world
```

