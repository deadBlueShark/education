package main

import "fmt"

func main() {
	slice := []int{10, 20, 30, 40, 50}

	// Syntax: slice[start_index:end_index]
	// start_index value: inclusive
	// end_index value: exclusive
	slice1 := slice[:3]  // [10 20 30]
	slice2 := slice[2:]  // [30 40 50]
	slice3 := slice[:]   // [10 20 30 40 50]
	slice4 := slice[1:3] // [20 30]

	fmt.Println("slice1: ", slice1)
	fmt.Println("slice2: ", slice2)
	fmt.Println("slice3: ", slice3)
	fmt.Println("slice4: ", slice4)
}
