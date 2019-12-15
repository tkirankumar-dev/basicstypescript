//Pass any number of arguments into single variable
function sumAll(arr: any) {
  return arr.reduce((prev: any, next: any) => prev + next);
}

const sum = sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(sum);
// JavaScript array reduce function rather than being something specific to TypeScript.
// Function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
function sumAllExt(message: string, ...arr: any) {
  console.log(message); // argument [0]
  return arr.reduce((prev: any, next: any) => prev + next);
}
const sumExt = sumAllExt("Hello! ", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(sumExt);
