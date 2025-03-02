# The array type can hold homogeneous data types and operate
# on them more efficiently while using less memory
from array import array
from sys import getsizeof

# Create an array of integer numbers
arr1 = array('i', [2, 4, 6, 8, 10, 12, 14, 16, 18, 20])
print(arr1.typecode)        # i
print(arr1.itemsize)        # 4

# Add additional items to the array
arr1.insert(3, 0) # push at [3] index value 0
arr1.append(22)           # push to arr1
arr1.extend([24, 26, 28]) # push to arr1
print(arr1)

# iterate over the array content like any other list
for i, elem in enumerate(arr1):
    arr1[i] = elem*2
print(arr1)

# Try to add a non-integer number to the array
arr1.insert(0, 1.25)

# Create an array to hold bytes instead of ints
arr2 = array('B', [18, 102, 182, 56, 89, 5, 254, 32, 64, 50])
print(arr2.typecode)    # B
print(arr2.itemsize)    # 1

# try to add an item that's out of range
# arr2.append(300)

# Convert an array to a list
list1 = arr2.tolist()
print(list1)
print(getsizeof(list1))         # 136
