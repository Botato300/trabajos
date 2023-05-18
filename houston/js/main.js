const cant = parseInt(prompt("Ingrese la cantidad de elementos para los vectores: "));

const vectorA = generarVector(cant);
const vectorB = generarVector(cant);
const product = productoEscalar(vectorA, vectorB);

console.log("Vector A: ", vectorA);
console.log("Vector B: ", vectorB);
console.log("Producto escalar:", product);

function generarVector(cant){
	const vector = [];

	for (let i = 0; i < cant; i++){
		vector.push(parseInt(Math.random() * 50));
	}

	return vector;
}

function productoEscalar(A, B){
	let result = 0;

	for (let i = 0; i < A.length; i++){
		result += A[i] * B[i];
	}

	return result;
}