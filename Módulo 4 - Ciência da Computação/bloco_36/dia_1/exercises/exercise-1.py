duplicated_array = [1, 2, 3, 4, 5, 2]
singular_array = [1, 2, 3, 4, 5]
duplicated_array2 = list(range(100))
duplicated_array2.append(2)

def contains_duplicate(arr):
  for n in arr:
    if arr.count(n) > 1: return True
  
  return False

case_1 = contains_duplicate(duplicated_array)
case_2 = contains_duplicate(singular_array)
case_3 = contains_duplicate(duplicated_array2)

print(case_1)
print(case_2)
print(case_3)
