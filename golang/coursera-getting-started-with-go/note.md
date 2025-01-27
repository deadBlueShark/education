### Advantages of Go 

- Code runs fast
- Garbage collection
- Simpler objects
- Concurrency is efficient

### Software Translation

3 very broad categories of languages for Machine:
- Machine language: CPU instructions represented in binary
- Assembly language: CPU instructions with mnemonics
  + Easy to read
  + Equivalent to machine language
- High level language

All software must be translated into the machine language of processor

### Objects

Weakly OO (have fewer features than another OO languages)

Structs:
- No inheritance
- No constructors
- No generics

### Concurrency

### Go tools
`go doc`, `go build`, `go run`, `go fmt`, `go get`, `go list`, `go test`

### Variables

- Data stored in memory
- Must have a name and a type
- All variables must have declarations
- Most basic declaration: 
  `var x int`
  `var x, y int`

Defining an alias for a type:
    `type Celsius float64`
->  `var temprature Celsius`

Initilize
`var x int = 100`

Uninitialized variables have a zero value
`var a int // 0`
`var b string // ""`
`var gender bool // false`

### Pointers

A pointer is an address to data in memory

There are 2 main operators that are associated with pointers
  - `&` operator returns the address of a variable/function
  (put that in front of a variable)
  - `*` operator returns data at an address (dereferencing)
  (put that in front of a pointer)

```go
  var x int = 1
  var y int
  var ip *int // pointer to int

  ip = &x // ip now is pointer to x
  y = *ip // now y = 1
```

Alternate way to create a variable: `new()`, creates a variable and returns
a pointer to the variable 

```go
  ptr := new(int)
  *ptr = 3 // place 3 to address
```

### Variables

Scope:
- The places in code where a variable can be accessed

### Deallocating memory
Stack vs Heap

- In general:
  + Stack is an area of memory that is dedicated to funtion calls, local variables
  for a functions are stored here and they are deallocated automatically when the
  function complete 

  + Heap is a persistent region of memory where when you allocate something on the
heap it doesn't go away, you have to explicitly deallocate it somehow in another
languages

- In Go:
  + Go is compiled language that enables Garbage Collection
  + Implementation is fast
  + Compiler determines to put variables to stack or heap

### Constants

- Expression whose value is known at compile time    
- Type is inferred from righthand side (boolean, string, number)

```go
const x = 1.3
const (
  y = 8
  x = "Hi"
)
```

### Scan 
- `Scan` reads user input
- Takes a pointer as an argument
- Typed data is written to pointer
- Returns number of scanned items

### Arrays 
- Fixed-length series of elements of a chosen type
- Elements accessed using subscript notation `[ ]`
- Elements initialized to zero value (0, "")

### Slices
- A "window" on an underlying array
- Variable size, up to the whole array
- Every slice has basically three properties:
  + Pointer indicates the start of the slice
  + Length
  + Capacity is maximum number of elements

- Writing to a slice changes underlying array

### Map

Go's implementation of hash table
Use `make()` to create a map
Accessing map: return zero if key is not present

### Struct

### RFCs (Requests for Comments)

- A definition of Internet protocols and formats
- Example protocols: 
  + HTML
  + URI
  + HTTP
- Golang provides important packages for important RFCs
  + Protocol packages: "net/http", "net"

JSON Marshalling: generating JSON representation from an object

### Files
- Linear access, not random access
