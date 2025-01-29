package main

import "fmt"

func printSum(add func(int, int) int, number1 int, number2 int) {
	fmt.Println(add(number1, number2))
}

func main() {
	printSum(func(a, b int) int { return a + b }, 4, 9)
}
