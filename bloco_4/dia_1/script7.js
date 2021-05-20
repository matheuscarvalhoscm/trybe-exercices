// converte porcentagem em conceito A-F

/* 
let nota1 = 90%
let nota2 = 80%
let nota3 = 70%
let nota4 = 60%
let nota5 = 50%

let nota = 90%;

switch(nota) {
    case 90%:
        console.log('A');
        break;

    case 80%:
        console.log('B');
        break;
            
    case 70%:
        console.log('C');
        break;

    case 60%:
        console.log('D');
        break;
    
    case 50%:
        console.log('F');
        break;

    default nota < 0 || nota > 100:
        console.log('erro')
}

*/

let nota = -1;

if (nota >= 90) {
    console.log('A');

} else if (nota >= 80) {
    console.log('B');

} else if (nota >= 70) {
    console.log('C');

} else if (nota >= 70) {
    console.log('D');

} else if (nota >= 60) {
    console.log('E');

} else if (nota < 50 && nota > 0) {
    console.log('F');

} else if (nota <= 0 || nota >= 100) {
    console.log ('erro')

} else {
    console.log('N/A')

}
