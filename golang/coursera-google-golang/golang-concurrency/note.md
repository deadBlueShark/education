### Concurrent vs Parallel
- Parallel tasks must be executed on different hardware(CPU cores)
- Concurrent tasks may be executed on the same hardware
  - Only one task actually executed at a time (but overlapped)
- Mapping from tasks to hardware is not directly controlled by programmer
  - At least not in Go

Concurrent programming:
- Programmer determines which tasks can be executed in parallel
- OS determines mapping tasks to hardware(not programmer)
  - In Go: Go runtime scheduler

Hiding latency:
- Concurrency improves performance, even without parallelism(Ex: In machine with 1 core)
- Tasks must periodically wait for something
  - Ex: wait for memory, wait for IO, internet transfer...
- Other concurrent tasks can operate while one task is waiting

Von Neumann bottleneck: Memory access time is a performance bottleneck

### Processes
- An instance of a running program
- Things unique to a process:
  - Memory
    - Virtual address space
    - Code, Stack, Heap, shared libraries
  - Registers
    - Program counters, data registers, stack pointers...

### Operating system
- Allows many processes to execute concurrently
- OS schedules processes for execution
  - Processes are switched quickly(20ms)
  - Users have the impression of parallelism
- OS must give processes fair access to resources

### Threads
- Threads share some context
- Many threads can exist in one process
- OS schedules threads rather than processes

### Goroutines
- Like a thread in Go
- Many Goroutines execute within a single OS thread

Go Runtime Scheduler:
- Schedules Goroutines inside an OS thread
- Like a little OS inside a single OS thread
- Logical processor is mapped to a thread

