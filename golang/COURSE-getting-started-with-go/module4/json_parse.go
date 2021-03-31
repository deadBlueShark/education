package main

import (
	"encoding/json"
	"fmt"
)

type Person struct {
	Name        string
	PhoneNumber string
	Age         int
}

func main() {
	p1 := Person{Name: "Cris", PhoneNumber: "032323223", Age: 32}

	// Marshal object to JSON:
	json_parsed, _ := json.Marshal(p1)
	fmt.Println(json_parsed)                 // [123 ... 65 103 101 34 58 51 50 125] -> []byte
	fmt.Printf("%#v\n", string(json_parsed)) // "{\"Name\":\"Cris\",\"PhoneNumber\":\"032323223\",\"Age\":32}"

	// Unmarshal JSON to object
	var p2 Person
	json.Unmarshal(json_parsed, &p2)
	fmt.Println(p2) // {Cris 032323223 32}
}
