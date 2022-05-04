def recursive_total_of_pairs(n):
  if n == 1:
    return 0
  elif n % 2 == 0:
    return 1 + recursive_total_of_pairs(n-1)
  else:
    return recursive_total_of_pairs(n-1)

print(recursive_total_of_pairs(4))