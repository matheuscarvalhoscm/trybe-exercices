const cepModel = require('../models/cepModel');

const getByCep = async (cep) => {
  const cepRegex = /\d{5}-\d{3}/;

  if (!cepRegex.test(cep)) return null;

  return cepModel.getByCep(cep);
};

module.exports = {
  getByCep,
}
