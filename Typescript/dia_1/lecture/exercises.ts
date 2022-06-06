export const greeter = (name: string) => {
  return `Olá ${name}`;
};

export const personAge = (name: string, age: number) => {
  return `${name} tem ${age} anos!`;
};

export const add = (x: number, y: number) => {
  return x + y;
};

export const sumArray = (numbers: number[]): number => {
  return numbers.reduce(add, 0);
};

export const triangleArea = (base: number, height: number) => {
  return (base * height) / 2;
};

export const squareArea = (side: number) => {
  return side ** 2;
};

export const rectangleArea = (base: number, height: number) => {
  return base * height;
};

export const diamondArea = (d1: number, d2: number) => {
  return (d1 * d2) / 2;
};

export const trapezeArea = (b1: number, b2: number, height: number) => {
  return ((b1 + b2) * height) / 2;
};

export const circleArea = (radius: number) => {
  const PI: number = 3.1415926535898;
  return (PI * (radius ** 2)).toFixed(2);
};
