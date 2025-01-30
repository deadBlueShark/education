package main

import "fmt"

func main() {
	fmt.Println("Main Thread 1")
	go fmt.Println("Goroutine")
	fmt.Println("Main Thread 2")
}
