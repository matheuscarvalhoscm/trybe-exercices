entrada = [1, 3, 2, 4, 5, 1]
# saída: 1

def find_duplicate(lisT):
  duplicated = 0
  for element in lisT:
    if lisT.count(element) > 1:
       duplicated = element
  print(duplicated)

find_duplicate(entrada)
