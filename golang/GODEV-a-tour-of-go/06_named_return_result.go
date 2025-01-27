package main

import "fmt"

func namedReturn1() (hello string) {
	hello = "Hello World"
	return
}

func main() {
	fmt.Println(namedReturn1())
}
