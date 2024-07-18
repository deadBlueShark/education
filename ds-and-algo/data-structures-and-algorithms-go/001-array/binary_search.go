package main
import ("fmt")

funct existed(arr []int, target int) bool {
	arrLen := len(arr)
	// binary search
	low := 0
	high := arrLen - 1
	for low <= high {
		mid := (low + high) / 2
		if arr[mid] == target {
			return true
		} else if arr[mid] < target {
			low = mid + 1
		} else {
			high = mid - 1
		}
	}
	return false
}

func main() {
	arr := []int{3, 4, 4, 2, 1}
	fmt.Println(existed(arr, 4)) // true
	fmt.Println(existed(arr, 5)) // false
}
