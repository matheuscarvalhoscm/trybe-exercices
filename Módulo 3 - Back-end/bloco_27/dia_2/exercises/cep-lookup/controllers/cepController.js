const cepController = require('../services/cepService');

const getByCep = async (req, res) => {
  const { cep } = req.params;
  const cepResult = await cepController.getByCep(cep);

  if (!cepResult) return res.status(400).json({ 
      error: { 
        code: "invalidData", 
        message: "CEP inválido" 
      } 
    }
  );

  if (cepResult.length === 0) return res.status(404).json({ 
    error: { 
      code: "notFound",
      message: "CEP não encontrado" 
    } 
  });

  return res.status(200).json(cepResult);
};

module.exports = {
  getByCep,
}
