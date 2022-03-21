def biggest_name(list):
  biggest = ""
  for name in list:
    if len(name) > len(biggest):
      biggest = name
  print(biggest)

biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
