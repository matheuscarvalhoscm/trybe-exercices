const assert = require('assert');
const { type } = require('os');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui;
assert.strictEqual(typeof(sum), "function");

// 1. Teste se o retorno de sum(4, 5) é 9:
assert.strictEqual(sum(4, 5), 9, `o resultado de quatro mais cinco é igual a nove!`); 

// 2. Teste se o retorno de sum(0, 0) é 0:
assert.strictEqual(sum(0, 0), 0, `zero mais zero é igual a zero!`);

// 3. Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// 4. Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5");
assert.throws(() => {
  sum(typeof('number'), typeof('string'));
}, /^Error: parameters must be numbers$/);
