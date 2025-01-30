package main

import "fmt"

func multiply(a, b int, c chan int) {
	c <- a * b
}

func main() {
	c := make(chan int, 2)

	go multiply(10, 3, c)
	go multiply(7, 2, c)

	a := <-c
	b := <-c

	fmt.Println(a + b)
}
