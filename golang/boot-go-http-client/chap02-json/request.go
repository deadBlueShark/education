package main

import (
	"chap02-json/resources"
	"fmt"
)

const baseURL = "https://api.boot.dev"

func main() {
	issues, err := resources.GetResources(baseURL + "/v1/courses_rest_api/learn-http/issues?limit=1")
	if err != nil {
		fmt.Println("Error getting issues:", err)
		return
	}

	fmt.Println("Issues:")
	resources.LogResources(issues)
}
