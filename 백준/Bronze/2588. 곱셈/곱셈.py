a = int(input())
b = input()

for i in reversed(range(3)):
  print(a*int(b[i]))
    
print(a*int(b))