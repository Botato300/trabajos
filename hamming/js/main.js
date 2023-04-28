 console.log(getDistanceHammer("11010", "01100"))


 function getDistanceHammer(b1, b2){
	let diferencias = 0;

	for(let i = 0; i < b1.length; i++){
		b1[i] != b2[i] ? ++diferencias : null;
	}

	return diferencias;
 }