# Exercise 1:
name = input("Digite seu nome: ")
name_length = len(name)

while name_length > 0:
  print(name[0:name_length])
  name_length -= 1
