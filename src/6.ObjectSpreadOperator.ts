const pizzaVal ={
    name: 'Pepperoni'
}
const toppingsVal = ['thincrust'];
//Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.

const target = { a: 1, b: 5 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

const javaScriptOrder = Object.assign(pizzaVal, {toppingsVal});

const spreadOpertorOrder = {
    ...pizzaVal,
    toppingsVal
};
console.log(spreadOpertorOrder);
console.log(javaScriptOrder);