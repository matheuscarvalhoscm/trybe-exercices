const { countNumbers } = require('./exercise1');

const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const num3 = Math.floor(Math.random() * 100 + 1);

countNumbers(num1, num2, num3)
 .then(res => console.log(`O valor obtido foi: ${res}`))
 .catch(err => console.log(err.message));
