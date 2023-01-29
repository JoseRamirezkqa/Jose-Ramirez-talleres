let cantidad = parseFloat(prompt(`Escriba la cantidad de productos a hacer el descuento`));
let precio;
let descuento
let total;
for (let i = 1; i <= cantidad; i++){
    precio = parseFloat(prompt(`Escriba el valor del producto número ${i}`));
    if (precio > 100){
        descuento = precio *(10/100);
        total = precio-descuento
        console.log(`el producto  ${i} tuvo un descuento de ${descuento} y un precio final de ${total}`)
    } else if(precio<200, precio>100){
        descuento = precio*0.2;
        total = precio-descuento
        console.log(`el producto  ${i} tuvo un descuento de ${descuento} y un precio final de ${total}`)       
    }else if(precio >200){
        descuento = precio*0.25;
        total =precio-descuento;
        console.log(`el producto  ${i} tuvo un descuento de ${descuento} y un precio final de ${total}`)
    }else {
        console.log(`el valor ingreseda no tiene descuento`)
    }
}