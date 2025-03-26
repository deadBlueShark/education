package main

import (
	"fmt"
	"log"
	"net/http"
)

const userEndpoint = "https://api.boot.dev/v1/courses_rest_api/learn-http/users"

func main() {
	req, err := http.NewRequest("GET", userEndpoint, nil)
	if err != nil {
		log.Fatal(err)
	}

	// Setting a header on the new request
	req.Header.Set("x-api-key", "****")

	// Making the request
	client := http.Client{}
	res, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}
	defer res.Body.Close()

	// Reading the header from the response
	header := res.Header.Get("Access-Control-Allow-Methods")
	fmt.Println("Access-Control-Allow-Methods:", header) // GET, POST, OPTIONS, PUT, DELETE
}
