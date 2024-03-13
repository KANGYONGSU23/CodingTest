y = int(input())
answer = 0;
if y%4 == 0:
    if y%400 == 0:
        answer = 1
    if y%100 != 0:
        answer = 1
print(answer)