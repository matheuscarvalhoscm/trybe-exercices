"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circleArea = exports.trapezeArea = exports.diamondArea = exports.rectangleArea = exports.squareArea = exports.triangleArea = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
const greeter = (name) => {
    return `Olá ${name}`;
};
exports.greeter = greeter;
const personAge = (name, age) => {
    return `${name} tem ${age} anos!`;
};
exports.personAge = personAge;
const add = (x, y) => {
    return x + y;
};
exports.add = add;
const sumArray = (numbers) => {
    return numbers.reduce(exports.add, 0);
};
exports.sumArray = sumArray;
const triangleArea = (base, height) => {
    return (base * height) / 2;
};
exports.triangleArea = triangleArea;
const squareArea = (side) => {
    return side ** 2;
};
exports.squareArea = squareArea;
const rectangleArea = (base, height) => {
    return base * height;
};
exports.rectangleArea = rectangleArea;
const diamondArea = (d1, d2) => {
    return (d1 * d2) / 2;
};
exports.diamondArea = diamondArea;
const trapezeArea = (b1, b2, height) => {
    return ((b1 + b2) * height) / 2;
};
exports.trapezeArea = trapezeArea;
const circleArea = (radius) => {
    const PI = 3.1415926535898;
    return (PI * (radius ** 2)).toFixed(2);
};
exports.circleArea = circleArea;
