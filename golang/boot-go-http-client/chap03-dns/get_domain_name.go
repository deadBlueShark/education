package main

import (
	"fmt"

	"chap03-dns/localpackages/dns_looker"
)

func main() {
	domainName, err := dns_looker.GetDomainName("https://api.boot.dev/v1/courses_rest_api/learn-http/issues")
	if err != nil {
		fmt.Println("Error getting domain name:", err)
		return
	}
	fmt.Println(domainName) // api.boot.dev
}
