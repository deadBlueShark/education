package main

import (
	"encoding/json"
	"fmt"
	"log"
)

func marshalAll[T any](items []T) ([][]byte, error) {
	// var marshalledItems [][]byte

	// Adding a capacity hint to marshalledItems using make([][]byte, 0, len(items))
	// for better performance with large slices
	// This pre-allocates the slice with the exact capacity needed, which avoids
	// multiple reallocations as the slice grows during append operations.
	// The rest of the function remains the same.
	marshalledItems := make([][]byte, 0, len(items))
	for _, item := range items {
		data, err := json.Marshal(item)
		if err != nil {
			return nil, fmt.Errorf("failed to marshal item: %w", err)
		}
		marshalledItems = append(marshalledItems, data)
	}

	return marshalledItems, nil
}

type User struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

func main() {
	users := []User{
		{Id: 1, Name: "John"},
		{Id: 2, Name: "Jane"},
	}

	marshalledUsers, err := marshalAll(users)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(marshalledUsers) // [[123 34 105 ...] [123 34 105 ...]]
}
