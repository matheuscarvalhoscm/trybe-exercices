const positiveOrNegative = (num) => {
	if (num === 0) return 'neutro';
	if (num > 0) return 'positivo';
	if (num < 0) return 'negativo';
	if (isNaN(num)) return 'por favor, insira um número';
};

module.exports = positiveOrNegative;
