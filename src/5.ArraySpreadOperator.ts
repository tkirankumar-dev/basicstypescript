//Cannot redeclare block-scoped variable 'toppings'
//If we have same parameter declared in anyother ts file.. this error comes.
const topping = ['thincrust', 'chilli'];
const newtoppings = ['pepperoni'];
//Doesnot create referene and it creates copy
// ... are called Spread Attributes as the name represents it allows an expression to be expanded.
var parts = ['two', 'three'];
var numbers = ['one', ...parts, 'four', 'five']; // ["one", "two", "three", "four", "five"]
console.log(numbers);
const allToppings = [...topping, ...newtoppings];
const toppingsAll = [...newtoppings, ...topping];
console.log(allToppings);
console.log(toppingsAll);