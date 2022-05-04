import enum


def verify_combinations(arr):
  result = []
  for index, item in enumerate(arr):
    for index2, item2 in enumerate(arr):
      if item == item2 and index2 > index:
        result.append((index, index2))
  return f'Combinações: {len(result)}'

print(verify_combinations([1, 3, 1, 1, 2, 3]))
