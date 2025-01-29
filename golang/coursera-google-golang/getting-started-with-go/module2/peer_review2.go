package main

import (
	"fmt"
	"strings"
)

func main() {
	for {
		var s string
		var answer string
		fmt.Println("Please input your string:")
		_, err := fmt.Scan(&s)
		if err != nil {
			fmt.Println("Your input is invalid")
			return
		}

		s = strings.ToLower(s)

		if strings.HasPrefix(s, "i") == true &&
			strings.HasSuffix(s, "n") == true &&
			strings.Contains(s, "a") {

			fmt.Println("FOUND!!")
		} else {
			fmt.Println("NOT FOUND!!")
		}

		fmt.Println("Do you want to continue searching ian? answer YES or NO")
		_, err = fmt.Scan(&answer)
		if err != nil {
			fmt.Println("Your input is invalid")
			return
		}

		answer = strings.ToUpper(answer)
		if answer == "YES" {
			continue
		} else if answer == "NO" {
			break
		}
	}
	fmt.Println("FINISH")
}
