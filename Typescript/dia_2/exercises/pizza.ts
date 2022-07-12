// Exercício 6: Crie uma interface que represente uma pizza, ela deve conter:

type Slices = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: Slices;
}

const Calabresa: Pizza = {
  flavor: 'Calabresa',
  slices: 8,
}

const Marguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6,
}

const Nutela: Pizza = {
  flavor: 'Nutela',
  slices: 4,
}

// Exercício 7: Vamos agora extender nossa interface Pizza com novos tipos de pizza. São eles:
type CommonFlavors = 'Calabresa' | 'Frango' | 'Pepperoni';
interface CommonPizzas extends Pizza {
  flavor: CommonFlavors;
  slices: Slices;
}

type VegetarianFlavors = 'Marguerita' | 'Palmito' | 'Cogumelo';
interface VegetarianPizzas extends Pizza {
  flavor: VegetarianFlavors,
  slices: Slices;
}

type SweetFlavors = 'Nutela' | 'Goiaba' | 'Marshmallow';
interface SweetPizzas extends Pizza {
  flavor: SweetFlavors;
  slices: 4;
}


const commonPizza1: CommonPizzas = {
  flavor: 'Calabresa',
  slices: 8,
}

const commonPizza2: CommonPizzas = {
  flavor: 'Frango',
  slices: 6,
}

const commonPizza3: CommonPizzas = {
  flavor: 'Pepperoni',
  slices: 4,
}

const vegetarianPizza1: VegetarianPizzas = {
  flavor: 'Marguerita',
  slices: 8,
}

const vegetarianPizza2: VegetarianPizzas = {
  flavor: 'Cogumelo',
  slices: 6,
}

const sweetPizza: SweetPizzas = {
  flavor: 'Nutela',
  slices: 4,
}
