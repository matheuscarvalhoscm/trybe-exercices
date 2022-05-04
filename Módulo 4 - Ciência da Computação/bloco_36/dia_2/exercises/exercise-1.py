def total_of_pairs(numbers):
  pairs = 0
  for number in numbers:
    if number % 2 == 0:
      pairs += 1
  print(f"Existem {pairs} números pares na sequência")

total_of_pairs(list(range(10)))
