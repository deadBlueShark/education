package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"os"
	"strings"
)

/*
readInput - Reads a string from the user and prints the prefix before reading input. New
line characters are removed before returning the string
*/
func readInput(prefix string, reader *bufio.Reader) string {
	fmt.Print(prefix)
	input, err := reader.ReadString('\n')
	if err != nil {
		panic(err)
	}

	input = strings.Replace(input, "\n", "", -1)

	return input
}

/*
marshalJson - Convert a map of strings, convert them to JSON, and return the result as a string
*/
func marshalJson(input *map[string]string) string {
	bytes, err := json.Marshal(input)
	if err != nil {
		panic(err)
	}

	return string(bytes)

}

/*
main - Our main function, acting as the primary entrypoint for our program
*/
func main() {
	// we create our reader first here to avoid having readInput
	// create a new one after every call to the function
	reader := bufio.NewReader(os.Stdin)

	// read our user input
	name := readInput("Input name: ", reader)
	address := readInput("Input address: ", reader)

	// store it as a map of strings
	userInformation := map[string]string{
		"name":    name,
		"address": address,
	}

	// marshal the map into a JSON document and print it
	fmt.Println(marshalJson(&userInformation))
}
