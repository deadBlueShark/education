package dns_looker

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
)

func GetDomainName(rawURL string) (string, error) {
	parseURL, err := url.Parse(rawURL)
	if err != nil {
		return "", err
	}

	return parseURL.Hostname(), nil
}

type (
	DNSResponse struct {
		Status   int        `json:"Status"`
		Tc       bool       `json:"TC"`
		Rd       bool       `json:"RD"`
		Ra       bool       `json:"RA"`
		Ad       bool       `json:"AD"`
		Cd       bool       `json:"CD"`
		Question []Question `json:"Question"`
		Answer   []Answer   `json:"Answer"`
	}
	Question struct {
		Name string `json:"name"`
		Type int    `json:"type"`
	}
	Answer struct {
		Name string `json:"name"`
		Type int    `json:"type"`
		TTL  int    `json:"TTL"`
		Data string `json:"data"`
	}
)

const cloudflareDNSURL = "https://1.1.1.1/dns-query"

func GetIPAddress(domain string) (string, error) {
	url := fmt.Sprintf("%s?name=%s&type=A", cloudflareDNSURL, url.QueryEscape(domain))

	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return "", fmt.Errorf("error creating request: %w", err)
	}
	req.Header.Set("accept", "application/dns-json")

	client := http.Client{}
	res, err := client.Do(req)
	if err != nil {
		return "", fmt.Errorf("error sending request: %w", err)
	}
	defer res.Body.Close()

	body, err := io.ReadAll(res.Body)
	if err != nil {
		return "", fmt.Errorf("error reading response body: %w", err)
	}

	var dnsStruct DNSResponse

	if err = json.Unmarshal(body, &dnsStruct); err != nil {
		return "", fmt.Errorf("error unmarshalling response body: %w", err)
	}

	if len(dnsStruct.Answer) == 0 {
		return "", fmt.Errorf("no answer found")
	}

	return dnsStruct.Answer[0].Data, nil
}
