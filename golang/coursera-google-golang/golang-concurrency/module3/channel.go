package main

import "fmt"

func multiply(a, b int, c chan int) {
	// send data to a channel
	c <- a * b
}

func main() {
	c := make(chan int)

	go multiply(10, 3, c)
	go multiply(7, 2, c)

	// Receive data from a channel
	a := <-c
	b := <-c

	fmt.Println(a + b)
}
