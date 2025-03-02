# function with default value for an argument
def power(num, x=1):
    result = 1
    for i in range(x): result = result * num
    return result

# function with variable number of arguments
def multi_add(*args):
    result = 0
    for x in args: result = result + x
    return result

print(power(2))
print(power(2, 3))
print(power(x=3, num=2))
print(multi_add(4, 5, 10, 4))
