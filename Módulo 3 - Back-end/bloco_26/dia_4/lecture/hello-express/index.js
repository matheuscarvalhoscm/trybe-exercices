// const express = require("express");

// const app = express();

// const handleHelloWorldRequest = (req, res) => {
//   res.status(200).send("Hello Express!");
// };

// app.get("/hello", handleHelloWorldRequest);

// app.listen(3001, () => {
//   console.log("Aplicação ouvindo na porta 3001");
// });

/* index.js */
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const recipes = [
  { id: 1, name: "Lasanha", price: 40.0, waitTime: 30 },
  { id: 2, name: "Macarrão a Bolonhesa", price: 35.0, waitTime: 25 },
  { id: 3, name: "Macarrão com molho branco", price: 35.0, waitTime: 25 },
  { id: 4, name: "Arroz à piamontese", price: 50.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: "Refrigerante Lata", price: 5.0 },
  { id: 2, name: "Refrigerante 600ml", price: 8.0 },
  { id: 3, name: "Suco 300ml", price: 4.0 },
  { id: 4, name: "Suco 1l", price: 10.0 },
  { id: 5, name: "Cerveja Lata", price: 4.5 },
  { id: 6, name: "Água Mineral 500 ml", price: 5.0 },
];

app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });

  return res.status(201).json({ message: 'Drink created successfully!' });
});


app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if(drinkIndex < 0 ) return res.status(404).json({ message: 'Drink not found!' });

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price }

  return res.status(204).end();
})


app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
})


app.get("/recipes/search", (req, res) => {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipe = recipes.filter(
    (r) =>
      r.name.includes(name) &&
      r.price < parseInt(maxPrice) &&
      r.price >= parseInt(minPrice)
  );

  return res.status(200).json(filteredRecipe);
});

app.get('/recipes/search', (req, res) => {
  const { name } = req.query;
  const filteredDrink = drinks.filter((d) => d.name.includes(name));

  return res.status(200).json(filteredDrink);
})

app.get("/recipes", (req, res) => {
  const sortedRecipes = recipes.sort((a, b) => (a.name > b.name && 1) || -1);
  return res.json(sortedRecipes);
});

app.get("/drinks", (req, res) => {
  const sortedDrinks = drinks.sort((a, b) => (a.name > b.name && 1) || -1);
  return res.json(sortedDrinks);
});

app.get("/recipes/:id", (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json("Recipe Not Found");

  res.status(200).json(recipe);
});

app.get("/drinks/:id", (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id));

  if (!drink) return res.status(404).json("Drink Not Found");

  res.status(200).json(drink);
});


app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
});
