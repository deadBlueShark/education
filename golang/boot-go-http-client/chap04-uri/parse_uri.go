package main

import (
	"chap04-uri/localpakages/myuri"
	"fmt"
)

func main() {
	uri := "http://testuser:testpass@testdomain.com:8080/testpath?testsearch=testvalue#testhash"

	parsedURLStruct := myuri.ParseURL(uri)

	fmt.Println(parsedURLStruct)
}
