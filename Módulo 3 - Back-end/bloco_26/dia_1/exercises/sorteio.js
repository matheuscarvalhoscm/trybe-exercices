const { questionInt, question } = require('readline-sync');

let answer = questionInt(`Digite um número de 1 a 10: `);

const generateRandomNumber = () => {
  return Math.round(Math.random() * 10);    
}

const prizeDraw = (answer) => {
  const randomNumber = generateRandomNumber();
  answer === randomNumber
  ? console.log(`Parabéns, número correto!`)
  : console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
}

prizeDraw(answer);

const play = question(`Jogar novamente? Sim ou Não?`);

const playAgain = (play) => {
  if (play === 'sim') {
    const newAnswer = question(`Digite um número de 1 a 10: `);
    prizeDraw(newAnswer);
  } 
}

playAgain(play);

