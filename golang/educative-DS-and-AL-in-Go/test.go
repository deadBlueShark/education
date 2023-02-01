package main

import "fmt"

func main() {
	arr := [5]int{4, 5, 6, 7, 8}
	size := len(arr)
	fmt.Println("Size of array: ", size)
	mid := size / 2 // 2
	fmt.Println("Mid of array: ", mid)
	fmt.Println("First half of array: ", arr[:mid], ". Len: ", len(arr[:mid]))
	fmt.Println("Second half of array except mid: ", arr[mid+1:], ". Len: ", len(arr[mid+1:]))
}
