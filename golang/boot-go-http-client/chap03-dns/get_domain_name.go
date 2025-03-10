package main

import (
	"fmt"
	"log"

	"chap03-dns/localpackages/dns_looker"
)

func main() {
	domainName, err := dns_looker.GetDomainName("https://api.boot.dev/v1/courses_rest_api/learn-http/issues")
	if err != nil {
		log.Fatalf("Error getting domain name: %v", err)
	}
	fmt.Println(domainName) // api.boot.dev
}
