package main

import (
	"fmt"
	"strings"
)

func main() {
	Greet("Hello Function!")

	PrintRepeat("Hello", 5)

	sum := Sum(2, 3)
	fmt.Println(sum)

	firstName, lastName := SplitName("Le Nguyen")
	fmt.Printf("First: %v. Last: %v", firstName, lastName)
}

func Greet(sentence string) {
	fmt.Println(sentence)
}

func PrintRepeat(word string, times int) {
	for i := 0; i < times; i++ {
		fmt.Print(word)
	}
	fmt.Println()
}

func Sum(a, b int) int {
	return a + b
}

func SplitName(name string) (string, string) {
	splitName := strings.Split(name, " ")
	return splitName[0], splitName[1]
}
