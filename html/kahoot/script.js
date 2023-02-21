const divContenedor = document.createElement('div');
divContenedor.className = 'w-[800px] bg-gray-100 h-[800px] m-auto  mt-5'
document.body.appendChild(divContenedor);
const divPregunta = document.createElement('div');
divPregunta.className = 'w-[800px] bg-gray-500 h-[250px]'
divContenedor.appendChild(divPregunta);
const divRespuestas = document.createElement('div');
divRespuestas.className = 'w-[800px] bg-red-300 h-[550px]';
divContenedor.appendChild(divRespuestas);
