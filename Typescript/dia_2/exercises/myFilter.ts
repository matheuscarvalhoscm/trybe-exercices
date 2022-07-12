// Exercício 8: Usando generics e os demais conceitos aprendidos em TypeScript recrie a função 
// filter, nomeie-a como myFilter.

type myFilterCallback<A> = (item: A, index?: number, arr?: A[]) => boolean;

const myFilter = <A>(arr: A[], callback: myFilterCallback<A>): A[] => {
  const resultArray: A[] = [];
  
  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index])) {
      resultArray.push(arr[index]);
    }
  }

  return resultArray;
};

console.log(myFilter([1, 2, 3, 4, 5], (item) => item !== 3));

console.log(myFilter(['a', 'e', 'i', 'o', 'u'], (item) => item !== 'i'));

