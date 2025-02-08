package main

import "fmt"

func main() {
	s := "Hello World" // String is immutable
	mutableStringBySlice := []rune(s)
	mutableStringBySlice[0] = 'h'
	mutableStringBySlice[6] = 'w'
	s2 := string(mutableStringBySlice)
	fmt.Println(s2)
}
