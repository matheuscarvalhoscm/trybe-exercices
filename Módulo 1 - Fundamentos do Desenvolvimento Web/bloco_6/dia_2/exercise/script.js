const bodyElement = document.querySelector('body');
const createDiv = document.createElement('div');
const statesParent = document.getElementById('input-state');

const brStates = {
    'AC': 'Acre',
    'AL': 'Alagoas',
    'AP': 'Amapá',
    'AM': 'Amazonas',
    'BA': 'Bahia',
    'CE': 'Ceará',
    'DF': 'Distrito Federal',
    'ES': 'Espírito Santo',
    'GO': 'Goiás',
    'MA': 'Maranhão',
    'MT': 'Mato Grosso',
    'MS': 'Mato Grosso do Sul',
    'MG': 'Minas Gerais',
    'PA': 'Pará',
    'PB': 'Paraíba',
    'PR': 'Paraná',
    'PE': 'Pernambuco',
    'PI': 'Piauí',
    'RJ': 'Rio de Janeiro',
    'RN': 'Rio Grande do Norte',
    'RS': 'Rio Grande do Sul',
    'RO': 'Rondônia',
    'RR': 'Roraima',
    'SC': 'Santa Catarina',
    'SP': 'São Paulo',
    'SE': 'Sergipe',
    'TO': 'Tocantins'
}

function addStates() {
 for (let key in brStates){
   let option = document.createElement('option');
   option.value = key;
   option.innerHTML = brStates[key];
   statesParent.appendChild(option);
    }
}

addStates();

// aqui, quando eu clicar no botão de submit eu preciso fazer com que ele crie uma div com todos as informaçõesq que o usuário inseriu no formulário
// o código abaixo é apenas um teste;
const sendButton = document.querySelector('#submit-info');
sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    const inputs = document.querySelector('input');
    createDiv.className = 'container'
    createDiv.style.backgroundColor = 'white';
    createDiv.style.border = '1px solid black';
    createDiv.style.width = '100%';
    createDiv.style.height = '100px';
    createDiv.innerHTML = inputs.value;   
    bodyElement.appendChild(createDiv);
});