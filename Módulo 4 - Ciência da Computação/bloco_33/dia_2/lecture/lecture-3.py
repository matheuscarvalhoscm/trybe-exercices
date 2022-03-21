# Exercise 3:
file = open("students.txt", mode="r")
students = file.readlines()
reproved_students = []

for student in students:
  check_grade = student.split()
  if int(check_grade[1]) < 6:
    reproved_students.append(f"{check_grade[0]}\n")

new_file = open("reproved_students.txt", mode="w")
new_file.writelines(reproved_students)


file.close()
new_file.close()