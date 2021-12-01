const fs = require('fs').promises;

const meuArquivo = 'meu-arquivo.txt';

fs.readFile(meuArquivo, 'utf8')
  .then(res => console.log(`Conteúdo do arquivo: ${res}`))
	.catch((err) => {
		console.error(`Não foi possível ler o arquivo: ${meuArquivo}\n Erro: ${err}`)
		process.exit(1);
});