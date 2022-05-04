def fibonacci(n):
  sequence = [0, 1]
  index = 0
  while len(sequence) <= n:
    sequence.append(sequence[index] + sequence[index + 1])
    index += 1
  return sequence

print(fibonacci(10))
