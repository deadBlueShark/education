package main

import "fmt"

type person struct {
	name        string
	phoneNumber string
	age         int
}

func main() {
	var p1 person
	p1.name = "Nguyen"
	p1.phoneNumber = "0932323323"
	p1.age = 10
	fmt.Println(p1) // {Nguyen 0932323323 10}

	// Initialize with zero
	p2 := new(person)
	fmt.Println(p2) // &{  0}

	// Use struct literal
	p3 := person{name: "Cris", phoneNumber: "032323223", age: 32}
	fmt.Println(p3) // {Cris 032323223 32}
}
