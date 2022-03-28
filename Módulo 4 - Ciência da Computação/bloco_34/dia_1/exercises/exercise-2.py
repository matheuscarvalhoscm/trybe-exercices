from ctypes import sizeof


class Square:
  def __init__(self, size):
    self.size = size
  
  def calculate_area(self):
    return self.size * self.size
  
  def calculate_perimeter(self):
    return self.size * 4

square = Square(2)

print(square.calculate_area())
print(square.calculate_perimeter())
