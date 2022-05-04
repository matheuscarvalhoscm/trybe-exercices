class MainMemory:
    def __init__(self):
        self.clean()

    def load(self, value):
        self.loaded_memory.append(float(value))

    def get(self, index):
        if not self.loaded_memory:
          return 0
        else:
          return self.loaded_memory[index]

    def clean(self):
        self.loaded_memory = []