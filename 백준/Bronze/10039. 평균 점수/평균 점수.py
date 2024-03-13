ls = list(int(input()) for _ in range(5))
for i in range(len(ls)):
    if ls[i] < 40:
        ls[i] = 40
print(sum(ls) // 5)