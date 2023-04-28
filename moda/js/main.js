let data = moda(10);

console.log("Vector: " + data["vector"].join(", "));
console.log("Moda: " + data["moda"]);

function moda(n){
	const cant = 5;
	let repeticionMax = 0;
	let repeticionActual = 0;
	let moda = 0;
	let newArr = new Array(n);

	for(let i = 0; i < newArr.length; i++) newArr[i] = Math.floor(Math.random() * cant) + 1;

	for(let i = 0; i < newArr.length; i++){
		for(let k = 1; k <= cant; k++){
			if(newArr[i] == newArr[k]){
				++repeticionActual;
			}
			if(repeticionActual > repeticionMax){
				moda = newArr[i];
				repeticionMax = repeticionActual;
			}
		}
	}

	return{
		vector: newArr,
		moda: moda
	}
}
