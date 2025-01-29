package main

import "fmt"

func sum(numbers ...int) int {
	total := 0
	for _, val := range numbers {
		total += val
	}
	return total
}

func main() {
	fmt.Println(sum(1, 2, 3, 4, 5))

	// Arbitrary argument with slices
	numbers := []int{1, 2, 3, 4, 5, 9}
	fmt.Println(sum(numbers...))
}
