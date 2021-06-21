// exemplo 1 do uso do assert;
const assert = require('assert'); // sintaxe para incluir módulo assert;

assert.strictEqual(50, 50); // Sem erros: 50 == 50;
assert.strictEqual(50, 70); // AssertionError: 50 == 70;  

// -----------------------------------------------------------------------------------------------------

// exemplo 2 do uso do assert;
const assert = require('assert'); // incluindo o módulo assert no código;

const division = (x, y) =>  x / y; // escrevi uma arrow function que divide dois números;

const expected = division(9, 3); // criando constante que vai receber a função com dois números que serão divididos;

assert.strictEqual(expected, 3, 'Nove dividido por três é igual a três'); //utilizando o assert para comparar se o primeiro (expected) parametro é igual ao segundo (3), se for igual o teste passou senão o output será um erro e mostrará a mensagem do terceiro paramêtro [opcional] (string);
// a expressão acima tem o mesmo resultado se usarmos ela desta maneira: assert(expected === 3, 'Nove dividido por três é igual a três');

// -----------------------------------------------------------------------------------------------------

// exemplo 3 utilizando mais de um metodo assert;

const assert = require('assert'); // chamando o metódo assert;

const sum = (x, y) => x + y; // criando função que soma dois números;

const expected = sum(2, 2); // criando variável que vai guardar e executar a função de soma (2 + 2);

// realizando testes: 
assert.ok(expected === 4, 'A soma de dois mais dois é igual a quatro!'); // o metodo assert.ok verifica se o primeiro parâmetro é verdadeiro;
assert.strictEqual(expected, 4, 'A soma de dois mais dois é igual a quatro!'); // o método assert.StrictEqual verifica se o primeiro parâmetro (expected) é IGUAL ao segundo parâmetro (4) em tipo e valor; verificar por meio do operador lógico ===;
assert.notStrictEqual(expected, 5, 'A soma de dois mais dois é igual a quatro, e não cinco!'); // o método assert.notStrictEqual verifica se o primeiro parâmetro (expected) é DIFERENTE ao segundo parâmetro (5); verificar por meio do operador lógico !=;

// -----------------------------------------------------------------------------------------------------

// exemplo 4 testando arrays e objetos

const assert = require('assert');

const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];

assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 não são estritamente iguais');

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };

assert.deepStrictEqual(person1, person2, 'Erro: person1 e person2 não são estritamente iguais');

const person3 = { name: 'john', age: 19 };

assert.notDeepStrictEqual(person1, person3, 'Erro: os valores dos objetos são estritamente iguais');

// -----------------------------------------------------------------------------------------------------
