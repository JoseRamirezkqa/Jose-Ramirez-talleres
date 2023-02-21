const titulo = document.createElement('div');
document.body.appendChild(titulo);
const tituloLetter = document.createElement('h1');
tituloLetter.className = 'text-[#919191] font-[arial] text-[187.5%]';
tituloLetter.textContent = 'Pokédex';
titulo.appendChild(tituloLetter);
document.body.className = 'bg-[url(https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png)]'
const divTotal = document.createElement('div');
document.body.appendChild(divTotal);
const busquedaInput = document.createElement('input');
busquedaInput.id = 'busqueda'
busquedaInput.className = 'border-2 rounded mr-3'
divTotal.appendChild(busquedaInput);
const buttonEnviar = document.createElement('input');
buttonEnviar.innerHTML = 'Enviar';
buttonEnviar.type = 'submit';
buttonEnviar.id = "subir"
buttonEnviar.className ='bg-blue-200 rounded hover:bg-blue-500 duration-[1s]'
divTotal.appendChild(buttonEnviar);
const divPrincipal = document.createElement("div");
divPrincipal.className = 'block m-auto w-[65%]'
divPrincipal.id = 'dom'
divTotal.appendChild(divPrincipal);
const contenidoResult = document.createElement('div');
document.body.appendChild(contenidoResult);
contenidoResult.id = 'resultado';
contenidoResult.className = 'none w-[20%] m-auto shadow-2xl'
const imagenResult = document.createElement('div');
imagenResult.id = 'img';
imagenResult.className = 'flex justify-center border-2';
contenidoResult.appendChild(imagenResult);
const divContent = document.createElement('div');
divContent.className = 'border-2 border';
contenidoResult.appendChild(divContent);
const pContent = document.createElement('p');
pContent.id = 'contenido';
pContent.className = 'text-center';
divContent.appendChild(pContent);
const divBottom = document.createElement('div');
divBottom.className = 'flex justify-center';
divContent.appendChild(divBottom);
const bottomContent = document.createElement('button');
bottomContent.className = 'bg-blue-200 rounded hover:bg-blue-500 duration-[1s]';
bottomContent.id = 'domRestuareButton';
bottomContent.innerHTML = 'volver'
divBottom.appendChild(bottomContent);
let { results } = pokemon;
for (let i = 0; i < results.length; i++) {
    let { name } = results[i];
    let { url } = results[i]
    let number = `N° ${i + 1}`
    const divs = document.createElement("div");
    document.body.appendChild(divs);
    divs.id = name
    const namePokemons = document.createElement("h1");
    namePokemons.textContent = name;
    divs.appendChild(namePokemons);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let { front_default } = data.sprites;
            const imgPokemon = document.createElement('img');
            imgPokemon.src = front_default;
            divs.appendChild(imgPokemon);
            const numberPokemon = document.createElement('h1');
            numberPokemon.textContent = number;
            divs.appendChild(numberPokemon);
            for (let i = 0; i < 1; i++) {
                let { name } = data.types[i].type
                switch (name) {
                    case 'grass':
                        divs.className = "inline-grid w-[10%] hover:shadow-2xl hover:outline-color-green-500 hover:scale-110 hover:bg-lime-200 duration-[2s] m-20"
                        break;
                    case 'fire':
                        divs.className = 'inline-grid w-[10%] hover:shadow-2xl hover:outline-color-slate-500 hover:scale-110 hover:bg-red-200 duration-[2s] m-20'
                        break;
                    case 'water':
                        divs.className = 'inline-grid w-[10%] hover:shadow-2xl hover:outline-color-slate-500 hover:scale-110 hover:bg-blue-200 duration-[2s] m-20'
                        break;
                    case 'bug':
                        divs.className = 'inline-grid w-[10%] hover:shadow-2xl hover:outline-color-slate-500 hover:scale-110 hover:bg-green-200 duration-[2s] m-20'
                        break;
                    case 'normal':
                        divs.className = 'inline-grid w-[10%] hover:shadow-2xl hover:outline-color-slate-500 hover:scale-110 hover:bg-slate-200 duration-[2s] m-20'
                        break;

                }
            }
        })
    divPrincipal.appendChild(divs)
}
let i;
const bulbasaur = document.querySelector("#bulbasaur");
const ivysaur = document.querySelector("#ivysaur");
const venusaur = document.querySelector("#venusaur");
const charmander = document.querySelector("#charmander");
const charmeleon = document.querySelector("#charmeleon");
const charizard = document.querySelector("#charizard");
const squirtle = document.querySelector("#squirtle");
const wartortle = document.querySelector("#wartortle");
const blastoise = document.querySelector("#blastoise");
const caterpie = document.querySelector("#caterpie");
const metapod = document.querySelector("#metapod");
const butterfree = document.querySelector("#butterfree");
const weedle = document.querySelector("#weedle");
const kakuna = document.querySelector("#kakuna");
const beedrill = document.querySelector("#beedrill");
const pidgey = document.querySelector("#pidgey");
const pidgeotto = document.querySelector("#pidgeotto");
const pidgeot = document.querySelector("#pidgeot");
const rattata = document.querySelector("#rattata");
const raticate = document.querySelector("#raticate");
const domRestuareButton = document.querySelector("#domRestuareButton");
const subir = document.querySelector("#subir");
bulbasaur.addEventListener("click", function (e) { i = 0; valor() })
ivysaur.addEventListener("click", function (e) { i = 1; valor() })
venusaur.addEventListener("click", function (e) { i = 2; valor() })
charmander.addEventListener("click", function (e) { i = 3; valor() })
charmeleon.addEventListener("click", function (e) { i = 4; valor() })
charizard.addEventListener("click", function (e) { i = 5; valor() })
squirtle.addEventListener("click", function (e) { i = 6; valor() })
wartortle.addEventListener("click", function (e) { i = 7; valor() })
blastoise.addEventListener("click", function (e) { i = 8; valor() })
caterpie.addEventListener("click", function (e) { i = 9; valor() })
metapod.addEventListener("click", function (e) { i = 10; valor() })
butterfree.addEventListener("click", function (e) { i = 11; valor() })
weedle.addEventListener("click", function (e) { i = 12; valor() })
kakuna.addEventListener("click", function (e) { i = 13; valor() })
beedrill.addEventListener("click", function (e) { i = 14; valor() })
pidgey.addEventListener("click", function (e) { i = 15; valor() })
pidgeotto.addEventListener("click", function (e) { i = 16; valor() })
pidgeot.addEventListener("click", function (e) { i = 17; valor() })
rattata.addEventListener("click", function (e) { i = 18; valor() })
raticate.addEventListener("click", function (e) { i = 19; valor() });
domRestuareButton.addEventListener("click", function (e) { domRestaure() })
subir.addEventListener("click", function (e) { funtionBusqueda() })
document.addEventListener("keydown", (event) => {
    let enter = event.which;
    if (enter == 13) {
        funtionBusqueda()
    }
})
function valor() {
    img.innerHTML = "";
    contenido.innerHTML = "";
    switch (i) {
        case 0:
        case 1:
        case 2:
            $('#img').removeClass('bg-red-200');
            $('#img').removeClass('bg-blue-200');
            $('#img').removeClass('bg-green-200');
            $('#img').removeClass('bg-gray-200');
            $('#img').addClass('bg-lime-200');
            break;
        case 3:
        case 4:
        case 5:
            $('#img').removeClass('bg-blue-200');
            $('#img').removeClass('bg-green-200');
            $('#img').removeClass('bg-gray-200');
            $('#img').removeClass('bg-lime-200');
            $('#img').addClass('bg-red-200');
            break;
        case 6:
        case 7:
        case 8:
            $('#img').removeClass('bg-green-200');
            $('#img').removeClass('bg-gray-200');
            $('#img').removeClass('bg-lime-200');
            $('#img').removeClass('bg-red-200');
            $('#img').addClass('bg-blue-200');
            break;
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14: ;
            $('#img').removeClass('bg-gray-200');
            $('#img').removeClass('bg-lime-200');
            $('#img').removeClass('bg-red-200');
            $('#img').removeClass('bg-blue-200');
            $('#img').addClass('bg-green-200');
            break;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            $('#img').removeClass('bg-lime-200');
            $('#img').removeClass('bg-red-200');
            $('#img').removeClass('bg-blue-200');
            $('#img').removeClass('bg-green-200');
            $('#img').addClass('bg-gray-200');
            break
    }
    let { name } = pokemon.results[i]
    let texto = `Pokemon: ${name} <br>`
    contenido.innerHTML += texto
    let { url } = pokemon.results[i];
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let { url } = data.forms[0]
            fetch(url)
                .then(response => response.json())
                .then(data2 => {
                    let { front_default } = data2.sprites;
                    var img = document.createElement('img');
                    img.src = front_default;
                    $('#img').append(img);
                })
            texto = `habilidades: `
            contenido.innerHTML += texto
            for (let i = 0; i < data.abilities.length; i++) {
                let { name } = data.abilities[i].ability;
                texto = `${i + 1}. ${name} <br>`
                contenido.innerHTML += texto
            }
            texto = `tipos: `
            contenido.innerHTML += texto
            for (let i = 0; i <= data.types.length - 1; i++) {
                let { name } = data.types[i].type
                texto = `${i + 1}. ${name} <br>`
                contenido.innerHTML += texto
                $("#resultado").removeClass('none')
                $("#dom").addClass('none')

            }
        })
    i = ""
}
function domRestaure() {
    $("#dom").removeClass('none');
    $("#resultado").addClass('none');
    contenido.innerHTML = "";
    img.innerHTML = "";
} function funtionBusqueda() {
    let resultadoBusqueda = busqueda.value;
    switch (resultadoBusqueda) {
        case 'bulbasaur':
            i = 0;
            valor()
            break;
        case 'ivysaur':
            i = 1
            valor()
            break;
        case 'venusaur':
            i = 2
            valor()
            break;
        case 'charmander':
            i = 3
            valor()
            break;
        case 'charmeleon':
            i = 4
            valor()
            break;
        case 'charizard':
            i = 5
            valor()
            break;
        case 'squirtle':
            i = 6
            valor()
            break;
        case 'wartotle':
            i = 7
            valor()
            break;
        case 'blastoise':
            i = 8
            valor()
            break;
        case 'caterpie':
            i = 9
            valor()
            break;
        case 'metapod':
            i = 10
            valor()
            break;
        case 'butterfree':
            i = 11
            valor()
            break;
        case 'weedle':
            i = 11
            valor()
            break;
        case 'kakuna':
            i = 12
            valor()
            break;
        case 'breedril':
            i = 13
            valor()
            break;
        case 'pidgey':
            i = 14
            valor()
            break;
        case 'pidgeotto':
            i = 15
            valor()
            break;
        case 'pidgeot':
            i = 16
            valor()
            break;
        case 'ratata':
            i = 17
            valor();
            break;
        case 'raticate':
            i = 18
            valor()
            break;
        default:
            alert('el nombre ingresado no está en la base de datos')
            break;
    }

    busqueda.value = "";
}