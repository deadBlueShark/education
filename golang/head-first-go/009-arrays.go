package main

import (
	"fmt"
)

func main() {
	var beefQuantityHistory1 [3]int
	fmt.Printf("Before init value: %v\n", beefQuantityHistory1)
	beefQuantityHistory1[0] = 43
	beefQuantityHistory1[1] = 4
	beefQuantityHistory1[2] = 43
	fmt.Printf("After init value: %v\n", beefQuantityHistory1)

	beefQuantityHistory2 := [5]int{3, 39, 6, 4, 9}
	fmt.Printf("History: %v\n", beefQuantityHistory2)

	var beefQuantityHistory3 [2]int = [2]int{3, 4}
	fmt.Printf("History: %v\n", beefQuantityHistory3)

	fmt.Println("Length:", len(beefQuantityHistory1))   // 3
	fmt.Println("Capacity:", cap(beefQuantityHistory1)) // 3

	// loop array
	for i := 0; i < len(beefQuantityHistory2); i++ {
		fmt.Printf("Element %d: %d\n", i+1, beefQuantityHistory2[i])
	}

	fmt.Println("----------")

	for i, item := range beefQuantityHistory2 {
		fmt.Printf("Element %d: %d\n", i+1, item)
	}
}
