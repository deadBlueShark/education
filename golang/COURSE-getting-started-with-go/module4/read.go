package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

type User struct {
	fname string
	lname string
}

func main() {
	var file_name string
	var users []User

	fmt.Println("Enter file name:")
	fmt.Scan(&file_name)

	file, err := os.Open(file_name)
	if err != nil {
		fmt.Println("Open file failed")
		return
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		name := strings.Split(scanner.Text(), " ")
		user := User{fname: name[0], lname: name[1]}
		users = append(users, user)
	}

	for _, value := range users {
		fmt.Printf("First Name: %v. Last Name: %v\n", value.fname, value.lname)
	}
}
