window.onload = function (){
let formulario = document.querySelector("form.reservation")
formulario.addEventListener("submit", function (evento){
    let errores = []
    let campoNombre= document.querySelector("input.name")
    if (campoNombre.value = ""){
       //alert("Llena el campo por favor")
        errores.push("Llena el campo <em>name</em> por favor")
    }

    else if(campoNombre.nombre.length < 5){
        errores.push("Debe tener al menos 5 caracteres")
    }
    
    let campoDescrpicion= document.querySelector("input.description")
    if (campoDescrpicion.value = ""){
         errores.push("Llena el campo <em> description </em>por favor")
        }
    else if(campoDescrpicion.value < 20){
        errores.push("Debe tener al menos 20 caracteres")
    }

    let campoImg= document.querySelector("input.img")
    if (campoImg.value = ""){
        errores.push("Llena el campo <em> img </em>por favor")
       }
       /*else if(campoImg.value.file=!.jpg){
        errores.push("tiene que ser de otro formato")
       }*/
    let formErrores = document.querySelector("errores-en-el-ejs")
    //hay que agregar un div que muestre los errores, y a eso le ponemos la clase que tiene que ir arriba 
    for (let i = 0; i < errores.length;i++){
        formErrores.innerHTML += errores[i] +"<li>" +  "</li>"
    }
    })

    }




//falta vincularlo con el <script src="vinculaciones"></script>
//le agregamos las validaciones que queramos
module.exports = validaciones