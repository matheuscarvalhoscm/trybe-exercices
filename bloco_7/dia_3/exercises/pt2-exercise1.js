const assert = require('assert');
// escreva a função addOne aqui

const addOne = (array) => {
    const output = []; // não entendi pq criar o output aqui
    for (let index = 0; index < array.length; index += 1) {
        output.push(array[index] + 1);
    } return output;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);