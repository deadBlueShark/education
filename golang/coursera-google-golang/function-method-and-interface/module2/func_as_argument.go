package main

import "fmt"

func sum(a, b int) int {
	return a + b
}

func printSum(add func(int, int) int, number1 int, number2 int) {
	fmt.Println(add(number1, number2))
}

func main() {
	printSum(sum, 4, 2)
}
