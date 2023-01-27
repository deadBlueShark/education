package main

import "fmt"

func main() {
	originalNumber := 10
	changeOriginalNumber(&originalNumber, 90)
	fmt.Println("After changed:", originalNumber)
	changeOriginalNumber(&originalNumber, 3)
	fmt.Println("After changed:", originalNumber)

	double(&originalNumber)
	fmt.Println("After doubled:", originalNumber)

	originalBool := false
	negate(&originalBool)
	fmt.Println("After negated:", originalBool)
}

func changeOriginalNumber(numberPointer *int, changeTo int) {
	*numberPointer = changeTo
}

func double(numberPointer *int) {
	*numberPointer *= 2
}

func negate(boolPointer *bool) {
	*boolPointer = !*boolPointer
}

/*
	*int: pointer type
	&variable: address of variable
	*pointerVariable: value of variable at that pointer
*/
