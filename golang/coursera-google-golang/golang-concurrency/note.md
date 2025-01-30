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
