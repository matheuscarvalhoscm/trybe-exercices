const { countNumbers } = require('./exercise1');

const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const num3 = Math.floor(Math.random() * 100 + 1);

const countNumbers2 = async (num1, num2, num3) => {
  try {
    const result = await countNumbers(num1, num2, num3);
    return console.log(`O valor obtido foi: ${result}`)
  } catch (err) {
    console.log(err.message)
  }
}

countNumbers2(num1, num2, num3);
