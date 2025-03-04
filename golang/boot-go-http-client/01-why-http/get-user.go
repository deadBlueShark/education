package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

const usersUrl = "https://api.boot.dev/v1/courses_rest_api/learn-http/users"

func main() {
	users, err := getUsers(usersUrl)
	if err != nil {
		log.Fatalf("Error fetching users: %v", err)
	}
	fmt.Printf("%+v\n", users)
}

type User struct {
	Id         string     `json:"id"`
	Experience int        `json:"experience"`
	Remote     bool       `json:"remote"`
	Role       string     `json:"role"`
	UserDetail UserDetail `json:"user"`
}

type UserDetail struct {
	Name     string `json:"name"`
	Location string `json:"location"`
	Age      int    `json:"age"`
}

func getUsers(url string) ([]User, error) {
	userResp, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("error fetching users: %w", err)
	}

	defer userResp.Body.Close()

	var users []User
	err = json.NewDecoder(userResp.Body).Decode(&users)

	if err != nil {
		return nil, fmt.Errorf("error reading users: %w", err)
	}

	return users, nil
}
