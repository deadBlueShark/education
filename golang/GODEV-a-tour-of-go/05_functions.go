package main

import "fmt"

func sum(x int, y int) int {
	return x + y
}

func greet(name string) {
	fmt.Printf("Hello %s!\n", name)
}

func swap(x, y string) (string, string) {
	return y, x
}

func main() {
	fmt.Printf("Sum of 3 and 4 is %d\n", sum(3, 4))

	greet("Bob")

	a, b := swap("Hello", "World")
	fmt.Println(a, b)
}
