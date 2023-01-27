package main

import (
	"fmt"
	"math"
	"reflect"
	"strings"
)

func main() {
	fmt.Println("Hello, Go!")
	fmt.Println("Hello again,", "Nguyen")
	fmt.Println(math.Floor(2.75))
	fmt.Println(strings.Title("le chi nguyen"))
	fmt.Println("Division:", 9/5, 9%5)

	// Runes
	fmt.Println('A', '\n', 'a')
	fmt.Printf("Type %T\n", 'A')

	fmt.Println("Type Of", reflect.TypeOf(9))
	fmt.Println("Type Of", reflect.TypeOf(9.3))
	fmt.Println("Type Of", reflect.TypeOf("hello"))
	fmt.Println("Type Of", reflect.TypeOf(false))

	a := 10
	b := 2.4
	fmt.Println("Type of", float64(a)*b, "is", reflect.TypeOf(float64(a)*b))
}
