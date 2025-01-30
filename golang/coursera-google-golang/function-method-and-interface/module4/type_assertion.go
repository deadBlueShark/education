package main

import (
	"fmt"
	"math"
)

type Shape2D interface {
	Area() float64
}

// Rectangle is a concrete type of Shape2D interface
type Rectangle struct {
	width, height float64
}

func (r Rectangle) Area() float64 {
	return r.width * r.height
}

// Circle is a concrete type of Shape2D interface
type Circle struct {
	radius float64
}

func (c Circle) Area() float64 {
	return math.Pi * c.radius * c.radius
}

func DrawShape(shape Shape2D) {
	rect, rectOk := shape.(Rectangle)
	if rectOk {
		fmt.Printf("Drawing rectangle:\nWidth: %f, Height: %f\n", rect.width, rect.height)
		return
	}

	circle, circleOk := shape.(Circle)
	if circleOk {
		fmt.Printf("Drawing circle:\nRadius: %f", circle.radius)
		return
	}
}

func main() {
	// An instance of concrete type -> concrete value
	rectangle := Rectangle{10, 90}
	DrawShape(rectangle)

	// An instance of concrete type -> concrete value
	circle := Circle{9.2}
	DrawShape(circle)
}
