from subprocess import check_output
import time
from webbrowser import get

cpu_info = check_output('lscpu').decode('utf-8')
cpu_info_to_array = cpu_info.replace(' ', '').split()

def search_cpu_info(key_word):
  for info in cpu_info_to_array:
    index_of_value = info.find(':') + 1
    if key_word in info:
      return(f'{key_word}: {info[index_of_value:]}')

model = search_cpu_info('Model')
cores = search_cpu_info('Core(s)')
l_one = search_cpu_info('L1')
l_two = search_cpu_info('L2')
l_three = search_cpu_info('L3')
mhz = search_cpu_info('MHz')

def get_ram():
  random_access_memory = check_output('free').decode('utf-8')
  used_ram = int(random_access_memory.strip().split()[9]) / 1000
  free_ram = int(random_access_memory.strip().split()[10]) / 1000
  return [used_ram, free_ram]

def get_ram_memory_real_time():
  # ref: https://stackoverflow.com/questions/474528/what-is-the-best-way-to-repeatedly-execute-a-function-every-x-seconds
  starttime = time.time()
  while True:
      print(f'Memória RAM usada: {get_ram()[0]}')
      print(f'Memória RAM disponível: {get_ram()[1]}')
      time.sleep(1 - ((time.time() - starttime) % 1))

get_ram_memory_real_time()
