package main

import (
	"02-basics/github.com/dinner"
	"fmt"
)

func main() {
	fmt.Printf("We'll have %s for dinner tonight", dinner.Choose())
}
