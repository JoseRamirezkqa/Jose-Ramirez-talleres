let valor = 10000;
let meses = parseFloat(prompt(`Ingrese el número de meses a pagar el interés`));
let total = (valor*meses*(27/100))/12;
console.log(`El interés a pagar es: ${Math.trunc(total)}`);