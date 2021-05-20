// recebe peça de xadrez e retorna os movimentos

let peça1 = 'KING';
let peça2 = 'QUEEN'
let peça3 = 'BISHOP'
let peça4 = 'HORSE'
let peça5 = 'TOWER'
let peça6 = 'PAWN'

let peça = peça5;
let peças = peça.toLowerCase();

switch (peças) {
    case 'king':
        console.log('todas as direções');
        break;

    case 'queen':
        console.log('horizontais, verticais e diagonais');
        break;

    case 'bishop':
        console.log('diagonais');
        break;

    case 'horse':
        console.log('duas casa na horizontal e duas casa na vertical');
        break;

    case 'tower':
        console.log('vertical ou horizontal');
        break;

    case 'pawn':
        console.log('somente uma casa para frente');
        break;

        default:
            console.log('erro')
}