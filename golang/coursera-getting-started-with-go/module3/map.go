package main

import "fmt"

func main() {
	var map1 map[string]int
	map2 := make(map[string]int)

	// map literal
	map3 := map[string]int{"nguyen": 27, "le": 32}

	fmt.Println(map1) // map[]
	fmt.Println(map2) // map[]
	fmt.Println(map3) // map[le:32 nguyen:27]
	fmt.Printf("Name: %v. Age: %v\n", "nguyen", map3["nguyen"])

	/* Map operations */

	// Deleting a key/value pairs
	delete(map3, "le")
	fmt.Println(map3) // map[nguyen:27]

	value, isKeyPresent := map3["nguyen"]
	fmt.Println(value, isKeyPresent) // 27 true

	map3["cris"] = 36
	for key, value := range map3 {
		fmt.Printf("Key: %v. Value: %v\n", key, value)
	}
}