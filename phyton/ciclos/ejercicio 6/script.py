cantidad = int(input("Escriba la cantidad de productos a hacer el descuento: "))
precio = 0
descuento = 0
total = 0;
i = 1
for i in range(i,cantidad+1):
    precio = int(input(f"Escriba el valor del producto número {i}: "));
    if precio > 100:
        descuento = precio *(10/100);
        total = precio-descuento
        print(f"el producto  {i} tuvo un descuento de {descuento} y un precio final de {total}")
    elif precio<200 & precio>100:
        descuento = precio*0.2
        total = precio-descuento
        print(f"el producto  {i} tuvo un descuento de {descuento} y un precio final de {total}")       
    elif precio >200:
        descuento = precio*0.25;
        total =precio-descuento;
        print(f"el producto  {i} tuvo un descuento de {descuento} y un precio final de {total}")
    else: 
        print("el valor ingreseda no tiene descuento")
    
