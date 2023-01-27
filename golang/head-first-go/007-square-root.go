package main

import (
	"fmt"
	"math"
)

func calSquareRoot(number float64) (float64, error) {
	if number < 0 {
		return 0, fmt.Errorf("number cannot be negative")
	}

	return math.Sqrt(number), nil
}
func main() {
	result, err := calSquareRoot(9)
	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Printf("Result: %0.4f\n", result)
	}

	result, err = calSquareRoot(-9)
	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Printf("Result: %0.4f\n", result)
	}
}
