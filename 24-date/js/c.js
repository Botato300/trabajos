const fecha1 = new Date(1994, 0, 1);
const fecha2 = new Date(2023, 4, 10);
console.log("Años completos transcurridos:", CantidadAniosCompletos(fecha1, fecha2));

function CantidadAniosCompletos(fecha1, fecha2) {
    const diferencia = Math.abs(fecha2 - fecha1);
    const anios = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365));
    return anios;
}