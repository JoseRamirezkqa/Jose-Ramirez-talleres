let totalStudents = parseFloat(prompt(`Ingrese el número de estudiantes total`));
let niños = parseFloat(prompt(`Ingrese el número de niños en el salón`));
let porcentajeNiños = niños*100/totalStudents
let porcentajeNiñas = 100-porcentajeNiños
console.log(`El porcentaje de niños en el salón es de: ${porcentajeNiños}%, mientras que el de las niñas es: ${porcentajeNiñas}%`)