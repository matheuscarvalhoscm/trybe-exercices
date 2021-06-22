const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui:
assert.strictEqual(typeof(myRemove), 'function');

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]); // 1;
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]); // 2;

let newArray = [5, 6, 7, 8]; // inicio 3;
myRemove(newArray, 5);
assert.deepStrictEqual(newArray, [5, 6, 7, 8]); // fim 3;

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5) [1, 2, 3, 4]); // 4;
