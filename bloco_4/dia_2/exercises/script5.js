// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;

/* Algoritmo:
    1. incluir ou criar o arry
    2. criar uma variável que irá receber o número maior. a variável incia com o valor igual a 0;
    3. criar um loop que percorrerá todo o array;
    4. dentro do loop, utilizar if para verificar se o elemento no índice do array é maior
    que a variável que recebe o número maior;
    5. se o if for verdadeiro, a variável maior número irá receber o elemento que está no índice
    que foi verificado no loop;
    6. imprimir a variável que carrega o maior número 
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let highestNumber = 0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > highestNumber){
        highestNumber = numbers[index];
    }
}

console.log(highestNumber);

