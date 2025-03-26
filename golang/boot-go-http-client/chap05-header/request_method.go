package main

import (
	"fmt"
	"log"
	"net/http"
	"time"
)

const userEndpoint = "https://jsonplaceholder.typicode.com/users"

func main() {
	client := &http.Client{
		Timeout: time.Second * 10,
	}
	req, err := http.NewRequest("GET", userEndpoint, nil)
	if err != nil {
		log.Fatal(err)
	}

	res, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}
	defer res.Body.Close()

	fmt.Println("Response status:", res.Status) // 200 OK

	// The http.Response struct has a .StatusCode property
	// that contains the status code of the response
	fmt.Println("Response status code:", res.StatusCode) // 200
}
