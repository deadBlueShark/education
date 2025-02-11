package main

import "fmt"

type car interface {
	Color() string
	Speed() float64
}

type truck interface {
	car
	HoseLength() float64
}

type firetruck struct {
	color      string
	speed      float64
	hoseLength float64
}

func (f firetruck) Color() string {
	return f.color
}

func (f firetruck) Speed() float64 {
	return f.speed
}

func (f firetruck) HoseLength() float64 {
	return f.hoseLength
}

func main() {
	var c truck = firetruck{
		color:      "red",
		speed:      19.0,
		hoseLength: 1.0,
	}

	fmt.Printf("A %s, %.2fm firetruck is running with %.2fkm/h", c.Color(), c.HoseLength(), c.Speed())
}
