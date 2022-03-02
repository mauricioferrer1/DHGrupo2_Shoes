window.onload = function (){

let nombreInput = document.querySelector("PonerElInput")

nombreInput.addEventListener("focus",function(){
    nombreInput.innerHTML =+ "El input/contraseña debe tener más de 8 caracteres"
    //aca mi idea es que una vez que el usuario se pone en el input le salte ese mensaje, si lo hago con un alert queda mal


})







}

module.exports = eventos