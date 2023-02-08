let formulario = parseFloat(prompt(`Ingrese la opción que vaya  a realizar\n 1. Definir la cantidad de estudiantes\n 2. Registrar los estudiantes\n 3. Mostrar listado de estudiantes\n 4. Registrar notas de estudiantes\n 5. Imprimir notas de los estudiantes\n 6. Salir`));
let cantidad;
let estudiantes = {
    nombre: "",
    codigo: "",
    nivel: "",
};
let nivelNumber;
let Allestudiantes = [];
let codigos = [];
let bandera = false;
let notas = {
    notaUno: "",
    notaDos: "",
    notaTres: ""
}
let notaPromedio = {
    nombre: "",
    promedio: "",
    resultado: ""
};
let notaPromedioFinal = [];
let notasFinal = [];
let pregunta = false;
let promedioGrupo = 0;
let banderaRegistro = false;
do {
    switch (formulario) {
        case 1:
            cantidad = parseFloat(prompt(`Ingrese el número de usuarios que va a registrar`));
            formulario = parseFloat(prompt(`Ingrese la opción que vaya  a realizar\n 1. Definir la cantidad de estudiantes\n 2. Registrar los estudiantes\n 3. Mostrar listado de estudiantes\n 4. Registrar notas de estudiantes\n 5. Imprimir notas de los estudiantes\n 6. Salir`));
            banderaRegistro = true;
            break;
        case 2:
            if (banderaRegistro == true) {
                for (let i = 0; i < cantidad; i++) {
                    bandera = true;
                    estudiantes.nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}`);
                    estudiantes.codigo = prompt(`Ingrese el codigo del estudiante ${estudiantes.nombre}`);
                    codigos.forEach(el1 => {
                        while (estudiantes.codigo == el1) {
                            alert(`No se puede ingresar el mismo codigo para dos estudiantes`)
                            estudiantes.codigo = prompt(`Ingrese el codigo del estudiante ${estudiantes.nombre}`);

                        }
                    })
                    codigos.push(estudiantes.codigo);
                    nivelNumber = parseFloat(prompt(`Ingrese el nivel del estudiante ${estudiantes.nombre}\n 1. Beginner\n 2. Junior\n 3. Senior`));
                    switch (nivelNumber) {
                        case 1:
                            estudiantes.nivel = "Beginner";
                            break;
                        case 2:
                            estudiantes.nivel = "Junior"
                            break;
                        case 3:
                            estudiantes.nivel = "Senior"
                            break;
                        default:
                            alert("No ingresó una opción valida, deberá registrar el usuario de nuevo")
                            i -= i
                            break;
                    }
                    Allestudiantes.push(estudiantes);
                    estudiantes = {};
                }
                formulario = parseFloat(prompt(`Ingrese la opción que vaya  a realizar\n 1. Definir la cantidad de estudiantes\n 2. Registrar los estudiantes\n 3. Mostrar listado de estudiantes\n 4. Registrar notas de estudiantes\n 5. Imprimir notas de los estudiantes\n 6. Salir`));

            }else if(banderaRegistro == false){
                alert("No ha especificado la cantidad de estudiantes")
                formulario = parseFloat(prompt(`Ingrese la opción que vaya  a realizar\n 1. Definir la cantidad de estudiantes\n 2. Registrar los estudiantes\n 3. Mostrar listado de estudiantes\n 4. Registrar notas de estudiantes\n 5. Imprimir notas de los estudiantes\n 6. Salir`));
            } 
            break;
        case 3:
            if (bandera == true) {
                console.log(Allestudiantes);
                formulario = parseFloat(prompt(`Ingrese la opción que vaya  a realizar\n 1. Definir la cantidad de estudiantes\n 2. Registrar los estudiantes\n 3. Mostrar listado de estudiantes\n 4. Registrar notas de estudiantes\n 5. Imprimir notas de los estudiantes\n 6. Salir`));
            } else if (bandera == false) {
                alert(`No hay estudiantes registrados`)
                formulario = parseFloat(prompt(`Ingrese la opción que vaya  a realizar\n 1. Definir la cantidad de estudiantes\n 2. Registrar los estudiantes\n 3. Mostrar listado de estudiantes\n 4. Registrar notas de estudiantes\n 5. Imprimir notas de los estudiantes\n 6. Salir`));
            }
            break;
        case 4:
            if (bandera == true) {
                for (i = 0; i < cantidad; i++) {
                    let { nombre } = Allestudiantes[i]
                    notas.notaUno = parseFloat(prompt(`Ingrese la nota 1 para el estudiante ${nombre}`));
                    if (notas.notaUno >= 0 & notas.notaUno <= 5) {
                        notas.notaDos = parseFloat(prompt(`Ingrese la nota 2 del estudiante ${nombre}`))
                        if (notas.notaDos >= 0 & notas.notaDos <= 5) {
                            notas.notaTres = parseFloat(prompt(`Ingrese la nota 3 del estudiante ${nombre}`))
                            if (notas.notaTres >= 0 & notas.notaTres <= 5) {
                                notasFinal.push(notas);
                                notaPromedio.nombre = nombre
                                notaPromedio.promedio = (notas.notaUno + notas.notaDos + notas.notaTres) / 3;
                                if (notaPromedio.promedio >= 3.5) {
                                    alert(`El estudiante ${nombre} aprobó`);
                                    notaPromedio.resultado = "aprobó"
                                } else {
                                    alert(`El estudiante ${nombre} no aprobó`)
                                    notaPromedio.resultado = "no aprobó"
                                }
                                notaPromedioFinal.push(notaPromedio)
                                notaPromedio = {};
                                notas = {};
                                pregunta = true;
                            } else {
                                alert(`Debe ingresar una nota entre 0 y 5`);
                                i -= 1
                            }
                        } else {
                            alert(`Debe ingresar una nota entre 0 y 5`);
                            i -= 1;
                        }
                    } else {
                        alert(`Debe ingresar una nota entre 0 y 5`);
                        i -= 1
                    }

                }
            } else if (bandera == false) {
                alert(`No hay estudiantes registrados`)
                formulario = parseFloat(prompt(`Ingrese la opción que vaya  a realizar\n 1. Definir la cantidad de estudiantes\n 2. Registrar los estudiantes\n 3. Mostrar listado de estudiantes\n 4. Registrar notas de estudiantes\n 5. Imprimir notas de los estudiantes\n 6. Salir`));
            }
            if (pregunta == true) {
                formulario = parseFloat(prompt(`Ingrese la opción que vaya  a realizar\n 1. Definir la cantidad de estudiantes\n 2. Registrar los estudiantes\n 3. Mostrar listado de estudiantes\n 4. Registrar notas de estudiantes\n 5. Imprimir notas de los estudiantes\n 6. Salir`));
            }
            break;
        case 5:
            if (bandera == true) {
                for (i = 0; i < cantidad; i++) {
                    let { promedio } = notaPromedioFinal[i];
                    promedioGrupo += promedio;
                }
                promedioGrupo = promedioGrupo / cantidad;
                console.log(`la nota promedio fue: ${promedioGrupo}`);
                console.log(notaPromedioFinal);
                formulario = parseFloat(prompt(`Ingrese la opción que vaya  a realizar\n 1. Definir la cantidad de estudiantes\n 2. Registrar los estudiantes\n 3. Mostrar listado de estudiantes\n 4. Registrar notas de estudiantes\n 5. Imprimir notas de los estudiantes\n 6. Salir`));
            } else if (bandera == false) {
                alert(`No hay estudiantes registrados`)
                formulario = parseFloat(prompt(`Ingrese la opción que vaya  a realizar\n 1. Definir la cantidad de estudiantes\n 2. Registrar los estudiantes\n 3. Mostrar listado de estudiantes\n 4. Registrar notas de estudiantes\n 5. Imprimir notas de los estudiantes\n 6. Salir`));
            }
            break;
        default:
            alert(`el numero ingresado no está permitido`);
            formulario = parseFloat(prompt(`Ingrese la opción que vaya  a realizar\n 1. Definir la cantidad de estudiantes\n 2. Registrar los estudiantes\n 3. Mostrar listado de estudiantes\n 4. Registrar notas de estudiantes\n 5. Imprimir notas de los estudiantes\n 6. Salir`));
            break
    }
} while (formulario != 6) {
    alert(`Ha salido`)
}