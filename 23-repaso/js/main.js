console.log(deslizar([2, 2, 2, 0])); //output: [4, 2, 0, 0]
console.log(deslizar([2, 2, 4, 4, 8, 8])); //output: [4, 8, 16, 0, 0, 0]
console.log(deslizar([0, 2, 0, 2, 4])); //output: [4, 4, 0, 0, 0]
console.log(deslizar([0, 2, 2, 8, 8, 8])); //output: [4, 16, 8, 0, 0, 0]

function deslizar(fila) {
	const fichas = [];
	
	for(let i = 0; i < fila.length; i++) {
	  if(fila[i] !== 0) {
		fichas.push(fila[i]);
	  }
	}
	
	for(let i = 0; i < fichas.length - 1; i++) {
	  if(fichas[i] === fichas[i + 1]) {
		fichas[i] *= 2;
		fichas[i + 1] = 0;
	  }
	}

	const resultado = [];
	let ac = 0;
	
	for (let i = 0; i < fichas.length; i++) {
	  if(fichas[i] !== 0) {
		resultado[ac] = fichas[i];
		ac++;
	  }
	}
	
	while(resultado.length < fila.length) {
		resultado.push(0);
	}
	
	return resultado;
}
  