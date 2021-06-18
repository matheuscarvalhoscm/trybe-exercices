//  link que me ajudou https://codepen.io/juliogcampos/pen/BzdjwY

const button = document.getElementById('button');
let counter = document.getElementById('counter');

let clickCount = 0;
counter.innerHTML = clickCount;

button.addEventListener('click', () => {
    
    counter.innerHTML = clickCount += 1;   
    if (clickCount > 10) {
        alert('CHEGAR DE CLICAR');
        counter.style.color = 'red';
    } 
}
)

