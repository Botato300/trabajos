const vectorA = generarVectorA(5);

console.log(`Vector A generado: ${vectorA}`);
console.log(`Promedio del vector A: ${calcularPromedioVector(vectorA)}`);
console.log(`Vector B generado: ${generarVectorB(vectorA)}`);
console.log(`Vector C generado: ${generarVectorC(vectorA)}`);
console.log(`Cantidad de multiplos de 2 y 3: ${obtenerMultiplos(vectorA, 2) + obtenerMultiplos(vectorA, 3)}`);
console.log(`Suma de todos los elementos del vector: ${sumarElementosVector(vectorA)}`);

function generarVectorA(cant){
	let vector = [];
	
	for(let i = 0; i < cant; i++){
		vector.push(parseInt(Math.random() * 32000));
	}

	return vector;
}

function generarVectorB(vectorA){
	let vector = [];
	const promedio = calcularPromedioVector(vectorA);

	for(let i = 0; i < vectorA.length; i++){
		if(vectorA[i] > promedio) vector.push(vectorA[i]);
	}

	return vector;
}

function generarVectorC(vectorA){
	return vectorA.map((index) => index * 2);
}

function calcularPromedioVector(vector){
	let ac = 0;

	for(let i = 0; i < vector.length; i++){
		ac += vector[i];
	}

	return ac / vector.length;
}

function obtenerMultiplos(vector, limite){
	let ac = 0;

	for(let i = 0; i < vector.length; i++){
		if(vector[i] % limite == 0) ac += 1;
	}

	return ac;
}

function sumarElementosVector(vector){
	return vector.reduce((ac, index) => ac + index);
}