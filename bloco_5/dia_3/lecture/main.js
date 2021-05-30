const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');


// 1. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
//Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

divUm.addEventListener("click", addClass1);
divDois.addEventListener("click", addClass2);
divTres.addEventListener("click", addClass3);

function addClass1(){
  divUm.className = 'tech';
  divDois.className = 'none';
  divTres.className = 'none';
}
function addClass2(){
  divDois.className = 'tech';
  divUm.className = 'none';
  divTres.className = 'none';
}
function addClass3(){
  divTres.className = 'tech';
  divUm.className = 'none';
  divDois.className = 'none';
}




// 2. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
//com a classe 'tech';

function changeText() {
  let divchange = document.getElementsByClassName('tech');

}


// 3. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4. Que tal redirecionar para seu portifólio?

let link = document.getElementById('mySpotrybefy');
link.addEventListener("dblclick", redirect);

function redirect(){
 let portfolio = document.createElement('a');
 portfolio.href = 'https://matheuscarvalhoscm.github.io/';
 portfolio.target = '_blank';
 link.innerHTML = portfolio.innerHTML;
 portfolio.innerHTML = 'Meu top 3 do Spotrybefy';
 portfolio.style.textDecoration = 'none';
 link.appendChild(portfolio);
}


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;

let color = document.getElementById('mySpotrybefy');
color.addEventListener("mouseover", changeColor);
color.addEventListener("mouseout", originalColor);

function changeColor(event){
  color.style.color = 'yellow';
  console.log(event.target);
  console.log(event.type);
}
function originalColor(event){
  color.style.color = 'white';
  console.log(event.target);
  console.log(event.type);
}





/*
Segue abaixo um exemplo do uso de event.target:
*/


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
} 

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.