package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type Project struct {
	Id        string `json:"id"`
	Title     string `json:"title"`
	Completed bool   `json:"completed"`
}

const projectEndpoint = "https://api.boot.dev/v1/courses_rest_api/learn-http/projects"

func main() {
	res, err := http.Get(projectEndpoint)
	if err != nil {
		log.Fatal(err)
	}

	defer res.Body.Close()

	var projects []Project

	err = json.NewDecoder(res.Body).Decode(&projects)
	if err != nil {
		log.Fatal(err)
	}

	logProject(projects)
}

func logProject(projects []Project) {
	for _, project := range projects {
		status := "In progress"
		if project.Completed {
			status = "Completed"
		}
		fmt.Printf("Project: %s\n - Status: %s\n", project.Title, status)
	}
}
