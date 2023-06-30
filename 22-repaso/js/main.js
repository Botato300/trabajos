console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"));
// Output: ["#avocado", "#became", "#global"]

console.log(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year"));
// Output: ["#christmas", "#probably", "#will"]

console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));
// Output: ["#surprise", "#parents", "#fruit"]

console.log(getHashTags("Visualizing Science"));
// Output: ["#visualizing", "#science"]


function getHashTags(titular) {
	const puntuaciones = [",", ".", "!", "?", "'", "\""];
	const words = titular.split(" ");
	const cleanedWords = [];
  
	for(let i = 0; i < words.length; i++) {
	  let word = words[i];
  
		for(let j = 0; j < word.length; j++) {
			if(puntuaciones.includes(word[0])) {
				word = word.slice(1);
				j--;
			}
			else if(puntuaciones.includes(word[word.length - 1])) {
				word = word.slice(0, -1);
			}
			else{
				break;
			}
	  	}
		cleanedWords.push(word);
	}
  
	cleanedWords.sort((a, b) => b.length - a.length);
  
	const palabrasMasLargas = cleanedWords.slice(0, 3);
  
	const hashtags = [];
  
	for (let i = 0; i < palabrasMasLargas.length; i++) {
	  const palabra = palabrasMasLargas[i];
	  hashtags.push(`#${palabra.toLowerCase()}`);
	}
  
	return hashtags;
  }
  