const fs = require('fs').promises;

const simpsons = 'simpsons.json'

const getSimpsonId = async (req, res, next) => {
  const { id } = req.params;
  const readSimpsons = await fs.readFile(simpsons, 'utf-8');

  const parsedSimpsons = JSON.parse(readSimpsons);
  
  const getById = parsedSimpsons.find((simpson) => simpson.id == id); 
  console.log(getById);

  if (!getById) return res.status(404).json({ message: 'simpson not found' });

  return res.status(200).json(getById);
}

module.exports = getSimpsonId;
