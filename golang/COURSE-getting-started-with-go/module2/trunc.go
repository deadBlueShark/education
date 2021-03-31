package main

import "fmt"

func main() {
	var inputNum float64

	fmt.Println("Enter a float number:")
	fmt.Scan(&inputNum)

	fmt.Println("Truncated number:", int64(inputNum))
}
