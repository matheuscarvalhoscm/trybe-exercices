// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a 
//função console.log() ;

/* Algoritmo:
  1. incluir ou criar o array;
  2. criar o loop que irá percorrer todo o array;
  3. imprimir o elemento do array a cada repetição;

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}