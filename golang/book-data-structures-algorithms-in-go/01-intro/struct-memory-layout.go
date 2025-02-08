package main

import (
	"fmt"
	"reflect"
)

// Struct aligns the fields by size (largest to smallest)
type stats1 struct {
	Reach    uint16
	NumPosts uint8
	NumLikes uint8
}

// Struct randoms fields size
type stats2 struct {
	NumPosts uint8
	Reach    uint16
	NumLikes uint8
}

func main() {
	type1 := reflect.TypeOf(stats1{})
	type2 := reflect.TypeOf(stats2{})

	fmt.Printf("Struct 1 takes %d bytes\n", type1.Size()) // 4 bytes
	fmt.Printf("Struct 2 takes %d bytes\n", type2.Size()) // 6 bytes
	// Explain: https://www.boot.dev/lessons/84de8a08-1f02-47fd-b0a9-cab314162722
}
