let examen1 = parseFloat(prompt(`Ingrese la nota del examen 1`));
let examen2 = parseFloat(prompt(`Ingrese la nota del examen 2`));
let examen3 = parseFloat(prompt(`Ingrese la nota del examen 3`));
let promedioExamen
let trabajo1;
let trabajo2;
let promedioTrabajo; 
let examenFinal;
let autoevaluacion;
let coevaluacion;
let promedioAutoevaluacion;
let notaFinal
if(examen1 <= 5 & examen1>= 0 & examen2 <= 5 & examen2 >= 0 & examen3 <= 5 & examen3 >= 0){
    promedioExamen = (examen1+examen2+examen3)/3
    trabajo1 = parseFloat(prompt(`Ingrese la nota del trabajo 1`));
    trabajo2 = parseFloat(prompt(`Ingrese la nota del trabajo 2`));
    if(trabajo1 <= 5 & trabajo1 >= 0 & trabajo2 <= 5 & trabajo2 >= 0){
        promedioTrabajo= (trabajo1+trabajo2)/2 
        examenFinal = parseFloat(prompt(`Ingrese la nota del examen final`));
        autoevaluacion = parseFloat(prompt(`Ingrese la nota de la autoevaluación`));
        coevaluacion = parseFloat(prompt(`Ingrese la nota de la co-evaluación`));
        if(examenFinal<=5 & examenFinal >= 0 & autoevaluacion <= 5 & autoevaluacion >= 0 & coevaluacion <= 5 & coevaluacion >= 0){
            promedioAutoevaluacion = (autoevaluacion+coevaluacion)/2
            notaFinal = (promedioExamen*0.55)+(promedioTrabajo*0.15)+(examenFinal*0.2)+(promedioAutoevaluacion*0.1);
        }else{
            alert(`las notas ingresadas tienen que ser entre 0 y 5`)
        } 
    }else{
        alert(`las notas ingresadas tienen que ser entre 0 y 5`)
    }
}else{
    alert(`las notas ingresadas tienen que ser entre 0 y 5`)
}
if (notaFinal >= 0 & notaFinal <= 1.9){
    console.log(`la nota del estudiante fue ${notaFinal.toFixed(2)} por lo tanto el estudiante no aprobó y tuvo un desempeño muy bajo`)
}else if(notaFinal <= 2.9){
    console.log(`la nota del estudiante fue ${notaFinal.toFixed(2)} por lo tanto el estudiante no aprobó y tuvo un desempeño bajo`);
}else if(notaFinal <= 3.9){
    console.log(`la nota del estudiante fue ${notaFinal.toFixed(2)} por lo tanto el estudiante aprobó y tuvo un desempeño básico`);    
}else if(notaFinal <= 4.6){
    console.log(`la nota del estudiante fue ${notaFinal.toFixed(2)} por lo tanto el estudiante aprobó y tuvo un desempeño alto`);
}else if(notaFinal <= 5){
    console.log(`la nota del estudiante fue ${notaFinal.toFixed(2)} por lo tanto el estudiante aprobó y tuvo un desempeño superior`);
}