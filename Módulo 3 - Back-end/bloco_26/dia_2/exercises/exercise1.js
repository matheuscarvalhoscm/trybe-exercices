const countNumbers = (num1, num2, num3) => {
    const promise = new Promise((resolve, reject) => {
      // ref pro isNaN: https://mkyong.com/javascript/check-if-variable-is-a-number-in-javascript/
      if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
          reject(new Error(`Informe apenas números`));
      } else if ((num1 + num2) * num3 < 50) {
        reject(new Error(`Valor muito baixo`));
      }

      resolve((num1 + num2) * num3)
    }
  );

  return promise
}

countNumbers(0, 10, 5)
  .then(res => console.log(`O valor obtido foi: ${res}`))
  .catch(err => console.log(err.message));
