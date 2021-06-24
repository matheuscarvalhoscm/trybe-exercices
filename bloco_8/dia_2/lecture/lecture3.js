//  ex 1

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  const some = arr.some((nome) => nome === name);
  return some;
}

console.log(hasName(names, 'Joca'))

//  ex 2

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    const every = arr.every((person) => person.age >= minimumAge);
    return every;
  }
  
  console.log(verifyAges(people, 18));