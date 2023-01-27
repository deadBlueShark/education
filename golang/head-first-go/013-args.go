package main

import (
	"fmt"
	"os"
)

func main() {
	fmt.Printf("Command Line Arguments: %#v\n", os.Args)
	fmt.Println(os.Args[0])
	fmt.Println(os.Args[1])
	fmt.Println(os.Args[2])
}