package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"os"
	"strings"
)

func main() {
	user_info := make(map[string]string)
	reader_stream := bufio.NewReader(os.Stdin)

	fmt.Println("Enter your name: ")
	name, _ := reader_stream.ReadString('\n')
	fmt.Println("Enter your address: ")
	address, _ := reader_stream.ReadString('\n')

	user_info["name"] = strings.TrimSpace(name)
	user_info["address"] = strings.TrimSpace(address)

	parsed_user_info, _ := json.Marshal(user_info)
	fmt.Println(string(parsed_user_info))
}
