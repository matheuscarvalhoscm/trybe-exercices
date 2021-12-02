const fs = require('fs').promises;

const createFiles = async () => {
  const fileNames = ["Finalmente", "estou", "usando", "Promise.all", "!!!"];

  const promiseFiles = [];
  fileNames.forEach((file, index) => {
    const newFile = fs.writeFile(`file${index + 1}.txt`, `${file}`, "utf8");
    promiseFiles.push(newFile);
  });

  const allFiles = [];
  promiseFiles.forEach((_, index) => {
    allFiles.push(fs.readFile(`file${index + 1}.txt`, "utf8"));
  });

  const fileAllText = await Promise.all(allFiles);

  await fs.writeFile("fileAll.txt", fileAllText.join(" "));

  console.log(`Arquivo fileAll.txt criado com sucesso!`);
};

createFiles();
