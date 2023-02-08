n = int(input("Ingrese el valor incial: "))
m = int(input("Ingrese el valor final: "))
total = 0;
for n in range(n,m):
    if n%2 == 0 :
        total += n
print(total)