const express = require('express');
const cepController = require('./controllers/cepController'); 

const app = express();

const PORT = 3000;

app.get('/ping', (_req, res) => {
  return res.status(200).json({ message: 'pong' })
});

app.get('/cep/:cep', cepController.getByCep);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
