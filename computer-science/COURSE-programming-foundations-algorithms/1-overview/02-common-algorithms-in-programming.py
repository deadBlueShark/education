## COMMON ALGORITHM
# - Searching algorithms
# - Sorting algorithms
# - Computational algorithms: are used to take one set of data and derived 
# another set of data from it
# Ex: Calculating whether a given number is a prime number or maybe computing
# a temperature in one scale when you already have it in another scale. 
# - Collection algorithms: work with collections of data (count specific items,
# navigate among elements, filter out unwanted data, ...)

## EXAMPLE: Euclid's Algorithms
# Find the greatest common denominator (GCD) of two integers
# Algorithm:
#   1) For two integers a and b, where a > b, divide a by b
#   2) If the remainder, r, is 0, then stop: GCD is b
#   3) Otherwise, set a to b, b to r, and repeat at step 1 until r is 0

# Implement:

def find_gcp(a, b):
  while (b != 0):
    temp = a
    a = b 
    b = temp % b
  
  return a

print(find_gcp(20, 8))
print(find_gcp(42, 28))