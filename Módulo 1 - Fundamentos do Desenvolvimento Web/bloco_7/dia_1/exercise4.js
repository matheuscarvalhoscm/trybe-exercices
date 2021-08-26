let mySkills = ['HTML', 'CSS', 'JavaScript', 'UX Design', 'Inglês'];

const searchX = string => {
    let sptStrg = string.split (" ");

    for (let index = 0; index < sptStrg.length; index += 1) {
        if (sptStrg[index] === 'x') {
            sptStrg[index] = 'Bebeto';
        }
    } return sptStrg.join(' ');
}

console.log(`A nova string é: ${searchX('Tryber x aqui!')}`);