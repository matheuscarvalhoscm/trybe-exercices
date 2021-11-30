const { questionInt } = require('readline-sync');

const distance = questionInt(`Qual a distância? (em metros) `);
const time = questionInt(`Qual o tempo? (em minutos) `)

const velocidadeMedia = (distance, time) => {
  const velocity = distance / time
  return console.log(`A velocidade média é: ${velocity}`);
}

velocidadeMedia(distance, time);

module.exports = velocidadeMedia;
