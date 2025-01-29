package main

import "fmt"

var funcVar func(int, int) int

func sum(a, b int) int {
	return a + b
}

func main() {
	funcVar = sum
	fmt.Println(funcVar(1, 2))
}
