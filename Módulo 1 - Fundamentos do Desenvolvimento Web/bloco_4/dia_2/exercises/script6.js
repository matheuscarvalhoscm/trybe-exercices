// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. 
// Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// PRECISO REFAZER POIS ESTA IMPRIMINDO VÁRIAS VEZES A MENSAGEM DO ELSE;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let oddNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1){
        oddNumbers = oddNumbers +=1
    } else {
        console.log ('Nenhum valor ímpar encontrado');
    }

}

console.log('Existem ' + oddNumbers + ' números ímpares');
