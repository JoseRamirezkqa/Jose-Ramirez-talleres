let seconds = parseFloat(prompt(`Ingrese la cantidad de segundos`));
let minutos = seconds/60;
let horas = Math.trunc(seconds/3600);
minutos = Math.trunc(minutos-(60*horas));
seconds = Math.trunc(seconds-(60*minutos)-(horas*3600)) ;
console.log(`el tiempo es : ${horas} horas con ${minutos} minutos y ${seconds} segundos`);