from abc import ABC, abstractmethod
import math


class GeometricFigure(ABC):
  def __init__(self):
    self.area = 0
    self.perimeter = 0

  @abstractmethod
  def get_area(self):
    raise NotImplementedError

  @abstractmethod
  def get_perimeter(self):
    raise NotImplementedError


class Square(GeometricFigure):
  def __init__(self, side):
      super().__init__()
      self.side = side

  def get_area(self):
      self.area = math.pow(self.side, 2)
      return self.area

  def get_perimeter(self):
      self.perimeter = self.side * 4
      return self.perimeter


class Retangle(GeometricFigure):
  def __init__(self, base, height):
      super().__init__()
      self.base = base
      self.height = height
  
  def get_area(self):
      self.area = self.base * self.height
      return self.area

  def get_perimeter(self):
      self.perimeter = 2 * (self.base + self.height)
      return self.perimeter


class Circle(GeometricFigure):
  def __init__(self, radius):
      super().__init__()
      self.radius = radius

  def get_area(self):
      self.area = math.pow(3.14 * self.radius, 2)
      return self.area
  
  def get_perimeter(self):
      self.perimeter = 2 * 3.14 * self.radius
      return self.perimeter

square = Square(17)
retangle = Retangle(10, 5)
circle = Circle(0.4)

print(square.get_area())
print(square.get_perimeter())
print(retangle.get_area())
print(retangle.get_perimeter())
print(circle.get_area())
print(circle.get_perimeter())
