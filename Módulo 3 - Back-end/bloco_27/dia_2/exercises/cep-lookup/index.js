const express = require('express');

const app = express();

const PORT = 3000;

app.get('/ping', (_req, res) => {
  return res.status(200).json({ message: 'pong' })
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
