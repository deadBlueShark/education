package main

import (
	"fmt"
	"log"

	"chap01-why-http/localpackage/myhttp"
)

const projectURL = "https://api.boot.dev/v1/courses_rest_api/learn-http/projects"

func main() {
	projects, err := myhttp.GetProjects(projectURL)
	if err != nil {
		log.Fatalf("Error fetching project data: %v", err)
	}

	fmt.Printf("%+v\n", projects)
}
