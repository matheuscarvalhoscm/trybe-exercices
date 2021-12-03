const { expect } = require("chai");
const sinon = require("sinon");
const fs = require("fs").promises;
const writeOnFile = require("../exercise2");

const fileName = "../novoArquivo.txt";
const fileContent = "AEIOU";

describe("Testa a função writeOnFile", () => {
  before(() => {
    sinon.stub(fs, "writeFile").resolves("ok");
    sinon.stub(fs, 'readFile').returns(fileContent);
  });
  after(() => {
    fs.writeFile.restore();
    fs.readFile.restore();
  });

  it("Se a função retorna uma string", async () => {
    const result = await writeOnFile(fileName, fileContent);

    expect(result).to.be.a("string");
  });

  it('Se a função for bem sucedida em escrever em um novo arquivo, retorna "ok"', async () => {
    const result = await writeOnFile(fileName, fileContent);

    expect(result).to.equal("ok");
  });

  it("Verifica se o arquivo foi criado", async () => {
    const result = await fs.readFile('novoArquivo.txt', "utf8");

    expect(result).to.equal("AEIOU");
  });
});

describe('Em caso de falha', () => {
  before(() => {
    sinon.stub(fs, 'readFile').rejects('falha ao criar arquivo');
  });

  after(() => {
    fs.readFile.restore();
  })

  it('A função for mal sucedida retorna "falha ao criar o arquivo"', async () => {
    const result = await writeOnFile(fileName, 1);

    expect(result).to.equal("falha ao criar o arquivo");
  });
})
