package main

import "fmt"

func main() {
	slice := make([]string, 0, 5)
	slice = append(slice, "a", "b", "c", "d")

	slice1 := slice[:2] // ["a", "b"], length 2, capacity 5
	slice2 := slice[2:] // ["c", "d"], length 2, capacity 3

	fmt.Println(cap(slice), cap(slice1), cap(slice2)) // 5 5 3

	// Notice that slice1 and slice2 share the same underlying array
	// Following operations demonstrate how shared backing arrays affect append behavior:
	slice1 = append(slice1, "i", "j", "k")
	fmt.Println("slice:", slice)   // ["a", "b", "i", "j"]
	fmt.Println("slice1:", slice1) // ["a", "b", "i", "j", "k"]
	fmt.Println("slice2:", slice2) // ["i", "j"]

	fmt.Println("")

	slice = append(slice, "x")
	fmt.Println("slice:", slice)   // ["a", "b", "i", "j", "x"]
	fmt.Println("slice1:", slice1) // ["a", "b", "i", "j", "x"]
	fmt.Println("slice2:", slice2) // ["i", "j"]

	fmt.Println("")

	slice2 = append(slice2, "y")
	fmt.Println("slice:", slice)   // ["a", "b", "i", "j", "y"]
	fmt.Println("slice1:", slice1) // ["a", "b", "i", "j", "y"]
	fmt.Println("slice2:", slice2) // ["i", "j", "y"]
}
