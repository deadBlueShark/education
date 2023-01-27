package main

import "fmt"

func main() {
	/*
		Arrays in Golang are value types unlike other languages like C, C++,
		and Java where arrays are reference types.

		This means that when you assign an array to a new variable or pass an array to a function,
		the entire array is copied. So if you make any changes to this copied array,
		the original array won’t be affected and will remain unchanged
	*/

	arr1 := [3]int{3, 4, 5}
	arr2 := arr1             // entire arr1 is copied to arr2
	arr1[0] = 999            // change arr1 do not affect arr2
	fmt.Printf("%v\n", arr1) // [999 4 5]
	fmt.Printf("%v\n", arr2) // [3 4 5]
}
