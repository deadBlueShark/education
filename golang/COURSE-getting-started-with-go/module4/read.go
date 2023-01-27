package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

type User struct {
	firstName string
	lastName  string
}

func main() {
	var users []User

	var fileName string
	fmt.Println("Enter file name:")
	fmt.Scan(&fileName)

	file, err := os.Open(fileName)
	if err != nil {
		fmt.Println("Open file failed")
		return
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		name := strings.Split(scanner.Text(), " ")
		user := User{firstName: name[0], lastName: name[1]}
		users = append(users, user)
	}

	for _, value := range users {
		fmt.Printf("First Name: %v. Last Name: %v\n", value.firstName, value.lastName)
	}
}
