let numerosDeUsuarios = parseFloat(prompt(`Ingrese la cantidad de usuarios que va a registrar`));
let trabajadores = {}
let usuariosFinal = [];
if (Number.isInteger(numerosDeUsuarios)){
    if (numerosDeUsuarios <= 0){
        alert("el número ingresado no es valido ingrese un número mayor a 0");
        console.log(`El número ingresado no es valido ingrese un número mayor a 0`)
        }else{  for (i = 0; i < numerosDeUsuarios; i++) {
        trabajadores = {
        nombre: prompt(`Ingrese el nombre del trabajador`),
        usuarios: prompt(`Ingrese el usuario del trabajador`),
        contraseña: prompt(`Ingrese la contraseña del trabajador`)
        };
        usuariosFinal.push(trabajadores);
        trabajadores = {};
    }
    }
}else {
    alert(`Debe ingresar un numero`)
    console.log(`Debe ingresar un numero`)
}
let nombres = usuariosFinal.filter( el => el.nombre.includes("e"))
console.log(`los trabajadores que contienen la letra "e" en el nombre son:`)
console.log(nombres)
let usuarios = usuariosFinal.filter( el2 => el2.usuarios.includes("j"));
console.log(`los trabajadores que contienen  la letra "j" en el usuarios son:`)
console.log(usuarios);
let contraseñas = usuariosFinal.map(el3 => {
    if(el3.contraseña.includes("a")){
        console.log('entro');
        el3.contraseña = el3.contraseña.replaceAll("a","X");

    }else if(el3.contraseña.includes("e")){
        el3.contraseña = el3.contraseña.replaceAll("e","X");
        
    }
    return el3
})
console.log(`Los trabajadores a los cuales les cambio la letra son: `)
console.log(contraseñas)
