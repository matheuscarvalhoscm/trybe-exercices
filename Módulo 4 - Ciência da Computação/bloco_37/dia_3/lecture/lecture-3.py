def map_str(string):
  new_dict = {}
  for char in string:
    if char not in new_dict:
      new_dict[char] = 1
    else:
      new_dict[char] += 1
  print(new_dict)

map_str('matheus')
map_str('angela')
map_str('adail')
