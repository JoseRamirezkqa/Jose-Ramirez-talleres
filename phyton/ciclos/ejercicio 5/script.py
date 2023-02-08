numero = int(input("Ingrese un número: "));
primo = True
i = 101
if (numero <= 100):
    print(f"El número ingresado ({numero}) debe ser mayor a 100")
else:
    for  i in range(i,numero):
        x = 2
        for x in range(x,round(i/2)):
            if i%x == 0:
                primo = False
                break;
        if(primo == False):
            primo = True
        elif(primo == True):
            print(f"{i} es número primo")
