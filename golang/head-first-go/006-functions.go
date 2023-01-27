package main

import (
	"errors"
	"fmt"
)

const metersPerLitter float64 = 10

func calculateNeededLiters(height, width float64) (float64, error) {
	if height < 0 || width < 0 {
		return 0, errors.New("size must be greater than 0")
	}
	area := width * height
	return area / metersPerLitter, nil
}

func repeatLines(line string, times int) {
	for i := 0; i < times; i++ {
		fmt.Println(line)
	}
}

func displayResult(result float64, err error) {
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	fmt.Printf("Litter needed: %0.4f\n", result)
}
func main() {
	height1, width1 := 10.0, 20.0
	litter1, err := calculateNeededLiters(height1, width1)
	displayResult(litter1, err)

	height2, width2 := 90.0, -21.0
	litter2, err := calculateNeededLiters(height2, width2)
	displayResult(litter2, err)

	repeatLines("Hello World", 3)
}
