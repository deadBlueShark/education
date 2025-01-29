package main

import "fmt"

func main() {
	array := [3]int{1, 2, 3}

	// Passing an array
	changeArray1(array)
	fmt.Println(array) // [1 2 3], array not changed

	// passing an array reference
	changeArray2(&array)
	fmt.Println(array) // [1 7 3], array changed
}

func changeArray1(arr [3]int) {
	arr[1] = 4
}

func changeArray2(arr *[3]int) {
	(*arr)[1] = 7
}
