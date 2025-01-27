package main

import "fmt"

func main() {
	var x [5]int
	x[0] = 9
	fmt.Println(x) // [9 0 0 0 0]
	for index, value := range x {
		fmt.Printf("Index %v: %v\n", index, value)
	}

	// Init array literal
	var y [2]int = [2]int{1, 2}
	z := [2]int{1, 2}
	h := [...]int{1, 2} // Infers size from number of initializers
	fmt.Println(y)
	fmt.Println(z)
	fmt.Println(h)
}
