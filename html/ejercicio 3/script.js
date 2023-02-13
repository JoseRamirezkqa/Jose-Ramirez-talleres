const rotar = document.querySelector("#rotar");
const devolver = document.querySelector("#devolver");
let bandera = false;
rotar.addEventListener("click", function (e) { bandera = true ;rotate(); });
devolver.addEventListener("click", function (e) { bandera = false; rotate();});
function rotate() {
    if (bandera == true) {
        $("#dom").addClass("rotate-[-20deg]");
        $("#circulo").addClass("rotate-[-70deg]");
    }else if(bandera == false){
        $("#dom").removeClass("rotate-[-20deg]");
        $("#circulo").removeClass("rotate-[-70deg]");
    }

}