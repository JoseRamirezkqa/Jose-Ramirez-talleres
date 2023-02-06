let num1;
let num2;
let num3;
let resultado;
let i = 1;
while (i==1) {
    let operacion = parseFloat(prompt(`¿Qué operación va a realizar? suma(1), resta(2), multiplicacion(3),división(4),salir(0)`));
    switch (operacion) {
        case 1:
            num1 = parseFloat(prompt(`ingrese el primer número`));
            num2 = parseFloat(prompt(`ingrese el segundo número`));
            resultado = num1+num2;
            console.log(`el resultado de la suma es ${resultado}`)
            break;
        case 2:
            num1 = parseFloat(prompt(`Ingrese el primer número`))
            num2 = parseFloat(prompt(`Ingrese el segundo número`))
            num3 = parseFloat(prompt(`Ingrese el tercer número`))
            resultado = num1-num2-num3;
            console.log(`el resultado de la resta es:${resultado}`);
            break;
        case 3:
            num1 = parseFloat(prompt(`Ingrese el primer número`))
            num2 = parseFloat(prompt(`Ingrese el segundo número`))
            resultado = num1*num2;
            console.log(`el resultado de la multiplicación es ${resultado}`)
            break;
        case 4:
                num1 = parseFloat(prompt(`Ingrese el primer número`))
                num2 = parseFloat(prompt(`Ingrese el segundo número`))
                if (num2 != 0){
                resultado = num1/num2;
                console.log(`el resultado de la división es ${resultado}`)
                }else{
                    console.log("no se puede dividir en 0")
                }
                break;
        case 0: 
            i=2
            break;
        default:
            console.log("no seleccionó ninguna opción")
            break;
    }
}
alert(`Has cerrado la calculadora`)
console.log(`Has cerrado al calculadora`)