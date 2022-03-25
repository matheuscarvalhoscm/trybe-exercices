# Exercise 2:
import random

file = open("words.txt", mode="r")
words = file.read()
print(words)
random_word = random.choice(words)
scrambled_word = "".join(random.sample(random_word, len(random_word)))
print(scrambled_word)
number_of_tries = 0

while number_of_tries < 3:
  user_word = input("Tente adivinha a palavra embaralhada: ")
  if user_word == random_word:
    print("Você acertou!")
    break
  else:
    print(f"Errou... tente novamente")
    number_of_tries += 1
