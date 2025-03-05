package main

import (
	"encoding/json"
	"fmt"
	"log"
)

type Board struct {
	Id       int    `json:"id"`
	Name     string `json:"name"`
	TeamId   int    `json:"team"`
	TeamName string `json:"team_name"`
}

func main() {
	board := Board{
		Id:       1,
		Name:     "My Board",
		TeamId:   1,
		TeamName: "My Team",
	}

	byteBoard, err := json.Marshal(board)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(string(byteBoard)) // {"id":1,"name":"My Board","team":1,"team_name":"My Team"}
	fmt.Println(byteBoard)         // In []byte: [123 34 105 100 34 58 49 44 34 .... ]
}
