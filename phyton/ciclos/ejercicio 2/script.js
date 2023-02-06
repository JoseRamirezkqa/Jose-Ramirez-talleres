let n = parseFloat(prompt(`Ingrese el valor incial`));
let m = parseFloat(prompt(`Ingrese el valor final`));
let total = 0;
for (n;n<=m;n++){
    if(n%2==0){
        total += n
    }
}
console.log(total)