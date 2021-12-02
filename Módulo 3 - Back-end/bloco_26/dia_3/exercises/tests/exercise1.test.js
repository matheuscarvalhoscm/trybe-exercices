const { expect } = require("chai");
const positiveOrNegative = require('../exercise1');

describe('Testa a função positiveOrNegative', () => {
  it('Se retorna uma string', () => {
    const result = positiveOrNegative(1);

    expect(result).to.be.a('string');
  });
  it('Se retorna "positivo"caso o número seja maior do que 0', () => {
    const result = positiveOrNegative(1);

    expect(result).to.equal('positivo');
  });
  it('Se retorna "negativo" caso o número seja menor do que 0', () => {
    const result = positiveOrNegative(-1);

    expect(result).to.equal('negativo');
  });
  it('Se retorna "neutro" caso o número seja 0', () => {
    const result = positiveOrNegative(0);

    expect(result).to.equal('neutro');
  });
  it('Se retorna "por favor, insira um número" caso o valor passado não seja do tipo number', () => {
    const result = positiveOrNegative('NaN');

    expect(result).to.equal('por favor, insira um número');
  })
});
