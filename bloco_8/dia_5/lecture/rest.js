// Nos exemplos abaixo o ...args é o ...rest, assunto que estou estudando

function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { }, 'Mais um parâmetro')); // Você passou 4 parâmetros para a função.

// -----------------------------------------------------------------

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60, 10)); // 88