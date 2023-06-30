/* Ejercicio 1 */
const pizzas = document.getElementById("pizzas")
const precioActual = document.getElementById("precio")

const pizzasInfo = {
    "pJQ": {
        precio: 25
    },
    "pMuzza": {
        precio: 10
    },
    "pMorrones": {
        precio: 38
    }
}

pizzas.addEventListener("click", (e) => {
    precioActual.value = "$" + pizzasInfo[e.target.value]["precio"]
})

/* Ejercicio 2 */
const producto = {
    "samsung22":{
        precio: 250
    },
    "samsung24":{
        precio: 350
    },
    "samsung27":{
        precio: 550
    },
    "i3":{
        precio: 400
    },
    "i5":{
        precio: 600
    },
    "i7":{
        precio: 800
    },
    "500gb":{
        precio: 300
    },
    "1tb":{
        precio: 440
    },
    "3tb":{
        precio: 500
    },
}
const procesadores = document.getElementById("procesadores")
const almacenamiento = document.getElementById("almacenamiento")
const monitores = document.getElementById("monitores")
const presupuesto = document.getElementById("presupuesto")
const btnSubmitPresupuesto = document.getElementById("btnSubmit28-2")
btnSubmitPresupuesto.addEventListener("click", (e) =>{
    let precio = producto[procesadores.value]["precio"] + producto[monitores.value]["precio"] +  producto[almacenamiento.value]["precio"]
    presupuesto.value = "$" + precio
})


/* Ejercicio 3 */
const pizzas2 = document.getElementById("pizzas2")
const precioTotal = document.getElementById("precioTotal")
const cantidad = document.getElementById("cantidad")
const btnPrecioTotal = document.getElementById("btnPrecioTotal")
const pizzasInfo2 = {
    "pJQ": {
        precio: 25
    },
    "pMuzza": {
        precio: 10
    },
    "pEspecial": {
        precio: 38
    }
}

btnPrecioTotal.addEventListener("click", () =>{
    let precioEstimado = pizzasInfo2[pizzas2.value]["precio"] * cantidad.value
    precioTotal.value = "$" + precioEstimado
})

/* Ejercicio 4 */
const btnSubmit27_4 = document.getElementById("btnSubmit27_4")
const opciones = document.getElementById("opciones")
let allCorrect = false
btnSubmit27_4.addEventListener("click", () =>{
    if(allCorrect){
        alert("Respuestas correctas!")
    }
    else{
        alert("Revisa tus respuestas, estan mal.")
    }
})
opciones.addEventListener("click", (e) =>{
    if(e.target.value != undefined && e.target.checked){
        if(e.target.value  == 2 && e.target.value.checked || e.target.value  == 1994 && e.target.value.checked){
            allCorrect = true
        }
        else{
            allCorrect = false
        }
    }
})