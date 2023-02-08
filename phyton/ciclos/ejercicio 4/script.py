num1 = 0
num2 = 0
num3 = 0
resultado = 0
i = 1
while (i==1) :
    operacion = int(input("¿Qué operación va a realizar? suma(1), resta(2), multiplicacion(3),división(4),salir(0): "));
    if operacion ==1:
            num1 = int(input("ingrese el primer número: "));
            num2 = int(input("ingrese el segundo número: "));
            resultado = num1+num2;
            print(f"el resultado de la suma es {resultado}")
    if operacion == 2:
            num1 = int(input("Ingrese el primer número: "))
            num2 = int(input("Ingrese el segundo número: "))
            num3 = int(input("Ingrese el tercer número: "))
            resultado = num1-num2-num3;
            print(f"el resultado de la resta es: {resultado}");
    if operacion == 3:
            num1 = int(input("Ingrese el primer número: "))
            num2 = int(input("Ingrese el segundo número: "))
            resultado = num1*num2;
            print(f"el resultado de la multiplicación es {resultado}")
    if operacion == 4:
                num1 = int(input("Ingrese el primer número: "))
                num2 = int(input("Ingrese el segundo número: "))
                if num2 != 0:
                    resultado = num1/num2
                    print(f"el resultado de la división es {resultado}")
                else:
                    print("no se puede dividir en 0")
    if operacion == 0:
            i=2
            print("Ha salido")