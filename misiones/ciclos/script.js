let samsung = parseFloat(prompt(`Ingrese el número de samsung en el inventario`));
let xiaomi = parseFloat(prompt(`Ingrese el número de xiaomi en el inventario`));
let iphone = parseFloat(prompt(`Ingrese el número de iphone en el inventario`));
let motorola = parseFloat(prompt(`Ingrese el número de motorola en el inventario`));
let huawei = parseFloat(prompt(`Ingrese el número de huawei en el inventario`));
let oppo = parseFloat(prompt(`Ingrese el número de oppo en el inventario`));
let vent = parseFloat(prompt(`¿Desea registrar una venta?) si(1), no(2); marque el número correspondinte`));
const valorSamsung = 10;
const valorXiaomi = 20;
const valorIphone = 30;
const valorMotorola = 5;
const valorHuawei = 6;
const valorOppo = 9;
let totalSamsung = samsung;
let totalXiamomi = xiaomi;
let totalIphone = iphone;
let totalMotorola = motorola;
let totalHuawei = huawei; 
let totalOppo = oppo;
let recaudoSamsung = 0;
let recaudoXiamomi = 0;
let recaudoIphone = 0;
let recaudoMotorola = 0;
let recaudoHuawei = 0;
let recaudoOppo = 0;
let recaudo = 0;
let disVendidos;
if (vent == 1){
    let n = parseInt(prompt(`¿cuántas ventas va a registrar?`))
       if ( n != 0){ 
        for(let i = 1; i <= n; i++){
            let dispositivo = parseFloat(prompt(`¿Qué celular vendió? Samsung(1), Xiaomi (2), Iphone(3), Motorola(4), Huawei(5), Oppo(6); Indique el número del dispositivo`));
            switch (dispositivo) {
                case 1:
                    disVendidos = parseFloat(prompt(`¿Cuántos celulares Samsung vendió?`));
                    if (samsung >= disVendidos){
                        totalSamsung = samsung - disVendidos
                        recaudoSamsung = disVendidos*valorSamsung
                        recaudo += recaudoSamsung;
                    }else{
                        alert(`No hay sufiente equipos en el inventario`)
                    }
                    break;
                case 2:
                    disVendidos = parseFloat(prompt(`¿Cuántos celulares Xiaomi vendió`))
                    if (xiaomi >= disVendidos){
                        totalXiamomi = xiaomi - disVendidos
                        recaudoXiamomi= disVendidos*valorXiaomi;
                        recaudo += recaudoXiamomi;
                    }else{
                        alert(`No hay sufiente equipos en el inventario`)
                    }
                    break;
                case 3:
                    disVendidos = parseFloat(prompt(`¿Cuántos celulares Iphone vendió`))
                    if (iphone >= disVendidos){
                        totalIphone = iphone - disVendidos
                        recaudoIphone = disVendidos*valorIphone;
                        recaudo += recaudoIphone
                    }else{
                        alert(`No hay sufiente equipos en el inventario`)
                    }
                    break;
                case 4:
                    disVendidos = parseFloat(prompt(`¿Cuántos celulares Motorola vendió`))
                    if (motorola >= disVendidos){
                        totalMotorola = motorola - disVendidos;
                        recaudoMotorola = disVendidos*valorMotorola;
                        recaudo += recaudoMotorola
                    }else{
                        alert(`No hay sufiente equipos en el inventario`)
                    }
                    break;
                case 5:
                    disVendidos = parseFloat(prompt(`¿Cuántos celulares Huawei vendió`))
                    if (huawei >= disVendidos){
                        totalHuawei = huawei - disVendidos;
                        recaudoHuawei = disVendidos*valorHuawei;
                        recaudo += recaudoHuawei
                    }else{
                        alert(`No hay sufiente equipos en el inventario`)
                    }
                    break;
                case 6:
                    disVendidos = parseFloat(prompt(`¿Cuántos celulares Oppo vendió`))
                    if (oppo >= disVendidos){
                        totalOppo = oppo - disVendidos
                        recaudoOppo = disVendidos*valorOppo;
                        recaudo += recaudoOppo

                    }else{
                        alert(`No hay sufiente equipos en el inventario`)
                    }
                    break;
                default:
                    break;
            }}

    }else { 
        alert('No ha regitrado ninguna venta')
    }
}
console.log(`Inventario: Samsumg: ${totalSamsung}, Xiaomi: ${totalXiamomi}, Iphone:${totalIphone}, Motorola:${totalMotorola}, Huawei:${totalHuawei},Oppo: ${totalOppo}`)
console.log(`lo recaudado es: Samsung: ${recaudoSamsung}, Xiami: ${recaudoXiamomi}, Iphone: ${recaudoIphone}, Motorola: ${recaudoMotorola}, Huawei: ${recaudoHuawei}, Oppo: ${recaudoOppo} total:${recaudo}`)