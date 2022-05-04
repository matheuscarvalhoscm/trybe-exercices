class Cheap:
  def __init__(self):
    self.result = []

  def separate_cards(self, cards):
    mid = len(cards) // 2
    hand_one = cards[:mid]
    hand_two = cards[mid:]
    
    index = 0
    while index < mid:
      self.result.append(hand_one[index])
      self.result.append(hand_two[index])
      index += 1
    return self.result


game_one = Cheap()
game_two = Cheap()
game_one_sorting = game_one.separate_cards([2, 6, 4, 5])
game_two_sorting = game_two.separate_cards([1, 4, 4, 7, 6, 6])
print(game_one_sorting)
print(game_two_sorting)
