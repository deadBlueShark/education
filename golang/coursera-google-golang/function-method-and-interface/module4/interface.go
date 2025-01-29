package main

import (
	"fmt"
	"math"
)

type Shape interface {
	Area() float64
	Perimeter() float64
}

// Rectangle type that implements the Shape interface
type Rectangle struct {
	Width, Height float64
}

// Circle type that implements the Shape interface
type Circle struct {
	Radius float64
}

func (r Rectangle) Area() float64 {
	return r.Height * r.Width
}

func (r Rectangle) Perimeter() float64 {
	return 2 * (r.Width + r.Height)
}

func (c Circle) Area() float64 {
	return math.Pi * c.Radius * c.Radius
}

func (c Circle) Perimeter() float64 {
	return 2 * math.Pi * c.Radius
}

func main() {
	var shape Shape
	shape = Circle{10}
	fmt.Println("Circle area:", shape.Area())
	fmt.Println("Circle perimeter:", shape.Perimeter())

	shape = Rectangle{10, 10}
	fmt.Println("Rectangle area:", shape.Area())
	fmt.Println("Rectangle perimeter:", shape.Perimeter())
}
