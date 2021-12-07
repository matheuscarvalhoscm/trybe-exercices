const fs = require("fs").promises;

const simpsons = "simpsons.json";

const registerSimpson = async (req, res, next) => {
  const { id, name } = req.body;

  const readSimpsons = await fs.readFile(simpsons, "utf8");
  const parsedSimpsons = JSON.parse(readSimpsons);

  const verifyExistentId = parsedSimpsons.some(
    (simpson) => parseInt(simpson.id) === parseInt(id)
  );

  if (verifyExistentId)
    return res.status(409).json({ message: "id already exists" });

  parsedSimpsons.push({ id, name });

  fs.writeFile(simpsons, JSON.stringify(parsedSimpsons));

  return res.status(204).end();
};

module.exports = registerSimpson;
