package main

import "fmt"

func main() {
	x := [1]int{1}
	fmt.Println(x)
	change(&x)
	fmt.Println(x)
}

func change(y *[1]int) {
	*y = [1]int{3}
}

// Different from ruby that all pass by value (reference value, reference type)
