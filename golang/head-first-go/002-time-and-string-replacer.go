package main

import (
	"fmt"
	"strings"
	"time"
)

func main() {
	var now time.Time = time.Now()
	var year int = now.Year()
	now1 := time.Now()
	year1 := now1.Year()
	fmt.Println(now)
	fmt.Println(year, year1)

	sentence := "happy new year"
	var replacer *strings.Replacer = strings.NewReplacer("a", "A", "e", "E")
	fmt.Println(replacer.Replace(sentence))
}
