package main

import "fmt"

func main() {
	var appleNum int

	fmt.Println("How many apples are there?")
	_, err := fmt.Scan(&appleNum)
	if err != nil {
		fmt.Println("Your input is invalid")
		return
	}

	fmt.Println("Number of apples:", appleNum)
}
