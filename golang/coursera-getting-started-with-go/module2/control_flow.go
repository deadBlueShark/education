package main

import "fmt"
import "math/rand"

func main() {
	year := rand.Intn(3000) + 1000

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
