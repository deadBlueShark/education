package main

import "fmt"

func main() {
	var x int = 10
	fmt.Println("Address of x:", &x)
	*&x = 20
	fmt.Println("New value of x:", x) // 20
}
