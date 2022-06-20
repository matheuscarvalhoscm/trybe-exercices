// Crie um type para um objeto que represente um pássaro.
type Birds = {
  specie: string;
  color: string;
  origin: string;
}

const printBird = (param: Birds): void => {
  console.log(`Características do pássaro: ${param.specie} - ${param.color} - ${param.origin}`);
};

printBird({ specie: 'Arara', color: 'Azul', origin: 'Brasil' });

// Crie um type que represente uma função que recebe 2 valores numéricos e retorna a soma dos dois.
type myFunction = (a: number, b: number) => number;

// Crie um type para um objeto que represente um endereço.
type Address = {
  street: string;
  number: number;
  city: string;
  state: string;
}
