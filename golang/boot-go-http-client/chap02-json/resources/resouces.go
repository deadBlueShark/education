package resources

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"sort"
)

func GetResources(url string) ([]map[string]any, error) {
	var resources []map[string]any

	res, err := http.Get(url)
	if err != nil {
		return resources, err
	}

	defer res.Body.Close()

	data, err := io.ReadAll(res.Body)
	if err != nil {
		return nil, fmt.Errorf("read response to []byte error: %w", err)
	}

	err = json.Unmarshal(data, &resources)
	return resources, err

}

func LogResources(resources []map[string]any) {
	var formattedStrings []string

	for _, resource := range resources {
		for key, value := range resource {
			str := fmt.Sprintf("Key: %s - Value: %v", key, value)
			formattedStrings = append(formattedStrings, str)
		}
	}

	sort.Strings(formattedStrings)

	for _, str := range formattedStrings {
		fmt.Println(str)
	}
}
