package main

import (
	"fmt"
	"log"
	"math"
)

type shape interface {
	area() float64
}

type circle struct {
	radius float64
}

func (c circle) area() float64 {
	return c.radius * c.radius * math.Pi
}

type rectangle struct {
	width, height float64
}

func (r rectangle) area() float64 {
	return r.width * r.height
}

func main() {
	var cir shape = circle{radius: 5}
	_, ok := cir.(circle)
	if !ok {
		log.Fatal("Not a circle")
	}
	fmt.Println("Area of circle is:", cir.area())

	var rec shape = rectangle{width: 10, height: 5}
	_, ok = rec.(circle)
	if !ok {
		log.Fatal("Not a circle")
	}
	fmt.Printf("Circle's area is %.2f\n", rec.area())
}
