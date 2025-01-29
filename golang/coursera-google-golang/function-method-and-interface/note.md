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
```
func foo(sli []int) {
	sli[0] = sli[0] + 1
}

func func main() {
  a := []int{1, 2, 3}
  foo(a)
}
```
