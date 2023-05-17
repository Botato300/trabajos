let result = obtenerNumeroPresidenta(10, 50);
console.log(result.join(' ')); // output: 11 23 29 41 43 47

function esPrimo(num){
	if(num <= 1){
		return false;
	}

	for (let i = 2; i <= Math.sqrt(num); i++){
		if(num % i === 0) {
			return false;
		}
	}
	return true;
}

function sumarPrimos(num){
	let suma = 0;
	while(num > 0){
		suma += num % 10;
		num = Math.floor(num / 10);
	}
	return esPrimo(suma);
}

function obtenerNumeroPresidenta(a, b){
	let numerosPresidenta = [];

	for (let i = a; i <= b; i++){
		if (esPrimo(i) && sumarPrimos(i)){
			numerosPresidenta.push(i);
		}
	}
	return numerosPresidenta;
}