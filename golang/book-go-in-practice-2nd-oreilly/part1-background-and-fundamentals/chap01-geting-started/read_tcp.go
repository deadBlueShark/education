package main

import (
	"bufio"
	"fmt"
	"log"
	"net"
)

func main() {
	// Connects over TCP to golang.org:80
	conn, err := net.Dial("tcp", "golang.org:80")

	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	// Sends a formatted string over the connection
	// In this case, a basic HTTP GET request line
	fmt.Fprintf(conn, "GET / HTTP/1.0\r\n\r\n")

	// Reads the response from the server, up until a newline
	// The response is a stream of bytes, so we need to read it into a string
	status, err := bufio.NewReader(conn).ReadString('\n')

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Response status:", status) // Response status: HTTP/1.0 200 OK
}
