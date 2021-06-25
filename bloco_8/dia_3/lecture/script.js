const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const productsAndPrices = (listProducts, listPrices) => products.map((product, index) => (
  { [product]: listPrices[index]}  
)); 

const listProducts = productsAndPrices(products, prices);
console.log(listProducts);


