lista = [1, 4, 5, 2]

def biggest_num(numbers):
  if len(numbers) < 2:
    return numbers[0]
  else:
    n = biggest_num(numbers[1:])
    return n if n > numbers[0] else numbers[0]
    

print(biggest_num(lista))