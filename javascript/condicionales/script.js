numestudiantes = prompt(`¿Cuántos estudiantes tiene en su curso?`);
var  total = [];
for (var i = 1; i <= numestudiantes; i++){
    var nombre = prompt(`Ingrese el nombre del estudiante ${i}`);
    var edad = prompt(`Ingrese la edad de ${nombre}`);
    var nota = parseFloat(prompt(`Ingrese la nota de ${nombre}`));
    var estudiante = {
        nombre: nombre,
        edad: edad,
        nota: nota
    }
    total.push(estudiante);
    
}
var suma = 0
for (var i = 0; i <= total.length; i++){
    suma = suma + total[0].nota;
}
var promedio = suma/numestudiantes
console.log(promedio);
