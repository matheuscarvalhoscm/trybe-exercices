from inspect import stack
from stack import Stack

exercise_stack = Stack()
elements = [1, 2, 3, 4, -2, 5, 6, 7, 8, 9, 10, -1]
for elem in elements:
    exercise_stack.push(elem)

# get lowest value
print(exercise_stack.min_value())
