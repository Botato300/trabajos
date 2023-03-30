console.log(japonizar("Brad Pitt"));
console.log(japonizar("NOMBRE"));
console.log(japonizar("Pedro Gutierrez"));
console.log(japonizar("Joe McEnroe Jr"));
console.log(japonizar("Edgar Ramirez III"));
console.log(japonizar("Angelina Jolie IV"));

function japonizar(text){
	let newString = "";

	for(let i = 0; i < text.length; i++){
		if(!isVocal(text.charAt(i)) && !isVocal(text.charAt(i+1)) && text[i] != " " && text[i] != 'n'){
			newString += text[i];
			newString += "u";
			continue;
		}
		newString += text[i];
	}

	return newString;
}

function isVocal(char){
	char = char.toLowerCase();
	switch(char){
		case 'a':
			return true;
		case 'e':
			return true;
		case 'i':
			return true;
		case 'o':
			return true;
		case 'u':
			return true;
		default:
			return false;
	}
}
