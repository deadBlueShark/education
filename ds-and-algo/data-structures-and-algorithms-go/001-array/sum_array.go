package main
import "fmt"

func sumArr(arr []int) int {
  sum := 0
	arrLen := len(arr)
	for i := 0; i < arrLen; i++ {
		sum += arr[i]
	}
	return sum
}

// Testing the sumArr function
func main() {
	arr := []int{3, 4, 4, 2, 1}
	fmt.Println(sumArr(arr))
}
