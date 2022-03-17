window.onload = function (){

    let formulario = document.forms["camposCrearEdit"]
        formulario.addEventListener("submit", function (evento){
        let errores = []
        let campoNombre= document.getElementById("name")
            if (campoNombre.value = ""){
        //alert("Llena el campo por favor")
                errores.push("Llena el campo nombre por favor")
            }

            else if(campoNombre.value.length < 5){
            errores.push("El campo nombre debe tener al menos 5 caracteres")
            }
    
    let campoDescrpicion= document.getElementById("description")
        if (campoDescrpicion.value = ""){
         errores.push("Llena el campo description por favor")
        }
        else if(campoDescrpicion.value.length < 20){
        errores.push("el campo description tener al menos 20 caracteres")
        }

       /* let campoImg= document.querySelector("input.img")
        if (campoImg.value = ""){
        errores.push("Llena el campo <em> img </em>por favor")
        }*/
       /*else if(campoImg.value.file=!.jpg){
        errores.push("tiene que ser de otro formato")
       }*/
        
       
       
    if (errores.length >0) {
        evento.preventDefault()
       
        let formErrores = document.querySelector(".erroresJs") 
       
        for (let i = 0; i < errores.length;i++){
       
            formErrores.innerHTML += "<li>" + errores[i] +  "</li>"
        }
    }
    
})

}