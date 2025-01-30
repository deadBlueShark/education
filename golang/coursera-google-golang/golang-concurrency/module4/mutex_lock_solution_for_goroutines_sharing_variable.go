package main

import (
	"fmt"
	"sync"
)

var i int = 0
var wg sync.WaitGroup
var mt sync.Mutex

func increment() {
	mt.Lock()
	defer wg.Done()
	i = i + 1
	mt.Unlock()
}

func main() {
	wg.Add(2)
	go increment()
	go increment()

	wg.Wait()
	fmt.Println(i)
}
