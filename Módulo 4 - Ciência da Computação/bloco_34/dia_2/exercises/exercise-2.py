import statistics


class Statistics():
  number_list = [1, 1, 2, 3, 3, 3, 3, 4]

  @classmethod
  def average(cls):
    return statistics.mean(cls.number_list)

  @classmethod
  def median(cls):
    return statistics.median(cls.number_list)

  @classmethod
  def mode(cls):
    return statistics.mode(cls.number_list)


print(Statistics.average())
print(Statistics.median())
print(Statistics.mode())
