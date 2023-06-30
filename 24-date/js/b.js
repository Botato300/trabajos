let currentDate = new Date();
console.log("Dias como campeones del mundo:", CantidadDiasCatar2022(currentDate));

function CantidadDiasCatar2022(fecha) {
	const fechaCatar2022 = new Date(2022, 11, 18);
	const diferencia = fecha - fechaCatar2022;
	const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
	return dias;
}
  