console.log(`Hello, World!`);
console.log(`...cá entre nós, essa coisa de "Hello, world!" simples já tá um pouco batida, né? 😝`);

const { question, questionInt } = require('readline-sync');

const name = question(`What is your name? `);
const age = questionInt(`How old are you? `);

console.log(`Hello, ${name}! You are ${age} years old`)
