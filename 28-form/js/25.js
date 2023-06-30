/* ejercicio 1 */
const num = document.getElementById("numero")
const btnSubmit1 = document.getElementById("btnSubmit1")
btnSubmit1.addEventListener("click", (e) => {
    e.preventDefault()
    alert(num.value ** 2)
})

/* ejercicio 2 */
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const btnSubmit2 = document.getElementById("btnSubmit2")
btnSubmit2.addEventListener("click", (e) =>{
    e.preventDefault()
    if(Number(n1.value) > Number(n2.value)){
        alert("El numero mayor es " + n1.value)
    }
    else{
        alert("El numero mayor es " + n2.value)
    }
})

/* ejercicio 3 */
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const fullname = document.getElementById("fullname")
const btnSubmit3 = document.getElementById("btnSubmit3")
btnSubmit3.addEventListener("click", (e) =>{
    e.preventDefault()
    fullname.value = nombre.value + " " + apellido.value
})