package main

import "fmt"

/*
	In Go, a full slice expression has three parts: slice[low:high:max]
	Where:
	low: Starting index (inclusive)
	high: Ending index (exclusive)
	max: Capacity limiting index
	This creates a new slice with:
	Length: high - low
	Capacity: max - low

	max:
		When max is not provided, it defaults to the capacity of the original slice.
		When max is provided, it becomes the capacity of the new slice.
		When max is provided, it must be greater than or equal to high.

		This limits how far the underlying array can be accessed through
		the new slice. When you append to the sub-slice and exceed this
		capacity, Go will allocate a new underlying array instead of
		modifying the original.

    The primary purpose is to prevent modifications beyond the specified
    range of the original slice. Without this limit, appending to a slice
    could unexpectedly modify data in the original slice that appears
    after the visible portion.

    Think of max as saying "this slice can only access the original array
    up to this index, even for internal operations like append."
*/

func main() {
	slice := make([]string, 0, 5)
	slice = append(slice, "a", "b", "c", "d")

	slice1 := slice[:2:2]  // ["a", "b"], length 2, capacity 2
	slice2 := slice[2:4:4] // ["c", "d"], length 2, capacity 2

	fmt.Println(cap(slice), cap(slice1), cap(slice2)) // 5 2 2

	slice1 = append(slice1, "i", "j", "k")
	fmt.Println("slice:", slice)   // ["a", "b", "c", "d"] (no change)
	fmt.Println("slice1:", slice1) // ["a", "b", "i", "j", "k"]
	fmt.Println("slice2:", slice2) // ["c", "d"] (no change)

	fmt.Println("")

	slice = append(slice, "x")
	fmt.Println("slice:", slice)   // ["a", "b", "c", "d", "x"]
	fmt.Println("slice1:", slice1) // ["a", "b", "i", "j", "k"] (no change)
	fmt.Println("slice2:", slice2) // ["c", "d"] (no change)

	fmt.Println("")

	slice2 = append(slice2, "y")
	fmt.Println("slice:", slice)   // ["a", "b", "c", "d", "x"] (no change)
	fmt.Println("slice1:", slice1) // ["a", "b", "i", "j", "k"] (no change)
	fmt.Println("slice2:", slice2) // ["c", "d", "y"]
}
