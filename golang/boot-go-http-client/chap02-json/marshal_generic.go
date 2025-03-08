package main

import (
	"encoding/json"
	"fmt"
	"log"
)

func main() {
	// any is an alias for interface{}
	var data map[string]interface{}

	jsonString := `{"name": "Alice", "age": 30, "address": {"city": "Wonderland"}}`
	dataInBytes := []byte(jsonString)
	err := json.Unmarshal(dataInBytes, &data)
	if err != nil {
		log.Fatal("unmarshalling error: ", err)
	}

	fmt.Println(data)            // map[address:map[city:Wonderland] age:30 name:Alice]
	fmt.Println(data["name"])    // Alice
	fmt.Println(data["address"]) // map[city:Wonderland]

	// Type assertion
	addressMap, ok := data["address"].(map[string]any)
	if !ok {
		log.Fatal("address is not a map[string]any")
	}
	fmt.Println(addressMap["city"]) // Wonderland
}
