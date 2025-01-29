package main

import "fmt"

type myInt int

func (number myInt) Double() int {
	return int(number * 2)
}

func main() {
	a := myInt(9)
	fmt.Println(a.Double()) // 18
	fmt.Println(a)          // 9
}
