// Source: Reading 16GB File in Seconds, Golang
// https://medium.com/swlh/processing-16gb-file-in-seconds-go-lang-3982c235dfa2
package main

import (
	"bufio"
	"errors"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"strconv"
	"strings"
)

func main() {
	// Read file line by line
	var numbers1 []string
	file, err := os.Open("012-file.txt")
	if err != nil {
		log.Fatal("cannot open file")
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		numbers1 = append(numbers1, scanner.Text())
	}
	fmt.Printf("%#v\n", convertFloat(numbers1)) // []float64{21, 43, 31, 93, 923}

	// Read all file as once
	content, err := readAllFile("012-file.txt")
	if err != nil {
		log.Fatal(err)
	}
	numbers2 := strings.Split(content, "\n")
	fmt.Printf("%#v", convertFloat(numbers2)) // []float64{21, 43, 31, 93, 923}
}

func readAllFile(fileName string) (string, error) {
	content, err := ioutil.ReadFile(fileName)
	if err != nil {
		return "", errors.New("cannot read file")
	}

	return string(content), nil
}

func convertFloat(stringSlice []string) []float64 {
	var floatSlice []float64
	for _, item := range stringSlice {
		result, _ := strconv.ParseFloat(item, 64)
		floatSlice = append(floatSlice, result)
	}
	return floatSlice
}