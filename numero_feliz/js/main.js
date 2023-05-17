console.log(esFeliz(37)); //output: false
console.log(esFeliz(203)); //output: true

function esFeliz(num){
	const arr = [];
  
	while(num != 1){
		if(arr.includes(num)){
			return false;
	  	}
		arr.push(num);
  
		let next = 0;
		let currentNum = num; 
		while(currentNum > 0){
			const digit = currentNum % 10;
			next += digit ** 2;
			currentNum = Math.floor(currentNum / 10);	
		}
		num = next;
	}
	return true;
}