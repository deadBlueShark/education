package main

import "fmt"

func factorial(n *int) int {
	if *n < 0 {
		panic("factorial is not defined for negative numbers")
	}
	if *n < 2 {
		return 1
	}
	fact := 1
	for i := 2; i <= *n; i++ {
		fact *= i
	}
	return fact
}

func main() {
	number := 9
	fmt.Printf("Factorial of %d is %d\n", number, factorial(&number))

	number = -3
	factorial(&number)
}
