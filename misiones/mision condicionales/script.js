const final = []
function imc (nombre,edad, peso, altura, imc, resultado) {
    nombre =  prompt(`Ingrese el nombre de su familiar`);
    edad = prompt(`Ingrese la edad de ${nombre}`);
    peso = prompt(`Ingrese el peso en Kg de ${nombre}`);
    altura = prompt(`Ingrese la altura de ${nombre}`); 
    if (nombre == "") {
        alert("no ingresó el nombre de su familiar")
    }else if (edad < 20){
        alert("no cumple el requisito de edad")
    } else if (peso == ""){
        alert("no ingresó el peso")
    } else if (altura >= 2.5){
        alert("la altura ingresado no está en metros")
    } else{
        imc = peso/(altura*altura)
      if(imc <= 18.5){
        resultado = `su familiar ${nombre} está bajo peso` 
        final.push(resultado);
        console.log(final);
    }else if (imc <= 24.9){
        resultado = `su familiar ${nombre} está normal de peso `
        final.push(resultado);
        console.log(final)
    }else if ( imc <= 28.9){
        resultado = `su familiar ${nombre} está en sobre peso`
        final.push(resultado);
        console.log(final)
    }else if (imc <= 34.9) {
        resultado = `su familiar ${nombre} está en obeso I`
         resultado.push(resultado);
         console.log(final)
    }else if(imc > 35){
        resultado = [`su familiar ${nombre} está en obeso II`]
        final = resultado.push(resultado);
        console.log(final)
    } 
    
    }}