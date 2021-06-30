// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Jambo', 'Morango', 'Manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Creme de Leite', 'Chia', 'Canela'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));