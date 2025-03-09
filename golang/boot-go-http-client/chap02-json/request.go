package main

import (
	"chap02-json/resources"
	"fmt"
	"net/url"
)

const baseURL = "https://api.boot.dev"

func main() {
	// Parse the base URL
	base, err := url.Parse(baseURL)
	if err != nil {
		fmt.Println("Error parsing base URL:", err)
		return
	}

	// Join the base URL with the path
	path, err := url.JoinPath(base.String(), "/v1/courses_rest_api/learn-http/issues")
	if err != nil {
		fmt.Println("Error joining URL path:", err)
		return
	}

	// Create query parameters
	params := url.Values{}
	params.Add("limit", "1")

	// Construct the final URL
	finalURL := fmt.Sprintf("%s?%s", path, params.Encode())

	// Get and log the resources
	issues, err := resources.GetResources(finalURL)
	if err != nil {
		fmt.Println("Error getting issues:", err)
		return
	}

	fmt.Println("Issues:")
	resources.LogResources(issues)
}
