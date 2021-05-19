//  if = se
// else = senão

// let trybe = 16.03;

/* 
if (trybe >= 14 && trybe < 14.40) {
    // code
    console.log("Esquenta");
}

else if (trybe >= 16.30 && trybe < 17.50) {
    // other code 
    console.log("Aula ao vivo");
}

else if (trybe >= 19.40 && trybe < 20) {
    // other code 
    console.log("Fechamento");
}

else {
    // if none of the above codes are true, then the function will execute the code inside 'else'
    console.log("Momento assíncrono");
 */

var notaCandidato = 59.97;
const notaAprovacao = 80.00;

if (notaCandidato >= notaAprovacao) {
    console.log("Parabéns, você foi aprovada(o)!");
}

else if (notaCandidato < notaAprovacao && notaCandidato >= 60) {
    console.log("Você está na lista de espera");
}

else {
    console.log("Você foi reprovada(o)");
}
