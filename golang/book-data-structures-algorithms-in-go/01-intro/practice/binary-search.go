package main

import "fmt"

func binarySearchV1(arrPtr *[]int, target int) bool {
	startIdx := 0
	endIdx := len(*arrPtr) - 1

	for startIdx <= endIdx {
		midIdx := (startIdx + endIdx) / 2

		if (*arrPtr)[midIdx] == target {
			return true
		} else if (*arrPtr)[midIdx] > target {
			endIdx = midIdx - 1
		} else {
			startIdx = midIdx + 1
		}
	}
	return false
}

func main() {
	// Array must be sorted(this example is ASC)
	arr := []int{1, 3, 5, 7, 9}
	fmt.Printf("Is 9 existed in arr? %t\n", binarySearchV1(&arr, 9))
	fmt.Printf("Is 7 existed in arr? %t\n", binarySearchV1(&arr, 7))
	fmt.Printf("Is 5 existed in arr? %t\n", binarySearchV1(&arr, 5))
	fmt.Printf("Is 3 existed in arr? %t\n", binarySearchV1(&arr, 3))
	fmt.Printf("Is 1 existed in arr? %t\n", binarySearchV1(&arr, 1))
	fmt.Printf("Is 0 existed in arr? %t\n", binarySearchV1(&arr, 0))
	fmt.Printf("Is -2 existed in arr? %t\n", binarySearchV1(&arr, -2))
	fmt.Printf("Is 10 existed in arr? %t\n", binarySearchV1(&arr, 10))
	fmt.Printf("Is 1000 existed in arr? %t\n", binarySearchV1(&arr, 1000))
}
