package myhttp

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

// Common HTTP client methods
func Get(url string) (*http.Response, error) {
	res, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("error fetching url: %w", err)
	}
	return res, nil
}

// JSON handling utilities
func readAndCloseBody(res *http.Response) ([]byte, error) {
	defer res.Body.Close()
	return io.ReadAll(res.Body)
}

func decodeJSON[T any](res *http.Response) (T, error) {
	var result T
	if err := json.NewDecoder(res.Body).Decode(&result); err != nil {
		return result, fmt.Errorf("error decoding JSON: %w", err)
	}
	return result, nil
}

func unmarshalJSON[T any](data []byte) (T, error) {
	var result T
	if err := json.Unmarshal(data, &result); err != nil {
		return result, fmt.Errorf("error unmarshaling JSON: %w", err)
	}
	return result, nil
}

// Data structures
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

type Project struct {
	Id        string `json:"id"`
	Title     string `json:"title"`
	Assignees int8   `json:"assignees"`
	Completed bool   `json:"completed"`
}

// API methods
func GetIssues(url string) ([]byte, error) {
	res, err := Get(url)
	if err != nil {
		return nil, err
	}
	return readAndCloseBody(res)
}

func GetUsers(url string) ([]User, error) {
	res, err := Get(url)
	if err != nil {
		return nil, err
	}
	defer res.Body.Close()
	return decodeJSON[[]User](res)
}

func GetProjects(url string) ([]Project, error) {
	res, err := Get(url)
	if err != nil {
		return nil, err
	}
	body, err := readAndCloseBody(res)
	if err != nil {
		return nil, err
	}
	return unmarshalJSON[[]Project](body)
}

// Utility functions
func PrettyPrint(data []byte) (string, error) {
	var prettyJSON bytes.Buffer
	if err := json.Indent(&prettyJSON, data, "", "  "); err != nil {
		return "", fmt.Errorf("error indenting JSON: %w", err)
	}
	return prettyJSON.String(), nil
}
