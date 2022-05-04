def library_entries(arr1, arr2, num):
  counter = 0
  for index, time in enumerate(arr1):
    if time <= num and arr2[index] >= num:
      counter +=1
  print(counter)

library_entries([1, 2, 3], [3, 2, 7], 4)
