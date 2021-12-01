const { writeFile } = require('fs').promises;

const meuArquivo = 'meu-arquivo1.txt';

writeFile(meuArquivo, "Hello, World 2.0!")
  .then(() => console.log(`Arquivo escrito com sucesso!`))
  .catch((err) => {
      console.error(`Não foi possível escrever no arquivo. Erro: ${err.message}`);
  }
);
