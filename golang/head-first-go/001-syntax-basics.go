package main

import (
	"fmt"
	"math"
	"reflect"

	"golang.org/x/text/cases"
	"golang.org/x/text/language"
)

func main() {
	fmt.Println("Hello, Go!")
	fmt.Println("Hello again,", "Nguyen")
	fmt.Println(math.Floor(2.75))
	// Deprecated: strings.Title("le chi nguyen")
	fmt.Println(cases.Title(language.English).String("le chi nguyen"))
	fmt.Println("Division:", 9/5, 9%5)

	// Runes
	fmt.Println("\nRune:")
	fmt.Println('A', '\n', 'a') // 65 10 97
	fmt.Printf("Type %T\n", 'A')

	fmt.Println("Type Of", reflect.TypeOf(9))
	fmt.Println("Type Of", reflect.TypeOf(9.3))
	fmt.Println("Type Of", reflect.TypeOf("hello"))
	fmt.Println("Type Of", reflect.TypeOf(false))

	a := 10
	b := 2.4
	fmt.Println("Type of", float64(a)*b, "is", reflect.TypeOf(float64(a)*b))
}
