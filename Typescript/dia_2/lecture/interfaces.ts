// Crie uma interface cujo objeto represente um Automóvel.
interface AutoMobile {
  brand: string;
  color: string;
  price: number;
  info(): string;
}

const fiesta: AutoMobile = {
  brand: 'Ford',
  color: 'Black',
  price: 360000,
  info(): string {
    return `Automobile info: Brand: ${this.brand}, Color: ${this.color}, Price: ${this.price}`;
  }
}

console.log(fiesta.info());

// Crie uma interface cujo objeto represente um Felino.
interface Feline {
  name: string;
  race: string;
  origin: string;
}

const felina: Feline = {
  name: 'Manchada',
  race: 'Onça-pintada',
  origin: 'Brasil'
}

console.log(felina);

// Crie uma interface cujo objeto represente uma Aeronave.
interface AeroPlane {
  model: string,
  brand: string,
  seats: number,
  fly(destination: string): string;
}

const areoPlane1: AeroPlane = {
  model: 'Boeing 767',
  brand: 'Boeing',
  seats: 375,
  fly(destination): string {
    return `${this.model} is on its way to ${destination}`
  }
}

console.log(areoPlane1);
console.log(areoPlane1.fly('Bermuda Triangle'));

