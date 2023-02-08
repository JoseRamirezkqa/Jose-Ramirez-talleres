numero = int(input("Ingrese un valor entre 10 y 15: "))
factorial = 1
i = 1
if numero >10 & numero <15:
    for i in range(i,numero+1):
        factorial = factorial*i
    print(f"el factorial de {numero} es: {factorial}")
else:
    print(f"el número {numero} no está en el rango")