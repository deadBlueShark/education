package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	voteList := make(map[string]int)
	file, _ := os.Open("015-votes.txt")
	defer file.Close()
	scanner := bufio.NewScanner(file)

	var maxVoteCount int
	var maxVotePerson string
	for scanner.Scan() {
		text := scanner.Text()
		voteList[text] += 1
		if voteList[text] > maxVoteCount {
			maxVoteCount = voteList[text]
			maxVotePerson = text
		}
	}

	fmt.Printf("%#v\n", voteList)
	fmt.Println("maxVoteCount", maxVoteCount)
	fmt.Println("maxVotePerson", maxVotePerson)

	// Loops map
	for key, value := range voteList {
		fmt.Println("Key:", key, ". Value:", value)
	}

	// Check exists
	value, ok := voteList["Carr Darla"]
	if ok {
		fmt.Println("Carr Darla is voted", value, "times")
	} else {
		fmt.Println("Carr Darla does not exists")
	}

	delete(voteList, "Carr Darla")
	value, ok = voteList["Carr Darla"]
	if ok {
		fmt.Println("Carr Darla is voted", value, "times")
	} else {
		fmt.Println("Carr Darla does not exists")
	}
}