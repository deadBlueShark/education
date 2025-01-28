/*
Write a program which reads information from a file and represents it in a slice of structs.
Assume that there is a text file which contains a series of names. Each line of the text file
has a first name and a last name, in that order, separated by a single space on the line.

Your program will define a name struct which has two fields, fname for the first name,
and lname for the last name. Each field will be a string of size 20 (characters).

Your program should prompt the user for the name of the text file. Your program will
successively read each line of the text file and create a struct which contains the first and
last names found in the file. Each struct created will be added to a slice, and after all lines
have been read from the file, your program will have a slice containing one struct for each line
in the file. After reading all lines from the file, your program should iterate through your
slice of structs and print the first and last names found in each struct.

Submit your source code for the program, “read.go”.
*/
package main

import (
	"fmt"
	"io/ioutil"
	"strings"
)

type Person1 struct {
	firstName string
	lastName  string
}

func main() {
	// define array slice
	var names []Person1

	// User type in file path
	var filePath string
	fmt.Printf("Enter input file path ...\n> ")
	_, err := fmt.Scan(&filePath)
	if err != nil {
		fmt.Printf("Error reading input: %v", err)
		return
	}

	data, err := ioutil.ReadFile(filePath)
	if err != nil {
		fmt.Println("File reading error:", err)
		return
	}
	text := strings.Trim(string(data), "\n")
	text = strings.Trim(text, " ")
	lines := strings.Split(text, "\n")
	for _, line := range lines {
		items := strings.Split(line, " ")
		newPerson := Person1{firstName: items[0], lastName: items[1]}
		names = append(names, newPerson)
	}
	fmt.Println("\n* List of names found in file", filePath, ":")
	for _, p := range names {
		fmt.Printf("%s %s\n", p.firstName, p.lastName)
	}
	fmt.Printf("\n")
}
