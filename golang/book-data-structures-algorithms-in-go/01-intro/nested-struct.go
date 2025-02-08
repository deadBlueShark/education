package main

import "fmt"

type wheel struct {
	radius   float64
	material string
}

type car struct {
	brand      string
	model      string
	doors      int
	mileage    int
	frontWheel wheel
	backWheel  wheel
}

func main() {
	car := car{
		brand:      "Tesla",
		model:      "S",
		doors:      2,
		mileage:    9,
		frontWheel: wheel{radius: 2.5, material: "steel"},
		backWheel:  wheel{radius: 2.5, material: "steel"},
	}
	fmt.Println(car) // {Toyota S 2 9 {2.5 steel} {2.5 steel}}
}
