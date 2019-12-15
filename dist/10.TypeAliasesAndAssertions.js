"use strict";
// union type and default literanl
// Cannot assign to 'pizzaSizeVal' if it is a constant.
var pizzaSizeVal = 'medium';
// Arrow function
var selectedSize = function (x) {
    pizzaSizeVal = x;
};
selectedSize('medium');
console.log(pizzaSizeVal);
var pizzaConst = { name: 'Blazing Inferno', toppings: 5 };
var serialized = JSON.stringify(pizzaConst);
function getNameFromJSON(obj) {
    // return (<Pizza>JSON.parse(obj)).name; // Old Way
    return JSON.parse(obj).name;
}
console.log(getNameFromJSON(serialized));
