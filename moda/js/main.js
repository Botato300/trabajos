const result = moda(50);
// console.log(result["vector"]);
// console.log(result["moda"]);

function moda(n){
	let newArr = [];
	let arrModa = new Array(n);
	arrModa = rellenarArr(arrModa);
	const cantElement = 10;

	for(let i = 0; i < n; i++) newArr[i] = Math.floor(Math.random() * (cantElement - 1) + 1);
	
	newArr = newArr.sort((a, b) => a - b);
	// console.log(newArr);

	for(let i = 0; i < n; i++){
		for(let k = 1; k <= cantElement; k++){
			if(newArr[i] == k){
				console.log(`vector: ${newArr[i]} | ${k}`);
				arrModa[i] += 1;
				// console.log(arrModa[i]);
				// console.log(k);
			}
		}
	}
	// console.log(arrModa);

	let max = 0;
	for(let i = 0; i < n; i++){
		if(arrModa[i] > max){
			max = newArr[i];
		}
	}

	return {
		vector: newArr,
		moda: max
	};
}

function rellenarArr(arr){
	for(let i = 0; i < arr.length; i++){
		arr[i] = 0;
	}

	return arr;
}