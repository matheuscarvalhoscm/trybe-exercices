from stack import Stack

class LimitStack(Stack):
  def __init__(self, limit):
      super().__init__()
      self.limit = limit

  def push(self, value):
      if self.size() >= self.limit:
        print('Não é possível adicionar outro item à pilha')
      else:
        return super().push(value)


limit = LimitStack(2)
limit.push(1)
limit.push(2)
limit.push(3)
