const { questionInt } = require('readline-sync');

console.log(`
O que você que fazer agora?
1 - Medir seu IMC
2 - Calcular velocidade média
3 - Adivinhar um número de sorteio
`);

const answer = questionInt("Digite o número da opção escolhida: ");

const index = (answer) => {
  if (answer === 1) {
    const imc = require('./imc');
    imc;
  } if (answer === 2) {
    const velocidade = require('./velocidade');
    velocidade;
  } if (answer === 3) {
    const sorteio = require('./sorteio');
    sorteio; 
  } else {
    console.log("Opção não existe");
  }
}

index(answer);