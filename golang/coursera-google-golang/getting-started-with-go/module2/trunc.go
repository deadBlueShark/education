package main

import "fmt"

func main() {
	var inputNum float64

	fmt.Println("Enter a float number:")
	_, err := fmt.Scan(&inputNum)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	fmt.Println("Truncated number:", int64(inputNum))
}
