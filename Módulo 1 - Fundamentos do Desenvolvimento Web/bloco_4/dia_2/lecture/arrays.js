// arrays são variáveis que guardam mais de uma informação
// ex:

let pizzas = ['Mussarela' , 'Brócolis com Bacon' , 'Margherita'];
let preços = [15.90 , 12.90 , 18.90];


pizzas.push('Portuguesa'); // adiciona um valor ao array
console.log(preços.sort());  // escreve os elementos da array em ordem alfabética/numérica
console.log(pizzas[1]); //mostra o elemento que esta na posição/índice indicada dentro dos [].
// neste exemplo é mostrado o sabor de pizza 'Brócolis com Bacon' pois o índice/posição dele dentro do array é 1.


// a função for é um laço de repetição. ele é utilizado em vários casos.
// neste exemplo ele é utilizado para escrever todos os elemento dentro do array pizzas

for (let i = 0 /* contador (executado apenas uma vez)*/; i < pizzas.length /*condição de parada*/; i++ /*incremento*/){
    console.log(pizzas[i]);
}


let taskList = ['Ir ao dentista' , 'Cortar cabelo' , 'Fazer almoço' , 'Estudar' , 'Descansar'];

console.log(taskList);

// função para procurar o primeiro elemento do Array
let searchForFirstTask = taskList[0];
console.log(searchForFirstTask);

//função pra procurar o último elemento do Array
let searchForLastTask = taskList[taskList.length-1];
console.log(searchForLastTask);

// adiciona um novo elemento no fim do array
taskList.push('Enrolar para dormir'); 
console.log(taskList);

// adiciona um novo elemento no início do array
taskList.unshift('Acordar');
console.log(taskList);

// remove o último elemento do array
taskList.pop();
console.log(taskList);

// remove o primeiro elemento do array
taskList.shift();
console.log(taskList); 

// procura o índice de um elemento dentro do array
let indexOfTask = taskList.indexOf('Estudar');
console.log(indexOfTask);



// exercícios:

//1 . Obtenha o valor "Serviços" do array menu 
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//2. Procure o índice do valor "Portfólio" do array menu 
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

//3. Adicione o valor "Contato" no final do array menu 
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');

console.log(menu);

