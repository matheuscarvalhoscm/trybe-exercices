// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

/* Algoritmo:
  1. incluir ou criar o array;
  2. criara uma variável com valor zero;
  3. criar o loop que percorre o array;
  4. incrementar a variável criada com o valor do elemento do array que corresponde a cada loop;
  5. imprimir a variável da soma;   
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index]
}
console.log(sum)