h, m = map(int, input().split())
t = int(input())

m += t
h += m//60
m = m%60
h = h%24

print(h, m)