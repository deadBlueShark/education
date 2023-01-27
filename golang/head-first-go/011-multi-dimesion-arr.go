package main

import "fmt"

func main() {
	arr := [3][4]int{
		{4, 5, 9, 2},
		{9, 8},
		{98, 3, 4},
	}

	for _, item1 := range arr {
		for _, item2 := range item1 {
			fmt.Printf("%d ", item2)
		}
		fmt.Println()
	}

	/* Output
	4 5 9 2
	9 8 0 0
	98 3 4 0
	*/
}
