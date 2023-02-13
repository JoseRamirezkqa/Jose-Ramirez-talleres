const newBox = document.querySelector("#verMas");
newBox.addEventListener("click", function(e){remplazar()});
function remplazar() {
    $('#verMas').addClass("none")
    $('#newBox').removeClass('none');
    $('#newBox').addClass('block')
}