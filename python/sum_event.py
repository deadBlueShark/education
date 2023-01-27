arr = [3, 4, 5, 6, 9, 7, 33]

sum = 0
length = len(arr)

for i in range(0, length, 2):
  sum += arr[i]


print(sum)
