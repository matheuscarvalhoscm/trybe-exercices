// Crie uma Enum que represente os dias da semana. Seu valor deve ser número do dia.
enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
};

console.log(DaysOfWeek.Saturday);

// Crie uma Enum que represente as cores do arco iris. Seu valor deve ser o nome das cores em português.
enum Rainbow {
  Red = 'Vermelho',
  Orange = 'Laranja',
  Yellow = 'Amarelo',
  Green = 'Verde',
  Blue = 'Azul',
  NavyBlue = 'Azul-marinho',
  Purple = 'Roxo',
}

console.log(Rainbow.Purple);

// Crie uma Enum que represente as ações: salvar, imprimir, abrir, visualizar e fechar. Seu valor deve ser do tipo inteiro.
enum Comands {
  Save = 100,
  Print = 200,
  Open = 300,
  Read = 400,
  Close = 500,
}

console.log(Comands.Read);

