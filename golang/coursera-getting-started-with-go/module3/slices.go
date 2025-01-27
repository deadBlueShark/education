package main

import "fmt"

func main() {
	arr := [...]int{1, 2, 3, 4, 4, 5, 4, 2, 3, 2}
	slice1 := arr[1:3] // [2 3]
	slice2 := arr[2:5] // [3 4 4]
	slice3 := arr[0:10]

	// slice literal
	slice4 := []int{1, 2, 3, 4}

	// using make
	slice5 := make([]int, 5, 10)
	fmt.Printf("Length: %v Capacity: %v\n", len(slice1), cap(slice1)) // Lengsth: 2 Capacity: 9
	fmt.Printf("Length: %v Capacity: %v\n", len(slice2), cap(slice2)) // Length: 3 Capacity: 8
	fmt.Printf("Length: %v Capacity: %v\n", len(slice3), cap(slice3)) // Length: 10 Capacity: 10
	fmt.Printf("Length: %v Capacity: %v\n", len(slice4), cap(slice4)) // Length: 4 Capacity: 4
	fmt.Printf("Length: %v Capacity: %v\n", len(slice5), cap(slice5)) // Length: 5 Capacity: 10
}
