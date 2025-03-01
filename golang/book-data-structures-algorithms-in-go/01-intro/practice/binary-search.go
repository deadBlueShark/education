package main

import "fmt"

func binarySearchV1(arrPtr *[]int, target int) bool {
	startIdx := 0
	endIdx := len(*arrPtr) - 1

	for startIdx <= endIdx {
		midIdx := startIdx + (endIdx-startIdx)/2

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

func binarySearchV2(arrPtr *[]int, target, startIdx, endIdx int) bool {
	if startIdx > endIdx {
		return false
	}

	midIdx := startIdx + (endIdx-startIdx)/2

	if (*arrPtr)[midIdx] == target {
		return true
	} else if (*arrPtr)[midIdx] > target {
		return binarySearchV2(arrPtr, target, startIdx, midIdx-1)
	} else {
		return binarySearchV2(arrPtr, target, midIdx+1, endIdx)
	}
}

func main() {
	// Array must be sorted(this example is ASC)
	arr := []int{1, 3, 5, 7, 9}

	fmt.Println("BINARY SEARCH V1:")
	fmt.Printf("Is 9 existed in arr? %t\n", binarySearchV1(&arr, 9))
	fmt.Printf("Is 7 existed in arr? %t\n", binarySearchV1(&arr, 7))
	fmt.Printf("Is 5 existed in arr? %t\n", binarySearchV1(&arr, 5))
	fmt.Printf("Is 3 existed in arr? %t\n", binarySearchV1(&arr, 3))
	fmt.Printf("Is 1 existed in arr? %t\n", binarySearchV1(&arr, 1))
	fmt.Printf("Is 0 existed in arr? %t\n", binarySearchV1(&arr, 0))
	fmt.Printf("Is -2 existed in arr? %t\n", binarySearchV1(&arr, -2))
	fmt.Printf("Is 10 existed in arr? %t\n", binarySearchV1(&arr, 10))
	fmt.Printf("Is 1000 existed in arr? %t\n", binarySearchV1(&arr, 1000))

	fmt.Println("BINARY SEARCH V2:")
	arrLastIdx := len(arr) - 1
	fmt.Printf("Is 9 existed in arr? %t\n", binarySearchV2(&arr, 9, 0, arrLastIdx))
	fmt.Printf("Is 7 existed in arr? %t\n", binarySearchV2(&arr, 7, 0, arrLastIdx))
	fmt.Printf("Is 5 existed in arr? %t\n", binarySearchV2(&arr, 5, 0, arrLastIdx))
	fmt.Printf("Is 3 existed in arr? %t\n", binarySearchV2(&arr, 3, 0, arrLastIdx))
	fmt.Printf("Is 1 existed in arr? %t\n", binarySearchV2(&arr, 1, 0, arrLastIdx))
	fmt.Printf("Is 0 existed in arr? %t\n", binarySearchV2(&arr, 0, 0, arrLastIdx))
	fmt.Printf("Is -2 existed in arr? %t\n", binarySearchV2(&arr, -2, 0, arrLastIdx))
	fmt.Printf("Is 10 existed in arr? %t\n", binarySearchV2(&arr, 10, 0, arrLastIdx))
	fmt.Printf("Is 1000 existed in arr? %t\n", binarySearchV2(&arr, 1000, 0, arrLastIdx))
}
