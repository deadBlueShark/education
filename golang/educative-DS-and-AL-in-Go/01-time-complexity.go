package main

import (
	"fmt"
)

func main() {
	fmt.Println("N = 100, Number of intrusctions O(n) ::", func1(100))
	fmt.Println("N = 100, Number of intrusctions O(n^2) ::", func2(100))
	fmt.Println("Sum of array [1, 2, 3, 4, 5] ::", sumOfArray([]int{1, 2, 3, 4, 5}))
	fmt.Println("Sum of array [1, 2, 3, 4, 5] ::", sumOfArray2([]int{1, 2, 3, 4, 5}))
}

// O(n) - Linear Time Complexity
func func1(n int) int {
	m := 0
	for i := 0; i < n; i++ {
		m += 1
	}
	return m
}

// O(n^2) - Quadratic Time Complexity
func func2(n int) int {
	m := 0
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			m += 1
		}
	}
	return m
}

// Write a method return sum of all integer item in an array
func sumOfArray(arr []int) int {
	sum := 0
	for _, v := range arr {
		sum += v
	}
	return sum
}

func sumOfArray2(arr []int) int {
	size := len(arr)
	sum := 0
	for i := 0; i < size; i++ {
		sum += arr[i]
	}
	return sum
}

// Write a method to search an item in an array
func searchItem(arr []int, item int) bool {
	for _, v := range arr {
		if v == item {
			return true
		}
	}
	return false
}

// binary search a sorted array
func binarySearch(arr []int, item int) bool {
	size := len(arr)
	if size == 0 {
		return false
	}
	mid := size / 2
	if arr[mid] == item {
		return true
	}
	if arr[mid] > item {
		return binarySearch(arr[:mid], item)
	}
	return binarySearch(arr[mid+1:], item)
}
