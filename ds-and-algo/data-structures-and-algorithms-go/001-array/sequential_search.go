package main
import ("fmt")

func existed(arr []int, target int) bool {
	arrLen := len(arr)

	for i := 0; i < arrLen; i++ {
		if arr[i] == target {
			return true
		}
	}

	return false
}

// Testing the existed function
func main() {
	arr := []int{3, 4, 4, 2, 1}
	fmt.Println(existed(arr, 4)) // true
	fmt.Println(existed(arr, 5)) // false
}
