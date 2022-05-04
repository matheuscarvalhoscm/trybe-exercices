def reverse_list(param_list):
  list_length = len(param_list) - 1
  reverse = []
  while list_length >= 0:
    reverse.append(param_list[list_length])
    list_length -= 1
  return reverse

print(reverse_list(['aaa', 'bbb', 'ccc']))
print(reverse_list(['3', '2', '1']))
