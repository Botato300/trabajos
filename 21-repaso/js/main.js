console.log(obtenerCantidadDigitos(2569)); //output: 4

function obtenerCantidadDigitos(numero) {
    let numAbsoluto = Math.abs(numero);
    let digitos = Math.ceil(Math.log10(numAbsoluto));

    return digitos;
}