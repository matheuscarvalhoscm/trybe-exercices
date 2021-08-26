// 9. Utilizando o array criado no exercício anterior imprima o resultado 
// da divisão de cada um dos elementos por 2 .

let numbers = [];

for (let index = 1; index < 26; index +=1){
    numbers.push(index);
}

console.log(numbers);

let numbersDivided = [];

for (let index = 0; index < numbers.length; index += 1){
    numbersDivided.push(numbers[index] / 2);
}

console.log(numbersDivided)