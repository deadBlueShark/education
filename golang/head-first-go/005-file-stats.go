package main

import (
	"fmt"
	"log"
	"os"
)

func main() {
	fileInfo, err := os.Stat("./003-loops.go")
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(fileInfo.Size())
}
