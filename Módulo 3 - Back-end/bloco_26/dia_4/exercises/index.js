const express = require('express');
const bodyParser = require('body-parser');

const pingMiddleware = require('./middlewares/pingMiddleware');

const port = 3030;
const app = express();
app.use(bodyParser.json());

app.get('/ping', pingMiddleware);

app.listen(port, () => console.log(`App rodando na porta: ${port}`));
