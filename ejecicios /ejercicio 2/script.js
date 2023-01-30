let arreglo = ['hola', 2,5,7,2,8,`JuanJo`,14,`tablero`,`cable`];
let arreglo2 = arreglo.filter((el) => {
    if(isNaN(el)) {
        return el;
    }
}) 
console.log(arreglo2);