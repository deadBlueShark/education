package main

import "fmt"

func main() {
	age := 10

	NotChangeParam(age)
	fmt.Println(age) // 10

	ChangeParam(&age)
	fmt.Println(age) // 11
}

func NotChangeParam(a int) {
	a++
}

func ChangeParam(a *int) {
	*a++
}
