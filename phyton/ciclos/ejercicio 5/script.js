let numero = parseFloat(prompt(`Ingrese un número`));
let primo = true;
if (numero <= 100){
    alert(`El número ingresado (${numero}) debe ser mayor a 100`);
    console.log(`El número ingresado (${numero}) debe ser mayor a 100`)
}else {
    for(let i= 101 ; i < numero; i++){
        for (let x = 2; x<= i/2; x++){
            if ( i % x == 0){
                primo = false
                break;
            }
        }       
    if(primo == false){
        primo = true;
    }else if(primo == true){
        console.log(`${i} es número primo`)
    }
    }
}