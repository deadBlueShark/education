package main

import "fmt"

func sequentialSearch(arrPtr []int, target int) bool {
	for _, value := range arrPtr {
		if value == target {
			return true
		}
	}
	return false
}

func main() {
	arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	fmt.Printf("Is 7 exist in array?: %t\n", sequentialSearch(arr, 7))
	fmt.Printf("Is 99 exist in array?: %t\n", sequentialSearch(arr, 99))
}
