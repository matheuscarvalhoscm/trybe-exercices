const factorial = number => {
	let result = 1;
	for (let index = 1; index <= number; index += 1) {
			result *= index;
	} return result;
} 

console.log(`O faltorial é ${factorial(4)}`);


// esse link ajudou https://stackoverflow.com/questions/17386774/javascript-find-longest-word-in-a-string?page=1&tab=votes#tab-top
const maiorPalavra = (frase) => {
	let phraseSplit = frase.split(" ");
	let count = 0;
	let longestWord = '';
	for (let index = 0; index < phraseSplit.length; index += 1) {
		if (count < phraseSplit[index].length) {
			count = phraseSplit[index].length;
			longestWord = phraseSplit[index];
		}
	} return longestWord;
}

console.log(`A maior palavra é: ${maiorPalavra('Apanhei pra consegui solucionar essa!')}`);
