package main

import (
	"fmt"
	"math"
)

func main() {
	for {
		var n float64
		var answer string
		fmt.Println("Please input a float type number")
		fmt.Scan(&n)

		fmt.Printf("The truncated numer is %f\n", math.Trunc(n))

		fmt.Println("Do you want put another number? answer YES or NO")
		fmt.Scan(&answer)

		if answer == "YES" {
			continue
		} else if answer == "NO" {
			break
		}
	}
	fmt.Println("FINISH")
}
