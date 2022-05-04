dict_one = {element: element * 2 for element in range(3, 21)}
for element in dict_one:
  if element % 2 != 0:
    dict_one[element] = element * 3
print(dict_one)