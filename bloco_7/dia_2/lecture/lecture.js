// //  parte 1 (adicionando novas chaves)
// const customer = {  
// 	firstName: 'Matheus',
// 	lastName: 'Carvalho',
// 	age: 25,
// 	job: 'Tryber'
// }

// // cria função que recebe três parametrôs
// const addInfo = (objt, key, value) => {
// 	// cria variavel para adicionar uma chave;
// 	let newKey = key;
// 	// cria variavel para adicionar um valor a chave
// 	objt[newKey] = value;
// }

// addInfo(customer, 'fullName', `${customer.firstName} ${customer.lastName}`);
// addInfo(customer, 'birthday', '03/10/1995');
// addInfo(customer, 'placeOfBirth', 'Paraty');
// addInfo(customer, 'matrialStatus', 'Solteiro');
// console.log(customer);

// // -----------------------------------------------------------------------

// //  parte 2 (keys) 
// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };
  
// const showSkill  = objt => {
// 	// cria variável para pegar as chaves do objt e outra variavel para guardar os valores das chaves 
// 	let skillsKey = Object.keys(objt);
// 	let skillsvalue = Object.values(objt);
// 	// cria loop para pegar o indice da variavel que contém as chaves
// 	for (let index in skillsKey)
// 	// imprime as chaves em cada indice e os valores das chaves em cada indice.
// 	console.log(`${skillsKey[index]}, Nível: ${[skillsvalue[index]]}`)
// }

// showSkill(student1);
// console.log(' ')
// showSkill(student2);

// // -----------------------------------------------------------------------

// // parte 3 (values) 

// // NÃO TEVE EXERCÍCIO PRATICO MAS EU CONSEGUI UTILIZAR O Object.values() no exercício anterior;

// // -----------------------------------------------------------------------

// //  parte 4(entries) demonstração:

// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);

// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };


// // -----------------------------------------------------------------------

// parte 5 (assign)

