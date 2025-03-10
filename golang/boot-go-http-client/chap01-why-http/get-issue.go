package main

import (
	"fmt"
	"log"

	"chap01-why-http/localpackages/myhttp"
)

const issueURL = "https://api.boot.dev/v1/courses_rest_api/learn-http/issues"

func main() {
	issues, err := myhttp.GetIssues(issueURL)
	if err != nil {
		log.Fatalf("Error fetching issue data: %v", err)
	}

	prettyRes, err := myhttp.PrettyPrint(issues)
	if err != nil {
		log.Fatalf("Error pretty printing issue data: %v", err)
	}

	fmt.Println(prettyRes)
}
