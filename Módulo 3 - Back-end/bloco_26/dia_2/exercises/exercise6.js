const readline = require("readline");
const fs = require("fs").promises;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Qual arquivo você deseja ler?",
});

const question = () => {
  return new Promise((resolve, reject) => {
    rl.question(
      "Vamos sortear um arquivo! Escolha um número de 1 a 6: ",
      (answer) => {
        if (!answer) reject(console.log("Arquivo inexistente"));
        resolve(answer);
      }
    );
  });
};

const readFile = async () => {
  try {
    const answer = await question();
    const file = await fs.readFile(`file${answer}.txt`, "utf8");
    console.log(`O conteúdo do arquivo escolhido é: ${file}\nAté a próxima :)`);
    rl.close();
  } catch (err) {
    console.log(`Arquivo inexistente`);
    rl.close();
  }
};

readFile();
