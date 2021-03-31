package main

import "fmt"

func main() {
	year := 1999

	for i := 0; i < 2; i++ {
		if year >= 2000 {
			fmt.Println("21 century")
		} else {
			fmt.Println("20 century")
		}
	}

	age := 10
	switch age {
	case 10:
		fmt.Println("10 years old")
	default:
		fmt.Println("Unknown")
	}
	/* The `case` automatically breaks at the end of the `case` */

	i := 0
	for i < 2 {
		fmt.Println("Hello")
		i++
	}
}
