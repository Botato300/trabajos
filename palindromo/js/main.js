console.log(esPalindromo("A caso hubo buhos aca"));
console.log(esPalindromo("Querido muerto esta tarde llegamos"));
console.log("XXX");

function esPalindromo(text){
	text = formatText(text);

	let stringInvertido = revertedText(text);

	return text == stringInvertido ? true : false;
}

function revertedText(text){
	let stringReverted = "";

	for(let i = text.length-1; i >= 0; i--){
		stringReverted += text[i];
	}
	return stringReverted;
}

function formatText(text){
	let newString = "";
	text = text.toLowerCase();

	for(let i = 0; i < text.length; i++){
		if(text[i] != " ") newString += text[i];
	}

	return newString;
}
