//let db = require('../../src/database/models');

window.onload = function(){
    
    let nombre = document.getElementById("first_name");
    
    nombre.oninput= function(){
    
        if(nombre.value.length<1) {
            document.getElementById('errorNombre').classList.add('is-invalid');
            document.getElementById('errorNombre').innerHTML= "* El Nombre no puede estar vacío";
        } else if(nombre.value.length<2) {
            document.getElementById('errorNombre').classList.add('is-invalid');
            document.getElementById('errorNombre').innerHTML= "* El Nombre debe contener por lo menos 2 caracteres";
        }else {
            document.getElementById('errorNombre').innerHTML= "";
            document.getElementById('errorNombre').classList.remove('is-invalid');
        }
    }

    let apellido = document.getElementById("last_name");
    
    apellido.oninput= function(){
    
        if(apellido.value.length<1) {
            document.getElementById('errorApellido').classList.add('is-invalid');
            document.getElementById('errorApellido').innerHTML= "* El Apellido no puede estar vacío";
 
        } else if(apellido.value.length<2) {
            document.getElementById('errorApellido').classList.add('is-invalid');
            document.getElementById('errorApellido').innerHTML= "* El Apellido debe contener por lo menos 2 caracteres";
        }else {
            document.getElementById('errorApellido').innerHTML= "";
            document.getElementById('errorApellido').classList.remove('is-invalid');
        }
    }

    let email = document.getElementById("email");
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    email.oninput= function(req,res){
        // let usersDB = await db.User.findall();
        // let userRepeated = usersDB.find(user => user.email == email.value)
    
        if(email.value.length<1) {
            document.getElementById('errorEmail').classList.add('is-invalid');
            document.getElementById('errorEmail').innerHTML= "* El Email no puede estar vacío";
        } else if(!email.value.match(emailFormat)) {
            document.getElementById('errorEmail').classList.add('is-invalid');
            document.getElementById('errorEmail').innerHTML= "* El Email no tiene un formato valido";
        // } else if(userRepeated) {
        //     document.getElementById('errorEmail').classList.add('is-invalid');
        //     document.getElementById('errorEmail').innerHTML= "* El Email ya se encuentra registrado";
        } else {
            document.getElementById('errorEmail').innerHTML= "";
            document.getElementById('errorEmail').classList.remove('is-invalid');
        }
    }
    let password = document.getElementById("password");
    let isNonWhiteSpace = /^\S*$/;
    let isContainsUppercase = /^(?=.*[A-Z]).*$/;
    let isContainsLowercase = /^(?=.*[a-z]).*$/;
    let isContainsNumber = /^(?=.*[0-9]).*$/;
    let isContainsSymbol =
    /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    
    password.oninput= function(){
    
        if(password.value.length<1) {
            document.getElementById('errorPassword').classList.add('is-invalid');
            document.getElementById('errorPassword').innerHTML= "* Este campo es obligatorio";
        } else if (!isNonWhiteSpace.test(password.value)) {
            document.getElementById('errorPassword').classList.add('is-invalid');
            document.getElementById('errorPassword').innerHTML= "* La contraseña no debe contener espacios";
        } else if(password.value.length<8) {
            document.getElementById('errorPassword').classList.add('is-invalid');
            document.getElementById('errorPassword').innerHTML= "* La contraseña debe contener al menos 8 caracteres";
        }else if(!isContainsUppercase.test(password.value)) {
            document.getElementById('errorPassword').classList.add('is-invalid');
            document.getElementById('errorPassword').innerHTML= "* La contraseña debe contener al menos 1 letra mayúscula";
        } else if(!isContainsLowercase.test(password.value)) {
            document.getElementById('errorPassword').classList.add('is-invalid');
            document.getElementById('errorPassword').innerHTML= "* La contraseña debe contener al menos 1 letra minúscula";
        } else if(!isContainsNumber.test(password.value)) {
            document.getElementById('errorPassword').classList.add('is-invalid');
            document.getElementById('errorPassword').innerHTML= "* La contraseña debe contener al menos 1 número";
        } else if(!isContainsSymbol.test(password.value)) {
            document.getElementById('errorPassword').classList.add('is-invalid');
            document.getElementById('errorPassword').innerHTML= "* La contraseña debe contener al menos 1 caracter especial";
        } else {
            document.getElementById('errorPassword').innerHTML= "";
            document.getElementById('errorPassword').classList.remove('is-invalid');
        }
    }

    let password2 = document.getElementById("password2");
    password2.oninput= function(){
    
        if(password2.value.length<1) {
            document.getElementById('errorPassword2').classList.add('is-invalid');
            document.getElementById('errorPassword2').innerHTML= "* Este campo es obligatorio";
        } else if(!password.value.match(password2.value)) {
                document.getElementById('errorPassword2').classList.add('is-invalid');
                document.getElementById('errorPassword2').innerHTML= "* La contraseña no coincide";
        } else {
            document.getElementById('errorPassword2').innerHTML= "";
            document.getElementById('errorPassword2').classList.remove('is-invalid');
        }
    }

    
    let formulario = document.forms["camposLogin"];
    console.log(formulario)
    //let formulario= document.getElementsByClassName('camposLogin');
    formulario.addEventListener('submit',function(event) {
        let pruebaerrores = document.getElementsByClassName('is-invalid');
        console.log(pruebaerrores)
        if(pruebaerrores.length>0){
            console.log('hice prevent default')
            event.preventDefault()
        }
    })   

    // let image = document.getElementById("image");
    // let imageExtension = image.value;
   
    // let validFormats= /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    
    // image.onchange= function(){
    //     console.log(image.value)
    //     console.log(validFormats)
    
    //      if(image.length==0) {
    //         document.getElementById('errorImage').classList.add('is-invalid');
    //           document.getElementById('errorImage').innerHTML= "* No se ha seleccionado ningún archivo";
    //      } else 
    //     if(!validFormats.exec(imageExtension)) {
    //         image.value="";                
    //         document.getElementById('errorImage').classList.add('is-invalid');
    //         document.getElementById('errorImage').innerHTML= "* Tipo de archivo no permitido";
    //     } else {
    //         document.getElementById('errorImage').innerHTML= "";
    //         document.getElementById('errorImage').classList.remove('is-invalid');
    //     }
    // }
}
