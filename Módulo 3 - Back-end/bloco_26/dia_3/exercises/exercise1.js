const positiveOrNegative = (num) => {
	if (num === 0) return 'neutro';
	if (num > 0) return 'positivo';
	if (num < 0) return 'negativo';
	if (isNaN(num)) return 'por favor, insira um número';
};

// exercícios 2 e 3 foram fetios no commit anterior;

module.exports = positiveOrNegative;
