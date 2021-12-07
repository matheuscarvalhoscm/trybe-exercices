const fs = require('fs').promises;
const simpsons = 'simpsons.json'

const getSimpsonsMiddleware = async (req, res, next) => {
  const readSimpsons = await fs.readFile(simpsons, 'utf-8');
  return res.status(200).json(JSON.parse(readSimpsons));
}

module.exports = getSimpsonsMiddleware;
