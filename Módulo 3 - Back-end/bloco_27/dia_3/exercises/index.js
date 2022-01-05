const express = require('express');
const bodyParser = require('body-parser');
const router = require('./controllers/productController')

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./controllers/productController'));

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
