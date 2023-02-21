let i;
const newBox = document.querySelector("#botonInicial");
const bulbasur = document.querySelector("#bulbasur");
const ivysaur = document.querySelector("#ivysaur");
const venusaur = document.querySelector("#venusaur");
const charmander = document.querySelector("#charmander");
const charmeleon = document.querySelector("#charmeleon");
const charizard = document.querySelector("#charizard");
const squirtle = document.querySelector("#squirtle");
const wartotle = document.querySelector("#wartotle");
const blastoise = document.querySelector("#blastoise");
const caterpie = document.querySelector("#caterpie");
const metapod = document.querySelector("#metapod");
const butterfree = document.querySelector("#butterfree");
const weedle = document.querySelector("#weedle");
const kakuna = document.querySelector("#kakuna");
const breedril = document.querySelector("#breedril");
const pidgey = document.querySelector("#pidgey");
const pidgeotto = document.querySelector("#pidgeotto");
const pidgeot = document.querySelector("#pidgeot");
const ratata = document.querySelector("#ratata");
const raticate = document.querySelector("#raticate");
const busqueda = document.querySelector("#busqueda");
newBox.addEventListener("click", function (e) { remplazar(); setTimeout(animation, 1000) });
bulbasur.addEventListener("click", function (e) { i = 0; valor() })
ivysaur.addEventListener("click", function (e) { i = 1; valor() })
venusaur.addEventListener("click", function (e) { i = 2; valor() })
charmander.addEventListener("click", function (e) { i = 3; valor() })
charmeleon.addEventListener("click", function (e) { i = 4; valor() })
charizard.addEventListener("click", function (e) { i = 5; valor() })
squirtle.addEventListener("click", function (e) { i = 6; valor() })
wartotle.addEventListener("click", function (e) { i = 7; valor() })
blastoise.addEventListener("click", function (e) { i = 8; valor() })
caterpie.addEventListener("click", function (e) { i = 9; valor() })
metapod.addEventListener("click", function (e) { i = 10; valor() })
butterfree.addEventListener("click", function (e) { i = 11; valor() })
weedle.addEventListener("click", function (e) { i = 12; valor() })
kakuna.addEventListener("click", function (e) { i = 13; valor() })
breedril.addEventListener("click", function (e) { i = 14; valor() })
pidgey.addEventListener("click", function (e) { i = 15; valor() })
pidgeotto.addEventListener("click", function (e) { i = 16; valor() })
pidgeot.addEventListener("click", function (e) { i = 17; valor() })
ratata.addEventListener("click", function (e) { i = 18; valor() })
raticate.addEventListener("click", function (e) { i = 19; valor() });
function funtionBusqueda() {
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
let bandera = false
function remplazar() {
    $("#cargando").removeClass('none');
    $("#botonInicial").addClass('none');

}
function animation() {
    $("#cargando").addClass('none')
    $('#newBox').removeClass('none');
    $('#newBox').addClass('block')
}

function valor() {
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
}