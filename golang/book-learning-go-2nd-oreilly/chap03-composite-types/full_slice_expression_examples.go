package main

import "fmt"

func main() {
	// Create a slice with length 0, capacity 5
	slice := make([]string, 0, 5)

	// Add elements to the slice
	slice = append(slice, "a", "b", "c", "d")
	fmt.Println("Original slice:", slice) // ["a", "b", "c", "d"]
	fmt.Printf("Length: %d, Capacity: %d\n", len(slice), cap(slice)) // Length: 4, Capacity: 5

	// Regular slice expression: slice[low:high]
	// Creates a slice from index low (inclusive) to high (exclusive)
	// Capacity will be from low to the end of the underlying array
	regularSlice := slice[1:3]
	fmt.Println("\nRegular slice[1:3]:", regularSlice) // ["b", "c"]
	fmt.Printf("Length: %d, Capacity: %d\n", len(regularSlice), cap(regularSlice)) // Length: 2, Capacity: 4

	// Full slice expression: slice[low:high:max]
	// Creates a slice from index low (inclusive) to high (exclusive)
	// Capacity is limited to max-low
	fullSlice := slice[1:3:4]
	fmt.Println("\nFull slice[1:3:4]:", fullSlice) // ["b", "c"]
	fmt.Printf("Length: %d, Capacity: %d\n", len(fullSlice), cap(fullSlice)) // Length: 2, Capacity: 3

	fmt.Println("\n--- Demonstrating why capacity control matters ---")

	fmt.Println("\nWithout capacity control:")
	sliceA := slice[1:3]
	fmt.Println("sliceA initial:", sliceA) // ["b", "c"]
	sliceA = append(sliceA, "X")
	fmt.Println("sliceA after append:", sliceA) // ["b", "c", "X"]
	fmt.Println("Original slice after modifying sliceA:", slice) // ["a", "b", "c", "X"]
	// Notice that appending to sliceA modified the original slice
	// This is because sliceA's capacity extended into the original slice

	// With capacity control (full slice)
	fmt.Println("\nWith capacity control:")
	sliceB := slice[1:3:3] // Capacity limited to 2
	fmt.Println("sliceB initial:", sliceB) // ["b", "c"]
	sliceB = append(sliceB, "Y")
	fmt.Println("sliceB after append:", sliceB) // ["b", "c", "Y"]
	fmt.Println("Original slice after modifying sliceB:", slice) // ["a", "b", "c", "X"] (no change)
	// Notice that appending to sliceB did NOT modify the original slice
	// This is because sliceB's capacity was limited, forcing a new allocation

	// Full slice expression with different values
	fmt.Println("\n--- More examples ---")

	// Take all elements but limit capacity to length
	exactSlice := slice[:len(slice):len(slice)]
	fmt.Println("\nExact slice[:len:len]:", exactSlice) // ["a", "b", "c", "X"]
	fmt.Printf("Length: %d, Capacity: %d\n", len(exactSlice), cap(exactSlice)) // Length: 4, Capacity: 4

	// Take first two elements with capacity for 3
	limitedSlice := slice[:2:3]
	fmt.Println("\nLimited slice[:2:3]:", limitedSlice) // ["a", "b"]
	fmt.Printf("Length: %d, Capacity: %d\n", len(limitedSlice), cap(limitedSlice)) // Length: 2, Capacity: 3
}
