/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, 
seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 
Por exemplo: 

n = 5

*****
*****
*****
*****
***** 
PRECISO REFAZER UTILIZANDO APENAS O QUE FOI ENSINADO NO CURSO ATÉ ENTÃO
*/

/*  
let n = 5;

let symbol = '*';

for (linha = 0; linha < n; linha += 1){
    console.log(symbol.repeat(n));
}

*/

let n = 5;

let symbol = '*';
let line = '';

for (let index = 0; index < n; index += 1){
        line = line + symbol;
    }
for (let index2 = 0; index2 < 5; index2 += 1){
    console.log(line);
}




