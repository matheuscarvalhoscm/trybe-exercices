const assert = require('assert');
// escreva a função sumAllNumbers aqui

const sumAllNumbers = (number) => {
    let output = 0;
    for (let index = 0; index < numbers.length; index += 1) {
        output += number[index];
    } return output;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);