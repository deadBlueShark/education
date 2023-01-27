package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"os"
	"strings"
)

func main() {
	userInfo := make(map[string]string)
	readerStream := bufio.NewReader(os.Stdin)

	fmt.Println("Enter your name: ")
	name, _ := readerStream.ReadString('\n')
	fmt.Println("Enter your address: ")
	address, _ := readerStream.ReadString('\n')

	userInfo["name"] = strings.TrimSpace(name)
	userInfo["address"] = strings.TrimSpace(address)

	parsedUserInfo, _ := json.Marshal(userInfo)
	fmt.Println(string(parsedUserInfo))
}