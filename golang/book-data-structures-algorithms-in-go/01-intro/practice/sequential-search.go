package main

import "fmt"

func sequentialSearch(arrPtr *[]int, target int) bool {
	arrLength := len(*arrPtr)
	for i := 0; i < arrLength; i++ {
		if (*arrPtr)[i] == target {
			return true
		}
	}
	return false
}

func main() {
	arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	fmt.Printf("Is 7 existed in array?: %t\n", sequentialSearch(&arr, 7))
	fmt.Printf("Is 99 existed in array?: %t\n", sequentialSearch(&arr, 99))
}
