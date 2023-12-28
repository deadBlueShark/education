package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Println("Hello, New Year!")
	fmt.Println(strings.ToUpper("le chi nguyen"))

	str1 := "The quick red fox"
	str2 := "jumps over"
	str3 := "the lazy brown dog"
	strLength, err := fmt.Println(str1, str2, str3)
	if err == nil {
		fmt.Println("String's length:", strLength)
	}
	fmt.Printf("Random variables: %v %v %v\n", 34, "Nguyen", true)
	fmt.Printf("Float variable: %.2f\n", float64(40))
	fmt.Printf("Data type: %v -> %T, %v -> %T, %v -> %T, %v -> %T\n",
		12, 12, "Nguyen", "Nguyen", true, true, float64(40), float64(40))
}