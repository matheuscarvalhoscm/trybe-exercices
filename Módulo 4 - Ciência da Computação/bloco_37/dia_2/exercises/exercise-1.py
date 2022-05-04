class software_monitor:
  def __init__(self):
    self.result = 0

  def health_check(self, array):
    index = 0
    for num in array:
      if array[index] and array[index + 1] == 0:
        self.result += 1
        return self.result
      elif array[index] == 0:
        index += 1
      elif array[index] == 1:
        self.result += 1
        index += 1

check = software_monitor()
first_check = check.health_check([0, 1, 1, 1, 0, 0, 1, 1])
print(first_check)
second_check = check.health_check([1, 1, 1, 1, 0, 0, 1, 1])
print(second_check)
