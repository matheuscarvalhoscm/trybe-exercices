// const myExpenses = [
//     {
//       gym: 99,
//     },
//     {
//       ifood: 200,
//     },
//     {
//       phone: 60,
//     },
//     {
//       internet: 100,
//     },
//   ];
  
//   const myIncome = 1000;
  
//  const sumExpenses =  MyExpenses => { 
//  const allExpenses = myExpenses.map((expense) => Object.values(expense)[0]);
//  const total = allExpenses.reduce((acc, curr) => acc + curr , 0);
//  return total;
//  }

//  const monthlyBudget = (myIncome, myExpenses, sumExpenses) => {

//     const totalExpenses = sumExpenses(myExpenses);
//     const totalAfterExpenses = myIncome - totalExpenses;
  
//     console.log(`Balanço do mês:
// Recebido: R$${myIncome},00
// Gasto: R$${totalExpenses},00
// Saldo: R$${totalAfterExpenses},00 `);
//   };

//   monthlyBudget(myIncome, myExpenses, sumExpenses);
 

// const assert = require('assert');

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const getUser = () => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
// //   return userToReturn;
// };

// // resolvido mas acredito que não fiz como foi solicitado. O exercício pede pra COMPLETAR A CHAMADA DA FUNÇÃO e eu alterei a função em si;
// assert.strictEqual(userFullName(getUser()), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
// assert.strictEqual(userNationality(getUser()), "Ivan is Russian"); // complete a chamada da função de getUser

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callBack) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    return console.log(callBack(user));
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo