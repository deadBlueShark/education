package main

import (
	"fmt"
	"log"

	"01-why-http/localpackage/http"
)

const issueURL = "https://api.boot.dev/v1/courses_rest_api/learn-http/issues"

func main() {
	issues, err := http.GetIssueData(issueURL)
	if err != nil {
		log.Fatalf("Error fetching issue data: %v", err)
	}

	prettyRes, err := http.PrettyPrint(string(issues))
	if err != nil {
		log.Fatalf("Error pretty printing issue data: %v", err)
	}

	fmt.Println(prettyRes)
}
