const pass1 = document.getElementById("password")
const pass2 = document.getElementById("password2")
const btnVerificarPass = document.getElementById("btnVerificarPass")

btnVerificarPass.addEventListener("click", () =>{
    if(pass1.value == pass2.value){
        alert("Contraseña correcta!")
    }
    else{
        alert("Error! Contraseñas invalidas")
    }
})