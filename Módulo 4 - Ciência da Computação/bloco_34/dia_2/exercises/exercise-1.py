class Tv():
  def __init__(self, size, channel):
    self.__volume = 50
    self.__channel = channel
    self.__size = size
    self.__turned_on = False
  
  def increase_volume(self):
    self.__volume += 1 if self.__volume < 99 else self.__volume == 99
    print(self.__volume)
  
  def decrease_volume(self):
    self.__volume -= 1 if self.__volume > 0 else self.__volume == 0
    print(self.__volume)

  def change_channel(self, channel):
    self.__channel = channel if channel > 1 and channel < 99 else ValueError
    print(f"Mudando o canal para: {self.__channel}")

  def turn_on_and_turn_off(self):
   self.__turned_on = True if self.__turned_on == False else self.__turned_on == False
   print(self.__turned_on)

my_tv_functions = Tv('50"', 13)
my_tv_functions.increase_volume()
my_tv_functions.decrease_volume()
my_tv_functions.change_channel(30)
my_tv_functions.turn_on_and_turn_off()
my_tv_functions.turn_on_and_turn_off()
print(my_tv_functions.__size) # aqui deve dar erro, pois os atributos são privados
