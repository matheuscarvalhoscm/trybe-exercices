const readlineSync = require('readline-sync');

// Exercício 1: Crie uma enum que represente os meses do ano.
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

// Exercício 2: Crie uma enum que represente as estações climáticas do ano.
enum Seasons {
  Fall = 1,
  Winter,
  Spring,
  Summer,
}

// Exercício 3: Utilizando as enums criadas nos exercícios anteriores e o pacote readline-sync, que cria uma interface para ler o que for inserido no console (mais informações, veja a documentação), crie um programa que quando a pessoa usuária escolher o mês do ano e o hemisfério no terminal:

const NH = {
  Fall: [Months.September, Months.October, Months.November, Months.December],
  Winter: [Months.December, Months.January, Months.February, Months.March],
  Spring: [Months.March, Months.April, Months.May, Months.June],
  Summer : [Months.June, Months.July, Months.August, Months.September],
}

const SH = {
  Fall: [Months.March, Months.April, Months.May, Months.June],
  Winter: [Months.June, Months.July, Months.August, Months.September],
  Sprint: [Months.September, Months.October, Months.November, Months.December],
  Summer: [Months.December, Months.January, Months.February, Months.March],
}

const findByHemisphere = (seasons: object, month: number): Array<string> => {
  let result: Array<string> = []; 
  Object.entries(seasons)
      .map((seasons) => {
        if (seasons[1].includes(month)) result.push(seasons[0])
      }
  );
  return result;
}

const getSeason = (): string => {
  const month = Number(readlineSync.question('Write the number of the month you want to know the season: '));
  const hemisphere = readlineSync.question('Which hemisphere you want?\n (a) North\n (b) South \n');
  let currentSeason: Array<string> =  [];

  if (hemisphere === 'a') currentSeason = findByHemisphere(NH, month);
  else if (hemisphere === 'b') currentSeason = findByHemisphere(SH, month);

  if (currentSeason.length > 1) return `${Months[month]} is on ${currentSeason[0]} and ${currentSeason[1]} seasons!`
  return `${Months[month]} is on ${currentSeason} season!`;
}

console.log(getSeason());
