package main

import (
	"fmt"
	"slices"
)

func main() {
	slice1 := []int{4, 2, 3}
	slice2 := []int{4, 2, 3}

	if slices.Equal(slice1, slice2) {
		fmt.Println("slice1 is equal to slice2")
	} else {
		fmt.Println("slice1 is not equal to slice2")
	}
}

/* Warning:
 * The `reflect` package contains a function called `DeepEqual`
 * that can compare almost anything, including slices. It’s
 * a legacy function, primarily intended for testing. Before
 * the inclusion of `slices.Equal` and `slices.EqualFunc`,
 * `reflect.DeepEqual` was often used to compare slices. Don’t
 * use it in new code, as it is slower and less safe than
 * using the functions in the slices package.
 */
