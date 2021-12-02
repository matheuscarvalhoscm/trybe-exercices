const fs = require("fs").promises;
const simpsons = "simpsons.json";

const getCharactersList = async () => {
  try {
    const response = await fs.readFile(simpsons, "utf8");
    const data = JSON.parse(response);
    const characterList = data.map(({ id, name }) =>
      console.log(`${id} - ${name}`)
    );
    return characterList;
  } catch (err) {
    console.log(err.message);
  }
};

// getCharactersList();

const getCharacterById = async (id) => {
  try {
    const response = await fs.readFile(simpsons, "utf8");
    const data = JSON.parse(response);
    const character = data.find((char) => char.id == id);
    console.log(character);
  } catch (err) {
    console.log(err.message);
  }
};

// getCharacterById(4);

const removeCharacters = async () => {
  try {
    const data = await fs.readFile(simpsons, "utf8");
    const parsedData = JSON.parse(data);

    const newData = parsedData.filter(
      ({ id }) => Number(id) !== 6 && Number(id) !== 10
    );

    await fs.writeFile(simpsons, JSON.stringify(newData));
    console.log(`IDs 6 e 10 removidos com sucesso!`);
  } catch (err) {
    console.log(err.message);
  }
};

// removeCharacters();

const createSimpsonFamilyFile = async () => {
  try {
    const data = await fs.readFile(simpsons, "utf8");
    const parsedData = JSON.parse(data);

    const simpsonFamily = parsedData.filter(({ id }) => Number(id) <= 4);

    await fs.writeFile("simpsonsFamily.json", JSON.stringify(simpsonFamily));
    console.log(`Registro dos Simpsons criado com sucesso!`);
  } catch (err) {
    console.log(err.message);
  }
};

// createSimpsonFamilyFile();

const addNelsonToSimpsonFamily = async () => {
  try {
    const data = await fs.readFile(simpsons, "utf8");
    const parsedData = JSON.parse(data);

    const nelson = parsedData.find(({ name }) => name === "Nelson Muntz");

    const simpsonsFamily = await fs.readFile("simpsonsFamily.json", "utf8");
    const parsedSimpsons = JSON.parse(simpsonsFamily);

    parsedSimpsons.push(nelson);

    await fs.writeFile("./simpsonsFamily.json", JSON.stringify(parsedSimpsons));

    console.log(`${nelson.name} agora faz parte da família Simpson!`);
  } catch (err) {
    console.log(err.message);
  }
};

// addNelsonToSimpsonFamily();

const addMaggieToSimpsonFamily = async () => {
  try {
    const data = await fs.readFile(simpsons, "utf8");
    const parsedData = JSON.parse(data);

    const maggie = parsedData.find(({ name }) => name === "Maggie Simpson");

    const simpsonFamily = await fs.readFile("simpsonsFamily.json", "utf8");
    const parsedSimpsons = JSON.parse(simpsonFamily);

    const simpsonsFile = parsedSimpsons.filter(
      ({ name }) => name !== "Nelson Muntz"
    );

    simpsonsFile.push(maggie);

    await fs.writeFile("./simpsonsFamily.json", JSON.stringify(simpsonsFile));

    console.log(`${maggie.name} foi adicionada a família Simpson`);
  } catch (err) {
    console.log(err.message);
  }
};

// addMaggieToSimpsonFamily();

const createFiles = async () => {
  const fileNames = ["Finalmente", "estou", "usando", "Promise.all", "!!!"];

  const promiseFiles = [];
  fileNames.forEach((file, index) => {
    const newFile = fs.writeFile(`file${index + 1}.txt`, `${file}`, "utf8");
    promiseFiles.push(newFile);
  });

  const allFiles = [];
  promiseFiles.forEach((_, index) => {
    allFiles.push(fs.readFile(`file${index + 1}.txt`, "utf8"))
  });

  const fileAllText = await Promise.all(allFiles);
  
  await fs.writeFile('fileAll.txt', fileAllText.join(' '));

  console.log(`Arquivo fileAll.txt criado com sucesso!`);

};

createFiles();
