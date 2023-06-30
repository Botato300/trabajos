let fechaActual = new Date();
console.log("Dias para año nuevo:", CantidadDiasAnioNuevo(fechaActual));
  
function CantidadDiasAnioNuevo(fecha) {
	const anioNuevo = new Date(fecha.getFullYear() + 1, 0, 1);
	const diferencia = anioNuevo - fecha;
	const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
	return dias;
}