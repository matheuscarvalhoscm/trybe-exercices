const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// ex 1
const addInfo = (objt, key, value) => {
	let newKey = key;
	objt[newKey] = value;
}

addInfo(lesson2, 'turno', 'noite');

// ex 2
const listObjtKeys = objt => console.log(`A chaves deste objeto são: ${Object.keys(objt)}`);
listObjtKeys(lesson1);

// ex 3
const objtLength = objt => console.log(`O tamanho desse objeto é: ${Object.keys(objt).length}`);
objtLength(lesson1);

// ex 4
const listObjtValues = objt => console.log(`A chaves deste objeto são: ${Object.values(objt)}`);
listObjtValues(lesson1);

// ex 5
const allLessons = ({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// ex 6
const totalOfStudents = (objt) => {
  let countStudents = 0;
  const getStudents = Object.keys(objt);
  for (value in getStudents) {
    countStudents += objt[getStudents[value]].numeroEstudantes;
  }
  return countStudents;
}

console.log(`O total de alunos é: ${totalOfStudents(allLessons)}`);

// ex 7
const getValueByNumber = (objt, position) => { console.log(`O valor desta chave é: ${Object.values(objt)[position]}`);
}
getValueByNumber(lesson2, 1);