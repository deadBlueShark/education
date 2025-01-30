package main

import "fmt"

func loopInt(c chan int, numbers ...int) {
	for _, n := range numbers {
		c <- n
	}
	close(c)
}

func main() {
	c := make(chan int, 2)

	numbers := []int{8, 9, 2, 3, 4, 5, 6, 7}
	go loopInt(c, numbers...)

	// Iterate through a channel(exit loop when channel closed)
	for i := range c {
		fmt.Print(i, " ")
	}
}
