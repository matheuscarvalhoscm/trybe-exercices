// calcula INSS e IR

let salary = 3000;
let inss = 0;
let baseSalary = 0;

// INSS

if (salary <= 1556.94) {
    inss = salary * 0.08
    console.log('O valor de INSS é R$' + inss);
} else if (salary >= 1556.95 && salary <= 2594.92) {
    inss = salary * 0.09;
    console.log('O valor de INSS é R$' + inss);
} else if (salary >= 2594.93 && salary <= 5189.82) {
    inss = salary * 0.11;
    console.log('O valor de INSS é R$' + inss);
} else {
    inss = 570.88;
    console.log('O valor do INSS é de R$' + 570.88)
} 


// IR

/*
if (salary <= 1903.98) {
    console.log('Isento de IR');
} else if (salary >= 1903.99 && salary <= 2826.65) {
    console.log('O valor de IR é R$' + salary * 0.075 + '');
} else if (salary >= 2594.93 && salary <= 5189.82) {
    console.log('O valor de IR é R$' + salary * 0.11);
} else {
    console.log('O valor do IR é de R$' + 570.88)
}
*/
