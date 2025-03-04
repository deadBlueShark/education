package main

import (
	"fmt"
	"log"

	"01-why-http/localpackage/http"
)

func main() {
	issues, err := http.GetIssueData()
	if err != nil {
		log.Fatalf("Error fetching issue data: %v", err)
	}

	fmt.Println(string(issues))
}
