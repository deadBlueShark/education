package main

import (
	"fmt"
)

func main() {
	result := sum(3, 4, 5)
	fmt.Println(result)

	// passing slice to variadic function
	numbers := []int{99, 423, 22}
	fmt.Println(sum(numbers...))
}

func sum(numbers ...int) int {
	sum := 0
	for _, element := range numbers {
		sum += element
	}
	return sum
}