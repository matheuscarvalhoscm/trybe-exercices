function sum (a, b){
    return a + b;
    
} console.log('A soma é: ' + sum(5, 10)); 

function subtraction(a, b){
    return a - b;
} console.log ('A subtração é: ' + subtraction(10, 5));

function mutiply (a, b){
    return a * b;
} console.log('A multiplicação é: ' + mutiply(5, 10));

function divide(a, b){
    return a / b;
} console.log('A divisão é: ' + divide(10, 2));

function modulee(a, b){
    return a % b;
} console.log('O resto da divisão é: ' + modulee(10, 2));

function returnHigher (a, b){
    if (a > b){
        return a;
    } else {
        return b;
    }
} console.log('O maior número é: ' + returnHigher(10, -10));

function returnHigher (a, b, c){
    if (a > b && a > c){
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
} console.log('O maior número é: ' + returnHigher(50, 40, 30));

function positiveOrNegative (a){
    if (a > 0){
        return 'Positive';
    } else if (a < 0){
        return 'Negative'
    } else {
        return 'Zero'
    }
} console.log('O número informado é: ' + positiveOrNegative(-1));