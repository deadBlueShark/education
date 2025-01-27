package main

import (
	"fmt"
	"math"
)

func main() {
	/* In Go package, "things" (varibale, function) is exported if it begins with a capital letter
	 * For example, `Pizza` is an exported name, as is `Pi`, which is exported from the math package.
	 * `pizza` and `pi` do not start with a capital letter, so they are not exported.
	 */
	fmt.Println(math.Pi)
	fmt.Println(math.Sqrt(math.Pi))

	// This is not work:
	// fmt.Println(math.pi)
}
