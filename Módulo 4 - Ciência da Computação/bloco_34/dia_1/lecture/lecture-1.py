class Calculator:
  def __init__(self, a, b):
    self.a = a
    self.b = b

  def adder(self):
    return self.a + self.b
  
  def subtractor(self):
    return self.a - self.b
  
  def multiplicator(self):
    return self.a * self.b

  def divider(self):
    return self.a / self.b

operations = Calculator(2, 5)
print(operations.adder())
print(operations.subtractor())
print(operations.multiplicator())
print(operations.divider())

