// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array

/* Algoritmo:
    1. incluir ou criar o array;
    2. criara a variável que irá receber a soma;
    3. criar a variável que irá receber a média;
    4. criar o loop que percorre o arrat;
    5. incrementar a variável que recebe a soma com o valor correspondente a cada loop;
    6. dividir a variável da soma dos elementos pelo número de elemento do array 
    e atribuir o resultado a variável da média;
    7. imprimir a variável que da média;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let avarage = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
    avarage = sum / numbers.length;
}

console.log(avarage)

