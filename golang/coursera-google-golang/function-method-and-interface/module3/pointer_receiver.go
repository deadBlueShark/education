package main

import "fmt"

type myInt int

func (number *myInt) Double() int {
	*number = *number * myInt(2)
	return int(*number)
}

func main() {
	a := myInt(9)
	fmt.Println((&a).Double()) // 18
	fmt.Println(a)             // 18
}
