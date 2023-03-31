console.log(desinfectar("cabadeabfaeaba", "a", "b")); //output: caadeabfaeaa
console.log(desinfectar("abadabeaba", "a", "b")); //output: aadabeaa

function desinfectar(text, charChoosed, charInfected){
	let newString = "";

	for(let i = 0; i < text.length; i++){
		if(text[i] == charInfected && text[i-1] == charChoosed && text[i+1] == charChoosed){
			continue;
		}
		newString += text[i];
	}

	return newString;
}