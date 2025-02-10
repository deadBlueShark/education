package main

import "fmt"

type Person struct {
	Name string
	Age  int
}

func (person Person) intro() {
	fmt.Printf("My name is %s and I am %d years old\n", person.Name, person.Age)
}

func (person Person) sayHiWith(otherPerson Person) {
	s := fmt.Sprintf("Hi %s, my name is %s", otherPerson.Name, person.Name)
	fmt.Println(s)
}

func main() {
	person := Person{Name: "Bob", Age: 30}
	person.intro()

	person2 := Person{Name: "John", Age: 40}
	person2.sayHiWith(person)
}
