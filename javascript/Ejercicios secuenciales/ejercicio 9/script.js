let salario = parseFloat(prompt(`Ingrese el salario antiguo del trabajador`));
let newSalario = salario + (salario*(8/100))-(salario*(2.5/100))
console.log(`El nuevo salario del trabajador es de ${newSalario}`)