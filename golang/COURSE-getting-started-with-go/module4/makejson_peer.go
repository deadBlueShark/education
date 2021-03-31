/*
Write a program which prompts the user to first enter a name, and then enter an address. Your program should create a map and add the name and address to the map using the keys “name” and “address”, respectively. Your program should use Marshal() to create a JSON object from the map, and then your program should print the JSON object.

Submit your source code for the program,
“makejson.go”.
*/
package main

import (
  "fmt"
  "bufio"
  "os"
  "encoding/json"
  "strings"
)

func main() {


    fmt.Printf("What is your first name?\n> ")
    inputReader1 := bufio.NewReader(os.Stdin)
    name, _ := inputReader1.ReadString('\n')
    name = strings.Trim(name, "\n")

    fmt.Printf("What is your address?\n> ")
    inputReader2 := bufio.NewReader(os.Stdin)
    address, _ := inputReader2.ReadString('\n')
    address = strings.Trim(address, "\n")

    person := make(map[string]string)
    person["name"] = name
    person["address"] = address

//    j, _ := json.Marshal(person)
    j, _ := json.MarshalIndent(person, "", "    ")
    fmt.Println(string(j))


}
