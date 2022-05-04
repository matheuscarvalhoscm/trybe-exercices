estudantes = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
lista1_entregues = ['a', 'd', 'g', 'c']
lista2_entregues = ['c', 'a', 'f']

students_set = set(estudantes)

def did_not_delivered_list1(list1):
  return students_set.difference(set(list1))
  # saída: {'b', 'e', 'f'}

def delivered_both_lists(list1, list2):
  return students_set.intersection(set(list1), set(list2))
  # saída: {'c', 'a'}

def delivered_any_list(list1, list2):
  return set(list1).union(set(list2))
  # saída: {'a', 'c', 'd', 'f', 'g'}

def did_not_delivered_any_list(list1, list2):
  unified_lists = set(list1).union(set(list2))
  return students_set.difference(unified_lists)
  #  saída: {'b', 'e'}

print(did_not_delivered_list1(lista1_entregues))
print(delivered_both_lists(lista1_entregues, lista2_entregues))
print(delivered_any_list(lista1_entregues, lista2_entregues))
print(did_not_delivered_any_list(lista1_entregues, lista2_entregues))
