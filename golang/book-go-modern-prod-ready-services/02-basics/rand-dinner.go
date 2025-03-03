package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	dinners := []string{"tacos", "pizza", "ramen"}
	rand.Seed(time.Now().UnixNano())

	fmt.Printf("We'll have %s for dinner tonight", dinners[rand.Intn(len(dinners))])
}
