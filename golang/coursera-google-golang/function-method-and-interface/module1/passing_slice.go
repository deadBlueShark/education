package main

import "fmt"

func foo(sli []int) {
	sli[0] = sli[0] + 1
}

func main() {
	a := []int{1, 2, 3}
	foo(a)
	fmt.Println(a) // [2 2 3]
}
