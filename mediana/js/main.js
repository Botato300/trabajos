console.log(mediana("1, 11, 8, 2, 4, 5, 2, 9, 11, 8, 5, 3, 5"));

function mediana(numbers){
	numbers = numbers.split(",");
	numbers = numbers.map((n) => Number(n));
	numbers = numbers.sort((a, b) => a - b);

	return numbers[parseInt(numbers.length / 2)];
}