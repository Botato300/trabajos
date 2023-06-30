
let partidos = [
	'AAAAAAAAAF',
	'BBBBBBBBBBF',
	'AAAAAAAABBBBBBBBBBAABBBABBF',
	'BF',
	'F'
];

for(let i = 0; i < partidos.length; i++) {
	let resultado = obtenerResultado(partidos[i]);
	console.log(resultado);
}
/* output:
9-0 0-0
0-9 0-1
8-10 3-5
0-1
0-0
*/

function obtenerResultado(partido) {
	let resultadoSets = [];
	let contadorA = 0;
	let contadorB = 0;
	let puntosA = 0;
	let puntosB = 0;
  
	for(let i = 0; i < partido.length; i++) {
		if(partido[i] == 'A') {
			puntosA++;
			if (puntosA >= 9 && puntosA - puntosB >= 2) {
				resultadoSets.push(`${puntosA}-${puntosB}`);
				contadorA++;
				puntosA = 0;
				puntosB = 0;
			}
		} 
		else if(partido[i] == 'B') {
			puntosB++;
			if (puntosB >= 9 && puntosB - puntosA >= 2) {
				resultadoSets.push(`${puntosA}-${puntosB}`);
				contadorB++;
				puntosA = 0;
				puntosB = 0;
			}
		}
		else if(partido[i] == 'F') {
			resultadoSets.push(`${puntosA}-${puntosB}`);
			break;
		}
	}
	return resultadoSets.join(' ');
}
