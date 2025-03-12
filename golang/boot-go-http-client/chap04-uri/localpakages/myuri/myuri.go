package myuri

import (
	"net/url"
)

type ParsedURL struct {
	Protocol string
	Username string
	Password string
	Hostname string
	Port     string
	Pathname string
	Search   string
	Hash     string
}

func ParseURL(urlInput string) (ParsedURL, error) {
	parsedURL, err := url.Parse(urlInput)
	if err != nil {
		return ParsedURL{}, err
	}

	return ParsedURL{
		Protocol: parsedURL.Scheme,
		Username: parsedURL.User.Username(),
		Password: func() string {
			pwd, _ := parsedURL.User.Password()
			return pwd
		}(),
		Hostname: parsedURL.Hostname(),
		Port:     parsedURL.Port(),
		Pathname: parsedURL.Path,
		Search:   parsedURL.RawQuery,
		Hash:     parsedURL.Fragment,
	}, nil
}
