arr = [3, 4, 5, 6, 9, 7, 33]

my_sum = 0
length = len(arr)

for i in range(0, length, 2):
    my_sum += arr[i]

print(my_sum)
