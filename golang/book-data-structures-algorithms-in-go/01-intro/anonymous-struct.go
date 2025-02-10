package main

import "fmt"

// You can even nest anonymous structs as fields within other structs:
type car struct {
	name  string
	color string
	wheel struct {
		radius   float64
		material string
	}
}

func main() {
	admin := struct {
		name  string
		email string
	}{
		name:  "admin",
		email: "admin@admin.com",
	}
	fmt.Println("Admin info:", admin)

	car := car{
		name:  "Tesla",
		color: "blue",
		wheel: struct {
			radius   float64
			material string
		}{radius: 0.3, material: "Silicon"},
	}
	fmt.Println("Car info:", car)
}
