let nombre = prompt(`Ingrese el nombre del trabajador`);
let horas = parseFloat(prompt(`Ingrese las horas trabajadas de ${nombre}`));
let pagoHora = parseFloat(prompt(`Ingrese el valor de por hora del trabajador ${nombre}`));
let total = horas*pagoHora;
console.log(`el trabajador ${nombre} tiene un salario de ${total}`)