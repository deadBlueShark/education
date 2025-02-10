package main

import "fmt"

type car struct {
	brand string
	model string
}

type person struct {
	name string
	age  int
	car
}

func main() {
	person := person{
		name: "John Doe",
		age:  42,
		car: car{
			brand: "Tesla",
			model: "Y",
		},
	}
	fmt.Println(person)

	// Unlike nested structs, an embedded struct’s fields are accessed at the top level like normal fields:
	fmt.Println("Person car brand:", person.brand)
	fmt.Println("Person car model:", person.model)
	// Also can access like nested struct:
	fmt.Println("Person car brand:", person.car.brand)
	fmt.Println("Person car model:", person.car.model)
}
