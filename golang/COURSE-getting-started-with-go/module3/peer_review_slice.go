package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	var numbers = make([]int, 0, 3)

	fmt.Println("Enter in a number. Press 'X' to quit")
	for scanner.Scan() {
		input := scanner.Text()
		num, e := strconv.Atoi(input)
		if input == "X" {
			break
		}
		if e == nil {
			numbers = append(numbers, num)
			sort.Ints(numbers)
		}
		fmt.Println("Your current sorted numbers are:")
		fmt.Println(numbers)
		fmt.Println("Enter in a number. Press 'X' to quit")
	}
}
