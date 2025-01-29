### Advantages of Go
- Code runs fast
- Garbage collection
- Simpler objects(OOP simpler than other languages)
- Concurrency is efficient

### Software Translation
3 very broad categories of languages for Machine:
- Machine language: CPU instructions represented in binary(Ex: 011001)
- Assembly language: CPU instructions with mnemonics 
  - Easy to read(than machine language)
  - Equivalent to machine language
- High level language(Java, Ruby, Python, C, C++,...)
  - Much easier to use

All software must be translated into the machine language of processor

#### Compiled vs Interpreted
- Compilation: Translate instructions once before running code
  - C, C++, Java(partially)
  - Translation occurs only once, saves time

- Interpretation: Translate instructions while code is executed
  - Python, Ruby, Java(Partially)
  - Translation occurs every execution
  - Requires an interpreter

Trade-off between compiled code vs interpreted code:
- Efficiency vs Ease-of-use
  - Compiled code is fast
  - Interpreters make coding easier
    - Manage memory automatically
    - Inter variable types
  - `Go` is a good compromise: compiled lang but have advantages of interpreted lang

- Garbage collection
  - Automatic memory management
    - Where should memory be allocated?
    - When can memory be de-allocated?
  - Manual memory management is hard
    - De-allocate too early -> false memory accesses
    - De-allocate too late -> wasted memory, memory leak
  - `Go` includes GC
    - Typically only done by interpreters

### Objects
Weakly OO (have fewer features than another OO languages)

Object-Oriented Programming:
- Organize your code through encapsulation
- Group together data and functions which are related
- User-defined type which is specific to an application
  - Ex: int have data and functions(+,-,*,/...)

Objects in `Go`
- `Go` does not use the term `class`
- `Go` uses `Structs` with associated methods
- Simplified implementation of classes(Structs)
  - No inheritance
  - No constructors
  - No generics

### Concurrency
Performance Limits
- Moore's Law used to help performance:
  - Number of transistors doubles every 18 month
- More transistors used to lead to higher clock frequencies
- Power/temperature constraints limit clock frequencies now

Solution for performance limitation:
- Parallelism
  - Number of cores still increases over time
  - Multiple tasks may be performed at the same time on different cores
  - Difficulties with parallelism:
    - When do the tasks start/stop?
    - What if one task need data from another task?
    - Do tasks conflict in memory?

Concurrent programming
- Concurrency is the management of multiple tasks at the same time
- Key requirement for large systems
- Concurrent programming enables
  - Management of task execution
  - Communication between tasks
  - Synchronization between tasks

Concurrency in `Go`
- `Go` includes concurrency primitives
- `Goroutines` represent concurrent tasks
- `Channels` are used to communicate between tasks
- `Select` enables task synchronization
- Concurrency primitives are efficient and easy to use

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

Initialization:
`var x int = 100`

Uninitialized variables have a `zero value`:
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

```
  var x int = 1
  var y int
  var ip *int // pointer to int

  ip = &x // ip now is pointer to x
  y = *ip // now y = 1
```

Alternate way to create a variable: `new()`, creates a variable and returns
a pointer to the variable 

```
  ptr := new(int)
  *ptr = 3 // place 3 to address
```

### Variables

Scope:
- The places in code where a variable can be accessed

### Deallocating memory
Stack vs Heap:
- In general:
  + Stack is an area of memory that is dedicated to function calls, local variables
  for a functions are stored here, and they are deallocated automatically when the
  function complete 

  + Heap is a persistent region of memory where when you allocate something on the
heap it doesn't go away, you have to explicitly deallocate it somehow in another
languages

- In Go:
  + Go is compiled language that enables Garbage Collection
  + Implementation is fast
  + Compiler determines to put variables to stack or heap

GC in `Go`:
- Compiled language that enables GC
- Implementation is fast
- Compiler determines Heap vs Stack
- GC in the background

### Constants
- Expression whose value is known at compile time    
- Type is inferred from right hand side (boolean, string, number)

```
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
- Elements initialized to `zero value`(0, "", false)

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
