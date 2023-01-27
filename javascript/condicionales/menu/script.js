let platosEscogidos = [];
let platos;
let total = 0;
const menu = {
    arrozConPollo : 15000,
    pastas : 12000,
    mute : 20000,
    pescadoFrito: 17000,
    sobreBarriga: 25000
};
const menu2 = {
    uno: "Arroz con pollo",
    dos: "pastas",
    tres: "mute",
    cuatro: "pescadoFrito",
    cinco: "sobreBarriga"
}
let n = 1
let clientes = prompt(`Ingrese el número de clientes`);
for ( var i = 1; i <= clientes; i++) {
 platos = prompt(`Escoga un plato para el cliente ${i} entre Arroz con pollo (1), pastas (2), mute(3), pescado frito (4), sobre barriga (5)`);
 switch (platos) {
    case '1':
    platosEscogidos.push(menu2.uno);
    platosEscogidos.push(menu.arrozConPollo);
        break;
    case '2':
    platosEscogidos.push(menu2.dos);
    platosEscogidos.push(menu.pastas);
        break;
    case '3':
    platosEscogidos.push(menu2.tres);
    platosEscogidos.push(menu.mute);
        break;
    case '4':
    platosEscogidos.push(menu2.cuatro);
    platosEscogidos.push(menu.pescadoFrito);
        break;
    case '5':
    platosEscogidos.push(menu2.cinco);
    platosEscogidos.push(menu.sobreBarriga);
        break;
    default:
        console.log('no escogio nada');
        break;
}
}
for (var i = 0; i <= clientes.length; i++){
    total += platosEscogidos[n]
    n += 2
}
console.log(platosEscogidos);
console.log(`La cuenta total es de: ${total}`)