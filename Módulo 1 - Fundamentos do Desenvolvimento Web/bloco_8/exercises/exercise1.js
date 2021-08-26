const createPerson = (nomeCompleto) => {
    const newPerson = {
    nomeCompleto,
    //como fiz para "repor" todos os espaços https://www.designcise.com/web/tutorial/how-to-fix-replaceall-is-not-a-function-javascript-error
    email: `${nomeCompleto.toLowerCase().replace(/ /g, '_')}@trybe.com`,
    }; return newPerson;
}

const newEmployees = (func) => {
    const employees = {
      id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };


  console.log(newEmployees(createPerson));
