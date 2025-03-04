package dinner

import (
	"math/rand"
	"time"
)

var (
	dinners = []string{"tacos", "pizza", "ramen"}
	r       = rand.New(rand.NewSource(time.Now().UnixNano()))
)

// Choose returns a random dinner option
func Choose() string {
	return dinners[r.Intn(len(dinners))]
}
