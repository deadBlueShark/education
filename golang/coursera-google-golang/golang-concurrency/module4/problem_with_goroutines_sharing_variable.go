package main

import (
	"fmt"
	"sync"
)

var i int = 0
var wg sync.WaitGroup

func increment() {
	defer wg.Done()
	i = i + 1
}

func main() {
	wg.Add(2)
	go increment()
	go increment()

	wg.Wait()
	fmt.Println(i)
	// Expect 2, but it can be 1.
	// Detail explain here:
	// https://docs.google.com/presentation/d/1mscO5hLN6JBzLNoOWUI7cUZre8COY7Ii/edit#slide=id.p3
}
