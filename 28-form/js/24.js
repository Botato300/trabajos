const form = document.getElementById("f24")

form.addEventListener("click", (e) =>{
    if(e.target.value != undefined) alert(`Se presiono el boton ${e.target.value}`)
})