package dinner

import (
	"math/rand"
	"time"
)

func Choose() string {
	dinners := []string{"tacos", "pizza", "ramen"}
	rand.Seed(time.Now().UnixNano())
	return dinners[rand.Intn(len(dinners))]
}
