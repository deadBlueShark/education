package main

import (
	"chap04-uri/localpakages/myuri"
	"fmt"
	"log"
)

func main() {
	uri := "http://testuser:testpass@testdomain.com:8080/testpath?testsearch=testvalue#testhash"

	parsedURLStruct, err := myuri.ParseURL(uri)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Protocol:", parsedURLStruct.Protocol)
	fmt.Println("Username:", parsedURLStruct.Username)
	fmt.Println("Password:", parsedURLStruct.Password)
	fmt.Println("Hostname:", parsedURLStruct.Hostname)
	fmt.Println("Port:", parsedURLStruct.Port)
	fmt.Println("Pathname:", parsedURLStruct.Pathname)
	fmt.Println("Search:", parsedURLStruct.Search)
	fmt.Println("Hash:", parsedURLStruct.Hash)
}
