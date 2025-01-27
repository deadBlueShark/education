package main

import (
	"fmt"
	"strings"
)

func main() {
	var inputString string

	fmt.Println("Enter a string:")
	_, err := fmt.Scan(&inputString)
	if err != nil {
		return
	}

	if strings.HasPrefix(inputString, "i") &&
		strings.HasSuffix(inputString, "n") &&
		strings.Contains(inputString, "a") {
		fmt.Println("Found!")
	} else {
		fmt.Println("Not Found!")
	}
}
