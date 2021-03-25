T = int(input())
list = []
for i in range(0,T):
    data = input().split()
    list.append((data[0], int(data[1])))
list.sort(key=lambda e: e[1])
for e in list:
    print(e[0], end=' ')