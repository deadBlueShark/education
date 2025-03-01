package main

import "fmt"

func calSum(numberList []int) int {
	total := 0
	for _, number := range numberList {
		total += number
	}
	return total
}

func main() {
	list1 := []int{1, 2, 3, 4, 5}
	fmt.Println("Sum 1: ", calSum(list1))

	list2 := []int{9, 2, 2, 3, 1, 3}
	fmt.Println("Sum 2: ", calSum(list2))
}
