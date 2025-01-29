package main

import "fmt"

type Shape interface {
	Area() float64
}

type Square struct {
	side float64
}

func (s *Square) Area() float64 {
	if s == nil {
		return 0
	}

	return s.side * s.side
}

func main() {
	var s Shape
	fmt.Println("Value of s:", s)    // <nil>
	fmt.Printf("TYpe of s: %T\n", s) // <nil>

	var square *Square
	s = square
	fmt.Println("Area of Square:", s.Area())
}
