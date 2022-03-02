window.onload = function (){
let formulario = document.querySelector("form.reservation")
formulario.addEventListener("submit", function (evento){
    let errores = []
    let campos= document.querySelector("input.")
    if (campos.value = ""){
       // una forma alert("Llena el campo por favor")
       // otra forma errores.push("Llena el campo por favor")
    }

    if(errores.length > 0){
        evento.preventDefault()
    
    let formErrores = document.querySelector("errores-en-el-ejs")
    //hay que agregar un div que muestre los errores
    for (let i = 0; i < errores.length;i++){
        formErrores.innerHTML += "<li>" + errores[i] + "</li>"
    }
    }

})
}


//falta vincularlo con el <script src="vinculaciones"></script>
//le agregamos las validaciones que queramos
module.exports = validaciones