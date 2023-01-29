let salario = parseFloat(prompt(`Ingrese el salario antiguo del trabajador`))
let newSalario = salario+salario*(25/100);
let total = newSalario*10;
console.log(`El trabajador cobró ${total} en los 10 meses trabajados`)