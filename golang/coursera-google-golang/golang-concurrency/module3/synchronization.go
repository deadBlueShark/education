package main

import (
	"fmt"
	"sync"
)

func printText(wg *sync.WaitGroup, text string) {
	fmt.Println(text)
	wg.Done()
}

func main() {
	fmt.Println("Main Thread 1")

	var wg sync.WaitGroup
	wg.Add(1)
	go printText(&wg, "Text in Goroutine")

	fmt.Println("Main Thread 2")

	wg.Wait()
}
