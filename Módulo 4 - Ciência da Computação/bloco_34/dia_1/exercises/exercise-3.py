import math

class Circle:
  def __init__(self, radius):
    self.radius = radius
    self.pi = 3.14
  
  def calculate_circle(self):
    return round(math.sqrt(self.pi * self.radius), 1)

circle = Circle(3)
print(circle.calculate_circle())
