let hijoMedio = 125.2;
let porcentajeMayor = (54/100);
let porcentanjeMenor = (27/100);
let porcentajeMedio = (19/100);
let hijoMayor = (hijoMedio*porcentajeMayor)/porcentajeMedio;
let hijoMenor = (hijoMedio*porcentanjeMenor)/porcentajeMedio;
let total = hijoMayor+hijoMedio+hijoMenor
console.log(`el terreno que le corresponde a el hijo mayor es ${hijoMayor.toFixed(1)}mts, el del hijo del medio es ${hijoMedio}mts, el del hijo menor es ${hijoMenor.toFixed(1)}mts y el total del terreno es ${total.toFixed(1)}mts`)