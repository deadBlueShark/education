package main

import (
	"fmt"
	"sort"
	"strconv"
)

func main() {
	var integerSlice []int
	var userInput string

	for {
		fmt.Println("Enter an integer:")
		_, err := fmt.Scan(&userInput)
		if err != nil {
			fmt.Println("Error:", err)
			return
		}

		if userInput == "X" {
			break
		} else {
			parsedInteger, err := strconv.Atoi(userInput)

			if err == nil {
				integerSlice = append(integerSlice, parsedInteger)
				sort.Ints(integerSlice)
				fmt.Println("Sorted integers:", integerSlice)
			} else {
				fmt.Println("Invalid integer")
			}
		}
	}

}
