const fecha = new Date();
console.log(`¿Es un día laborable?  ${EsDiaLaborable(fecha) ? "Si" : "No"}`);

function EsDiaLaborable(fecha) {
    const dia = fecha.getDay();
    return dia >= 1 && dia <= 5;
}