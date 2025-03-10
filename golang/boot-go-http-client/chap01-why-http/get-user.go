package main

import (
	"fmt"
	"log"

	"chap01-why-http/localpackages/myhttp"
)

const usersUrl = "https://api.boot.dev/v1/courses_rest_api/learn-http/users"

func main() {
	users, err := myhttp.GetUsers(usersUrl)
	if err != nil {
		log.Fatalf("Error fetching users: %v", err)
	}
	fmt.Printf("%+v\n", users)
}
