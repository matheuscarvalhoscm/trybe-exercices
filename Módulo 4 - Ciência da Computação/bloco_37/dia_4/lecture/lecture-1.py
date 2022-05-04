class Conjunto:
  def __init__(self):
      self.constructor = [False for num in range(1001)]
  
  def __str__(self) -> str:
      pass
  
  def __contains__(self, item):
    return True if item in self.constructor else False

  def add(self, lists):
    for num in lists:
      self.constructor[num] = num


if __name__ == "__main__":
  new_set = Conjunto()
  new_set.add([0, 10, 100, 1000])
  print(new_set.constructor)