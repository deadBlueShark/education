package main

import "fmt"

type Student struct {
	name    string
	age     int
	address string
}

func main() {
	student1 := Student{name: "Nguyen", age: 23, address: "DN"}
	fmt.Println(student1)
	printStudent(&student1)

	var student2 Student
	student2 = Student{name: "Nguyen", age: 23, address: "DN"}
	fmt.Printf("%#v\n", student2)

	var student3 Student
	fmt.Printf("%#v\n", student3) // Student{name:"", age:0, address:""}
}

func printStudent(student *Student) {
	fmt.Println("-------------")
	fmt.Println("Name:", student.name)
	fmt.Println("Age:", student.age)
	fmt.Println("Address:", student.address)
	// Or
	fmt.Println("Name:", (*student).name)
	fmt.Println("Age:", (*student).age)
	fmt.Println("Address:", (*student).address)
	fmt.Println("-------------")
}