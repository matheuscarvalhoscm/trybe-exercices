def multiply_array(numbers):
    result = 0
    for number in numbers:
            result *= number

    return result

list_one = list(range(10))
print(multiply_array(list_one))
# 0(n) / 0(1)