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

	first_name, last_name := SplitName("Le Nguyen")
	fmt.Printf("First: %v. Last: %v", first_name, last_name)
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
	splited_name := strings.Split(name, " ")
	return splited_name[0], splited_name[1]
}
