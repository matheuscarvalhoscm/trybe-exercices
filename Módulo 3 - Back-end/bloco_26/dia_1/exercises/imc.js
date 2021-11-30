const { questionInt, questionFloat } = require('readline-sync');

const weight = questionFloat("Qual o seu peso? ");
const height = questionInt("Qual a sua altura?" );

const imc = (weight, height) => {
  const imc = (weight / Math.pow(height / 100, 2)).toFixed(2);
  if (imc < 18.5) console.log(`Seu IMC é: ${imc}. Você está abaixo do peso.`);
  if (imc >= 18.5 && imc <= 24.9) console.log(`Seu IMC é: ${imc}. Seu peso está normal.`);
  if (imc >= 25 && imc <= 29.9) console.log(`Seu IMC é: ${imc}. Você está acima do peso.`);
  if (imc >= 30 && imc <= 34.9) console.log(`Seu IMC é: ${imc}. Seu peso se enquadra em Obesidade grau I.`);
  if (imc >= 35 && imc <= 39.9) console.log(`Seu IMC é: ${imc}. Seu peso se enquadra em Obesidade grau II.`);
  if (imc >= 40) console.log(`Seu IMC é: ${imc}. Seu peso se enquadra em Obesidade graus III e IV.`);
};

imc(weight, height);

module.exports = imc;
