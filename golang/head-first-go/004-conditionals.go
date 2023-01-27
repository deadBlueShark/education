package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

func main() {
	fmt.Println("Enter a grade:")
	// Set up a "buffered reader" that get text from keyboard
	reader := bufio.NewReader(os.Stdin)
	// Return everything the user typing, up until they press Enter key
	input, err := reader.ReadString('\n')

	// Report the error and stop program
	if err != nil {
		log.Fatal("Input error", err)
	}

	grade, err := strconv.ParseFloat(strings.TrimSpace(input), 64)
	if err != nil {
		log.Fatal("Parse error", err)
	}

	fmt.Println("Grade:", grade)
	if grade == 100 {
		fmt.Println("Perfect!")
	} else if grade >= 60 {
		fmt.Println("Passed!")
	} else {
		fmt.Println("Failed!")
	}
}
