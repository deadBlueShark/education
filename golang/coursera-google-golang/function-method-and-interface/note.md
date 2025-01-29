### Functions
Why use a function?
- Reusability
- Abstraction
  - Details are hidden in the function
  - Only need to understand operations
  - Improves understandability
  - Naming is important for clarity

### Call by value, reference
Tradeoffs of Call by Value:
- Advantages: Data encapsulation
  + Function variables only changed inside the function
- Disadvantages: Copying time
  + Large objects may take long time to copy

Tradeoffs of Call by Reference: Opposite above

Passing array arguments:
- Array arguments are copied
- Arrays can be big, so this can be a problem

Solutions:
- Passing an array pointer
  - Messy and unnecessary
- Pass slices instead
  - Slices contain a pointer to the array
  - Passing a slice copies the pointer
```go
func foo(sli []int) {
	sli[0] = sli[0] + 1
}

func func main() {
  a := []int{1, 2, 3}
  foo(a)
}
```

### Debugging principles
Code crashes inside a function
2 options for the cause:
- Function is written incorrectly
- Data that the function uses is incorrect

Guidelines for functions:
- Function naming: Give it a good name:
  - Behavior can be understood at a glance
- Functional cohesion
  - Function should perform only one operation
  - Merging behaviours makes code complicated
- Few parameters
  - Debugging requires tracing function input data
- Reduce parameter number
  - May need to group related arguments into structures
  - Ex:
```go
// Bad solution:
Triangle3DArea(x1, y1, z1, x2, y2, z2, x3, y3, z3)

// Good solution
type Point struct {x, y, z float}
Triangle3DArea(p1, p2, p3)
```
- Function complexity
  - Function length is the most obvious measure
  - Should be simple
  - Short functions can be complicated too
