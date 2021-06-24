const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyAnswer = (corret, wrong) => {
	let count = 0;
	for (index = 0; index < corret.length; index += 1) {
		if (wrong[index] === corret[index]); {
			console.log(wrong[index])
		} 
	} return count;
}

console.log(verifyAnswer(rightAnswers, studentAnswers));