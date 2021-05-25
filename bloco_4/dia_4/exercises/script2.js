/*
// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , 
// se não for.

function verifyPalindrome(word){
    let reversedWord = '';

    for (let index = (word.length) - 1; index >= 0; index -= 1){
        reversedWord += word[index];
    } if (reversedWord === word){
        return true;
    } else {
        return false; 
    } 
} console.log(verifyPalindrome('arara'));
console.log(verifyPalindrome('desenvolvimento'));
console.log(verifyPalindrome('tenet'));
console.log(verifyPalindrome('matheus'));
*/

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function checkHighestNumber(numbers){
    let numbers = [];

    for (let index = 0; index < 5; index += 1) {
        numbers.push(index);    
        return numbers;
    } 
} console.log(checkHighestNumber(numbers));