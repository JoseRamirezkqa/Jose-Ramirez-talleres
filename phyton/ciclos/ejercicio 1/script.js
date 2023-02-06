let n  = 0; 
let m = 1;
let c = 0;
let secuencias = parseFloat(prompt(`¿Cuántas veces quiere que se realice?`));
console.log(n);
console.log(m)
for (let i = 2; i <= secuencias; i++){
    c = n+m; 
    console.log(c);
    n=m;
    m=c;
}