package main

import (
	"bufio"
	"fmt"
	"math/rand"
	"os"
	"strconv"
	"strings"
	"time"
)

func typeNumber() int {
	fmt.Print("Your guessed number:")
	reader := bufio.NewReader(os.Stdin)
	input, _ := reader.ReadString('\n')
	number, _ := strconv.ParseInt(strings.TrimSpace(input), 10, 64)
	return int(number)
}

func detectResult(guessNumber, targetNumber, index int) {
	if guessNumber < targetNumber {
		fmt.Println("LOW,", "you have", 10-index-1, "guessing times left")
	} else if guessNumber > targetNumber {
		fmt.Println("HIGH,", "you have", 10-index-1, "guessing times left")
	} else {
		fmt.Println("CORRECT,", "you get it right in", index+1, "guessing times")
	}
}
func main() {
	timeForSeed := time.Now().Unix()
	fmt.Println(timeForSeed)
	rand.Seed(timeForSeed)
	targetNumber := rand.Intn(101)
	fmt.Println("targetNumber:", targetNumber)
	guessNumber := -1

	for i := 0; guessNumber != targetNumber; i++ {
		if i == 10 {
			fmt.Println("YOU LOSE")
			break
		}
		guessNumber = typeNumber()
		detectResult(guessNumber, targetNumber, i)
	}
}
