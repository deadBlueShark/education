package main

import "fmt"

func sum(numberListPointer *[]int) int {
	sum := 0
	for _, number := range *numberListPointer {
		sum += number
	}
	return sum
}

func main() {
	list1 := []int{1, 2, 3, 4, 5}
	fmt.Println("Sum 1: ", sum(&list1))

	list2 := []int{9, 2, 2, 3, 1, 3}
	fmt.Println("Sum 2: ", sum(&list2))
}
