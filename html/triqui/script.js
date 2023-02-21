const divPrincipal = document.createElement('div');
divPrincipal.className = 'grid grid-cols-3 w-[500px]  m-auto mt-5';
document.body.appendChild(divPrincipal);
const ids = [
    { id: "uno" }, { id: "dos" }, { id: "tres" }, { id: "cuatro" }, { id: "cinco" }, { id: "seis" }, { id: "siete" }, { id: "ocho" }, { id: "nueve" }
]
for (let i = 0; i < 9; i++) {
    if (i % 2 == 0) {
        const cuadroJuego = document.createElement('div');
        cuadroJuego.className = ' w-[166px] h-[166px] bg-orange-300 border-2 border-black hover:bg-orange-700 duration-500 text-center'
        let { id } = ids[i]
        cuadroJuego.id = id
        divPrincipal.appendChild(cuadroJuego);

    } else {
        const cuadroJuego = document.createElement('div');
        cuadroJuego.className = ' w-[166px] h-[166px] bg-orange-100 border-2 border-black hover:bg-orange-700 duration-500 text-center'
        let { id } = ids[i]
        cuadroJuego.id = id
        divPrincipal.appendChild(cuadroJuego);
    }
}
const uno = document.querySelector("#uno")
const dos = document.querySelector('#dos')
const tres = document.querySelector('#tres')
const cuatro = document.querySelector('#cuatro')
const cinco = document.querySelector('#cinco')
const seis = document.querySelector('#seis')
const siete = document.querySelector('#siete')
const ocho = document.querySelector('#ocho')
const nueve = document.querySelector('#nueve')
let contador = 0
uno.addEventListener("click", function (e) { valor = 1; dibujar() });
dos.addEventListener("click", function (e) { valor = 2; dibujar() });
tres.addEventListener("click", function (e) { valor = 3; dibujar() });
cuatro.addEventListener("click", function (e) { valor = 4; dibujar() });
cinco.addEventListener("click", function (e) { valor = 5; dibujar() });
seis.addEventListener("click", function (e) { valor = 6; dibujar() });
siete.addEventListener("click", function (e) { valor = 7; dibujar() });
ocho.addEventListener("click", function (e) { valor = 8; dibujar() });
nueve.addEventListener("click", function (e) { valor = 9; dibujar() });
function dibujar() {
    switch (valor) {
        case 1:
            if (contador == 0) {
                uno.innerHTML = ""
                const content = document.createElement('h1');
                content.textContent = "x"
                content.classList = 'text-2xl'
                uno.appendChild(content)
                contador = 1;
            } else if (contador == 1) {
                uno.innerHTML = ""
                const content = document.createElement('h1');
                content.textContent = "0"
                content.classList = 'text-2xl'
                uno.appendChild(content)
                contador = 0;
            }
            break;
        case 2:
            if (contador == 0) {
                dos.innerHTML = ""
                const content = document.createElement('h1');
                content.textContent = "x"
                content.classList = 'text-2xl'
                dos.appendChild(content)
                contador = 1;
            } else if (contador == 1) {
                dos.innerHTML = ""
                const content = document.createElement('h1');
                content.textContent = "0"
                content.classList = 'text-2xl'
                dos.appendChild(content)
                contador = 0;
            }
            break;
        case 3:
            if (contador == 0) {
                tres.innerHTML = ""
                const content = document.createElement('h1');
                content.textContent = "x"
                content.classList = 'text-2xl'
                tres.appendChild(content)
                contador = 1;
            } else if (contador == 1) {
                tres.innerHTML = ""
                const content = document.createElement('h1');
                content.textContent = "0"
                content.classList = 'text-2xl'
                tres.appendChild(content)
                contador = 0;
            }
            break;
        case 4:
            if (contador == 0) {
                cuatro.innerHTML = ""
                const content = document.createElement('h1');
                content.textContent = "x"
                content.classList = 'text-2xl'
                cuatro.appendChild(content)
                contador = 1;
            } else if (contador == 1) {
                cuatro.innerHTML = ""
                const content = document.createElement('h1');
                content.textContent = "0"
                content.classList = 'text-2xl'
                cuatro.appendChild(content)
                contador = 0;
            }
            break;
        case 5:
            if (contador == 0) {
                cinco.innerHTML = ""
                const content = document.createElement('h1');
                content.textContent = "x"
                content.classList = 'text-2xl'
                cinco.appendChild(content)
                contador = 1;
            } else if (contador == 1) {
                cinco.innerHTML = ""
                const content = document.createElement('h1');
                content.textContent = "0"
                content.classList = 'text-2xl'
                cinco.appendChild(content)
                contador = 0;
            }
            break;
        case 6:
            if (contador == 0) {
                seis.innerHTML = ""
                const content = document.createElement('h1');
                content.textContent = "x"
                content.classList = 'text-2xl'
                seis.appendChild(content)
                contador = 1;
            } else if (contador == 1) {
                seis.innerHTML = ""
                const content = document.createElement('h1');
                content.textContent = "0"
                content.classList = 'text-2xl'
                seis.appendChild(content)
                contador = 0;
            }
            break;
        case 7:
            if (contador == 0) {
                siete.innerHTML = ""
                const content = document.createElement('h1');
                content.textContent = "x"
                content.classList = 'text-2xl'
                siete.appendChild(content)
                contador = 1;
            } else if (contador == 1) {
                siete.innerHTML = ""
                const content = document.createElement('h1');
                content.textContent = "0"
                content.classList = 'text-2xl'
                seis.appendChild(content)
                contador = 0;
            }
            break;
        case 8:
            if (contador == 0) {
                ocho.innerHTML = ""
                const content = document.createElement('h1');
                content.textContent = "x"
                content.classList = 'text-2xl'
                ocho.appendChild(content)
                contador = 1;
            } else if (contador == 1) {
                ocho.innerHTML = ""
                const content = document.createElement('h1');
                content.textContent = "0"
                content.classList = 'text-2xl'
                ocho.appendChild(content)
                contador = 0;
            }
            break;
        case 9:
            if (contador == 0) {
                nueve.innerHTML = ""
                const content = document.createElement('h1');
                content.textContent = "x"
                content.classList = 'text-2xl'
                nueve.appendChild(content)
                contador = 1;
            } else if (contador == 1) {
                nueve.innerHTML = ""
                const content = document.createElement('h1');
                content.textContent = "0"
                content.classList = 'text-2xl'
                nueve.appendChild(content)
                contador = 0;
            }
            break;
    }
}