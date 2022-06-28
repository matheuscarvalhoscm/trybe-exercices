// Crie uma classe cujo objeto represente um Cachorro.
class Dog {
  name: string;
  age: number;
  race: string;

  constructor(name: string, age: number, race: string) {
    this.name = name;
    this.age = age,
    this.race = race;
  }

  bark(): void {
    console.log(`${this.name} is barking!`);
  }

  eat(): void {
    console.log(`${this.name} is eating`);
  }
}

const Thor = new Dog('Thor', 5, 'Golden Retriever');
console.log(Thor);
Thor.bark();
Thor.eat();

// Crie uma classe cujo objeto represente uma Casa.
class House {
  color: string;
  neighborhood: string;
  price: number;
  isAvailable?: boolean;

  constructor(color: string, neighborhood: string, price: number, isAvailable: boolean) {
      this.color = color;
      this.neighborhood = neighborhood;
      this.price = price;
      this.isAvailable = isAvailable;
  }

  buy(): void {
    this.isAvailable ? console.log(`You can buy that how for R$ ${this.price}.`)
    : console.log(`I'm sorry, this house isn't for sale.`);
  }
}

const house1 = new House('Yellow', 'Jd. das Nações', 100000, false);
const house2 = new House ('Black', 'Jd. das Nações', 300000, true)
house1.buy();
house2.buy();


class Flight {
  origin: string;
  destination: string;
  date: Date;

  constructor(origin: string, destination: string, date: Date) {
    this.origin = origin;
    this.destination = destination;
    this.date = date;
  }
}

const myFlight = new Flight('Brasil', 'Canadá', new Date('2022-12-01'));
console.log(myFlight);
