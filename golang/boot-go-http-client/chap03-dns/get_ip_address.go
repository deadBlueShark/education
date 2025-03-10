package main

import (
	"fmt"
	"log"

	"chap03-dns/localpackages/dns_looker"
)

func main() {
	ipAddress, err := dns_looker.GetIPAddress("facebook.com")
	if err != nil {
		log.Fatalf("Error getting IP address: %v", err)
	}
	fmt.Println(ipAddress)
}
