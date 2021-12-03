const fs = require("fs").promises;

const writeOnFile = async (fileName, content) => {
  try {
    await fs.writeFile(fileName, content);
    return 'ok';
  } catch (err) {
    return 'falha ao criar o arquivo';
  }
}

writeOnFile('./meuArquivo.txt', 1);

module.exports = writeOnFile;
