package http

import (
	"fmt"
	"io"
	"net/http"
)

func GetIssueData() ([]byte, error) {
	resp, err := http.Get("https://api.boot.dev/v1/courses_rest_api/learn-http/issues")
	if err != nil {
		return nil, fmt.Errorf("error fetching URL: %w", err)
	}

	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	return body, err
}
