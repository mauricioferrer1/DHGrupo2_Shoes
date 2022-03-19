window.onload = function(){

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
        // } else if(email.value) {
        //     db.User.findOne({ where: { email: email.value } })
        // .then(userToLogin => {
        //     console.log(email.value)
        //     if(userToLogin){
        //         document.getElementById('errorEmail').classList.add('is-invalid');
        //         document.getElementById('errorEmail').innerHTML= "* El Email ya existe en la base de datos";
        //     }
        // })
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
    
    let formulario = document.forms["loginForm"];
    //let formulario= document.getElementsByClassName('camposLogin');
    formulario.addEventListener('submit',function(event) {
        let pruebaerrores = document.getElementsByClassName('is-invalid');
        if(pruebaerrores.length>0){
            event.preventDefault()
        }
    })   
}

