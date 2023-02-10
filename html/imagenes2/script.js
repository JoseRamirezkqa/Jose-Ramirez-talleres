const uno = document.querySelector("#uno");
const dos = document.querySelector("#dos");
const tres = document.querySelector("#tres");
const cuatro = document.querySelector("#cuatro");
const cinco = document.querySelector("#cinco");
const seis = document.querySelector("#seis");
let bandera;
uno.addEventListener("click",function(e){bandera=1; cambio() });
dos.addEventListener("click",function(e){bandera=2;cambio()});
tres.addEventListener("click",function(e){bandera=3; cambio();});
cuatro.addEventListener("click",function(e){bandera=4; cambio();});
cinco.addEventListener("click",function(e){bandera=5;cambio();});
seis.addEventListener("click",function(e){bandera=6;cambio();});
function cambio(){
    $("div").removeClass("w-1/2");
    $("div.inline-grid").addClass("w-1/12")
    if(bandera == 1){
        $('#uno').removeClass("w-1/12");
        $("#uno").addClass("w-1/2");
        
    }else if(bandera==2){
        $('#dos').removeClass("w-1/12");
        $("#dos").addClass("transform");

    }else if(bandera == 3){
        $('#tres').removeClass("w-1/12");
        $("#tres").addClass("w-1/2");

    }else if(bandera == 4){
        $('#cuatro').removeClass("w-1/12");
        $("#cuatro").addClass("w-1/2");

    }else if(bandera == 5){
        $('#cinco').removeClass("w-1/12");
        $("#cinco").addClass("w-1/2");

    }else if(bandera == 6){
        $('#seis').removeClass("w-1/12");
        $("#seis").addClass("w-1/2");

    }
}