package main

import (
	"fmt"
	"strconv" // conversions to and from string representations of basic data types
	"strings"
)

func main() {
	fmt.Println(strings.Compare("hello", "ikd"))              // -1
	fmt.Println(strings.Contains("hello", "heo"))             // false
	fmt.Println(strings.ContainsAny("hello", "heo"))          // true
	fmt.Println(strings.Replace("hello ellen", "l", "L", 2))  // heLLo ellen
	fmt.Println(strings.Replace("hello ellen", "l", "L", -1)) // heLLo eLLen

	// integer to string
	fmt.Printf("%T\n", strconv.Itoa(99)) // string
	// string to integer
	i, err := strconv.Atoi("-99")
	fmt.Println(err)            // <nil>
	fmt.Printf("%T %v\n", i, i) // int -99

	i, err = strconv.Atoi("-d99")
	fmt.Println(err)            // strconv.Atoi: parsing "-d99": invalid syntax
	fmt.Printf("%T %v\n", i, i) // int 0
}
