package myuri

import (
	"net/url"
)

type ParsedURL struct {
	protocol string
	username string
	password string
	hostname string
	port     string
	pathname string
	search   string
	hash     string
}

func ParseURL(urlInput string) ParsedURL {
	parsedURL, err := url.Parse(urlInput)
	if err != nil {
		return ParsedURL{}
	}

	return ParsedURL{
		protocol: parsedURL.Scheme,
		username: parsedURL.User.Username(),
		password: func() string {
			pwd, _ := parsedURL.User.Password()
			return pwd
		}(),
		hostname: parsedURL.Hostname(),
		port:     parsedURL.Port(),
		pathname: parsedURL.Path,
		search:   parsedURL.RawQuery,
		hash:     parsedURL.Fragment,
	}
}
