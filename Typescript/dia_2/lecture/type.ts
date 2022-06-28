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

// Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.
type StateOfMatter = 'liquid' | 'solid' | 'gas';

// Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.
type CPF = string | number;

// Crie um type union que represente sistemas operacionais: linux, mac os ou windows.
type OperationalSystems = 'Linux' | 'MacOS' | 'Windows';

type Vowels = 'A' | 'E' | 'I' | 'O' | 'U';
