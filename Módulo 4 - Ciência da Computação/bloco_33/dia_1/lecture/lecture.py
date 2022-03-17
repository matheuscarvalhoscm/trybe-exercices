# Exercise 1:
from math import factorial


a = 10
b = 5

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a ** b)

# Exercise 2:
hours = 6
minutes = hours * 60
seconds = minutes * 60

print(hours)
print(minutes)
print(seconds)

# Exercise 4:
book_price = 24.20
price_with_discount = book_price - (book_price * 0.4)
transport = 3 + (59 * 0.75)
final_price = price_with_discount * 60 + transport
print(final_price)

# Exercise 5:
trybe_course = ["Introdução", "Front-end", "Back-end"]

trybe_course.append("Ciência da Computação")
print(trybe_course)

# Exercise 6:
trybe_course[0] = "Fundamentos"
print(trybe_course)

# Exercise 7:
var = set({ "Matheus" })
print(var)

# Exercise 9:
info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

info["recorrente"] = "sim"
print(info)

# Exercise 10:
del info["origem"]
print(info)

# Exercise 11:
person = {
  "nome": "Thiago",
  "sobrenome": "Nobre",
  "idade": 29 
}
print(person)

# Exercise 13:
n = 5
count, factorial = 1, 1
while count <= n:
  factorial = factorial * count
  count += 1
  print(factorial)

# Exercise 14:
ratings = [6, 8, 5, 9, 10]
new_ratings = []
for rating in ratings:
  new_ratings.append(rating * 10)
print(new_ratings)

# Exercise 15:
for rating in ratings:
  if rating % 3 == 0:
    print("Múltiplo de 3")
