"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// ./index.ts
const Exercise = __importStar(require("./exercises"));
console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);
console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangleArea(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangleArea(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangleArea(10, 25)}cm²`);
console.log(`Quadrado de lado 10cm: ${Exercise.squareArea(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.squareArea(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.squareArea(10)}cm²`);
console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangleArea(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangleArea(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangleArea(10, 25)}cm²`);
console.log(`A área de um losango que tem d1 = 32cm e d2 = 18cm é: ${Exercise.diamondArea(32, 18)}`);
console.log(`A área de um losango que tem d1 = 200cm e d2 = 50cm é: ${Exercise.diamondArea(200, 50)}`);
console.log(`A área de um losango que tem d1 = 75cm e d2 = 25cm é: ${Exercise.diamondArea(75, 25)}`);
console.log(`A área de um trapézio que tem B = 100cm, b = 70cm e altura = 50cm; é: ${Exercise.trapezeArea(32, 18, 50)}`);
console.log(`A área de um trapézio que tem B = 75cm, b = 50cm e altura = 35cm; é: ${Exercise.trapezeArea(75, 50, 35)}`);
console.log(`A área de um trapézio que tem B = 150cm, b = 120cm e altura = 80cm; é: ${Exercise.trapezeArea(150, 120, 80)}`);
console.log(`A área de um círculo de raio igual 25cm é: ${Exercise.circleArea(25)}`);
console.log(`A área de um círculo de raio igual 100cm é: ${Exercise.circleArea(100)}`);
console.log(`A área de um círculo de raio igual 12,5cm é: ${Exercise.circleArea(12.5)}`);
