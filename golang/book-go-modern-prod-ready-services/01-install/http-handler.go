package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome to the home page!")
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/", HomeHandler)
	http.Handle("/", router)

	fmt.Println("Starting server on port 8080")
	http.ListenAndServe(":8080", router)
}
