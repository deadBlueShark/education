package main

import (
	"fmt"

	"chap03-dns/localpackages/dns_looker"
)

func main() {
	ipAddress, err := dns_looker.GetIPAddress("facebook.com")
	if err != nil {
		fmt.Println("Error getting IP address:", err)
		return
	}
	fmt.Println(ipAddress)
}
