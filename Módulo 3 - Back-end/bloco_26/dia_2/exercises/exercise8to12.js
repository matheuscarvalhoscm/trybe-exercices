const returnNumber = (num) => {
  return new Promise((resolve, reject) => {
    if (num % 3 === 0 && num % 5 === 0) {
      resolve(console.log(`FizzBuzz`));
    } else if (num % 3 === 0) {
      resolve(console.log(`Fizz`));
    } else if (num % 5 === 0) {
      resolve(console.log(`Buzz`));
    }

    reject(num);
  });
};

const fizzBuzz = async (num) => {
  try {
    const fizzBuzz = await returnNumber(num)
    return fizzBuzz
  } catch (err) {
    console.log(err)
  }
}

fizzBuzz(30);
