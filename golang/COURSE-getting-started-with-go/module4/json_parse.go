package main

import (
	"encoding/json"
	"fmt"
)

// Person struct: Keys must be Pascal Case for Marshal
type Person struct {
	Name        string
	PhoneNumber string
	Age         int
}

func main() {
	p1 := Person{Name: "Cris", PhoneNumber: "032323223", Age: 32}

	// Marshal object to JSON:
	jsonParsed, _ := json.Marshal(p1)
	fmt.Println(jsonParsed)                 // [123 ... 65 103 101 34 58 51 50 125] -> []byte
	fmt.Printf("%#v\n", string(jsonParsed)) // "{\"Name\":\"Cris\",\"PhoneNumber\":\"032323223\",\"Age\":32}"

	// Unmarshal JSON to object
	var p2 Person
	json.Unmarshal(jsonParsed, &p2)
	fmt.Printf("%#v\n", p2) // {Cris 032323223 32}
}