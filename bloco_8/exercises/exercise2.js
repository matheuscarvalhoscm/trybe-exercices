
const verifyNumber = (prizeDraw, number) => {
    if (prizeDraw === number) {
        console.log(`Parabéns você ganhou`);
    }  else{ 
        return console.log(`Tente novamente`)}
}

const prizeDraw = (num, func) => {
    const prizeNumber = (Math.floor(Math.random() * 5) + 1);
    return func(num, prizeNumber);
}


prizeDraw(1, verifyNumber);
