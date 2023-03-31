console.log(convertirFrase("fmjy", 2)); //output: hola
console.log(convertirFrase("kslbm", 2)); //output: mundo

function convertirFrase(text, cantDesplazamiento){
	let newString = "";
	const abc = "abcdefghijklmnopqrstuvwxyz";
	
	for(let i = 0; i < text.length; i++){
		let total = text[i].charCodeAt() + cantDesplazamiento;
		if(total > "z".charCodeAt()){
			total = total - text[i].charCodeAt() - cantDesplazamiento;
			let char = abc[total];
			newString += char;
			continue;
		}
		newString += String.fromCharCode(total);
	}
	
	return newString;
}