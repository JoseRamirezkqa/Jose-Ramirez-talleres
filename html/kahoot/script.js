let contador = 0
const divContenedor = document.createElement('div');
divContenedor.className = 'w-[700px] bg-gray-100 h-[400px] m-auto  mt-[120px] '
document.body.appendChild(divContenedor);
function cuadro() {
    divContenedor.innerHTML = ""
    const divPregunta = document.createElement('div');
    divPregunta.className = 'w-[700px] bg-emerald-100 h-[150px] text-center  border-2 border-black pt-[15px]'
    divContenedor.appendChild(divPregunta);
    const divRespuestas = document.createElement('div');
    divRespuestas.className = 'w-[700px] bg-emerald-50 h-[250px] border-2 border-black text-center pt-[10px]';
    divContenedor.appendChild(divRespuestas);
    if(contador < 5){
        const preguntaText = document.createElement('h1');
        preguntaText.className = ' text-2xl font-bold'
        let { Pregunta } = kahoot[contador];
        preguntaText.innerHTML += `${Pregunta} <br>`;
        let {Pregunta_num} = kahoot[contador]
        const numeroPregunta = document.createElement('p')
        numeroPregunta.innerHTML += `Pregunta número: ${Pregunta_num}`;
        divPregunta.appendChild(preguntaText);
        divPregunta.appendChild(numeroPregunta)
        let { Preguntas } = kahoot[contador];
        console.log(Preguntas);
        for (let i = 0; i < Preguntas.length; i++) {
            if (i == 0) {
                const preguntaUno = document.createElement('h1')
                preguntaUno.id = "primero"
                preguntaUno.classList = "text-2xl  mb-[20px] hover:text-fuchsia-600 hover:bg-pink-100 hover:rounded-full duration-500"
                let { RespuestaA } = Preguntas[i]
                preguntaUno.innerHTML = `A. ${RespuestaA}  <br>`
                divRespuestas.appendChild(preguntaUno)
            } else if (i == 1) {
                const preguntaDos = document.createElement('h1');
                preguntaDos.id = "segundo";
                preguntaDos.classList = "text-2xl  mb-[20px] hover:text-fuchsia-600 hover:bg-pink-100 hover:rounded-full duration-500"
                let { RespuestaB } = Preguntas[i]
                preguntaDos.innerHTML += `B. ${RespuestaB} <br>`
                divRespuestas.appendChild(preguntaDos)
            } else if (i == 2) {
                const preguntaTres = document.createElement('h1');
                preguntaTres.id = "tercero"
                preguntaTres.classList = "text-2xl  mb-[20px] hover:text-fuchsia-600 hover:bg-pink-100 hover:rounded-full duration-500"
                let { RespuestaC } = Preguntas[i]
                preguntaTres.innerHTML += `C. ${RespuestaC} <br>`
                divRespuestas.appendChild(preguntaTres)
            } else if (i == 3) {
                const preguntaCuatro = document.createElement('h1');
                preguntaCuatro.id = "cuarto"
                preguntaCuatro.classList = "text-2xl  mb-[20px] hover:text-fuchsia-600 hover:bg-pink-100 hover:rounded-full duration-500"
                let { RespuestaD } = Preguntas[i]
                preguntaCuatro.innerHTML += `D. ${RespuestaD} <br>`
                divRespuestas.appendChild(preguntaCuatro)
            }
        }
        const primero = document.querySelector("#primero");
        const segundo = document.querySelector("#segundo");
        const tercero = document.querySelector("#tercero");
        const cuarto = document.querySelector("#cuarto");
        primero.addEventListener("click", function (e) { valor = 0; setTimeout(respuesta(), 5000) })
        segundo.addEventListener("click", function (e) { valor = 1; setTimeout(respuesta(), 5000)  })
        tercero.addEventListener("click", function (e) { valor = 2;setTimeout(respuesta(), 5000)  })
        cuarto.addEventListener("click", function (e) { valor = 3; setTimeout(respuesta(), 5000)  })

    }else{
        const titulo = document.createElement('h1')
        titulo.classList = " text-2xl font-bold m-10"
        titulo.textContent = "¡El juego ha terminado!"
        divPregunta.appendChild(titulo)
        const resultados = document.createElement('h1');
        resultados.classList = "text-2xl  m-[20px] "
        resultados.innerHTML = `Su resultado es así: <br> Correctas: ${Correcta} <br> Incorrectas: ${Incorrecta}`
        divRespuestas.appendChild(resultados)
    }
}
cuadro()
let Incorrecta = 0
let Correcta = 0
function respuesta() {
    let { Respuesta } = kahoot[contador].Preguntas[valor]
    if(Respuesta == "Incorrecta"){
        document.body.classList ='bg-rose-400 duration-300'
        Incorrecta += 1
    }else{
        document.body.classList ="bg-lime-300 duration-300"
        Correcta += 1
    }
    alert(`la respuesta es: ${Respuesta}`)
    contador += 1
    setTimeout(cuadro(),5000)
}

