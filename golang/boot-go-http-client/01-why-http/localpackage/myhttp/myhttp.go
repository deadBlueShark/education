package myhttp

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

func GetIssues(url string) ([]byte, error) {
	res, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("error fetching url: %w", err)
	}

	defer res.Body.Close()

	body, err := io.ReadAll(res.Body)
	if err != nil {
		return nil, fmt.Errorf("error reading response body: %w", err)
	}

	return body, nil
}

type User struct {
	Id         string     `json:"id"`
	Experience int        `json:"experience"`
	Remote     bool       `json:"remote"`
	Role       string     `json:"role"`
	UserDetail UserDetail `json:"user"`
}

type UserDetail struct {
	Name     string `json:"name"`
	Location string `json:"location"`
	Age      int    `json:"age"`
}

func GetUsers(url string) ([]User, error) {
	userResp, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("error fetching users: %w", err)
	}

	defer userResp.Body.Close()
	return parseJSONByDecode(userResp)
}

// The Decode method of json.Decoder streams data from an io.Reader into a Go struct
// Using a json.Decoder can be more memory-efficient because it doesn't load all the data into memory at once
func parseJSONByDecode(res *http.Response) ([]User, error) {
	var users []User
	err := json.NewDecoder(res.Body).Decode(&users)
	if err != nil {
		return nil, fmt.Errorf("error reading users: %w", err)
	}
	return users, nil
}

type Project struct {
	Id        string `json:"id"`
	Title     string `json:"title"`
	Assignees int8   `json:"assignees"`
	Completed bool   `json:"completed"`
}

func GetProjects(url string) ([]Project, error) {
	res, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("error fetching url: %w", err)
	}

	defer res.Body.Close()

	return parseJSONByMarshal(res)
}

// json.Unmarshal works with data that's already in []byte format,
// ideal for small JSON data you already have in memory
func parseJSONByMarshal(res *http.Response) ([]Project, error) {
	body, err := io.ReadAll(res.Body)
	if err != nil {
		return nil, fmt.Errorf("error reading response body: %w", err)
	}

	var projects []Project
	err = json.Unmarshal(body, &projects)
	if err != nil {
		return nil, fmt.Errorf("error unmarshaling response body: %w", err)
	}
	return projects, nil
}

func PrettyPrint(data string) (string, error) {
	var prettyJSON bytes.Buffer
	err := json.Indent(&prettyJSON, []byte(data), "", "  ")
	if err != nil {
		return "", fmt.Errorf("error indenting json: %w", err)
	}

	return prettyJSON.String(), nil
}
