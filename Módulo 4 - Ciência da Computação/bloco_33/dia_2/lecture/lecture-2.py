# Exercise 2:
n = input("Digita aí uns números pra eu somar (separa eles com um espaço): ").split()

def print_sum_of_numbers(numbers):
  sum_numbers = 0
  for number in numbers:
    if number.isdigit():
      sum_numbers += int(number)
    else:
      return print("Só consigo somar números")
  
  return print(f"A soma é: {sum_numbers}")

print_sum_of_numbers(n)
