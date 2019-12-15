"use strict";
//Destructuring the object or rename the properties
var vPizza = {
    name: 'Pepperoni',
    toppings: ['thincrust']
};
function vorder(_a) {
    var pizzaName = _a.name, pizzaToppings = _a.toppings;
    return { pizzaName: pizzaName, pizzaToppings: pizzaToppings };
}
//If we put { } then only the vPizza object will take pizzaName as variable.. otherwise it will take complete object.
var pizzaName = vorder(vPizza).pizzaName;
console.log(pizzaName);
//Destructuring Array
var vtoppings = ['Pepperoni', 'Becon', 'Chilli'];
var firstTopping = vtoppings[0], secondTopping = vtoppings[1], thirdTopping = vtoppings[2];
console.log(firstTopping, secondTopping, thirdTopping);
function logToppings(_a) {
    var firstTopping = _a[0], secondTopping = _a[1], thirdTopping = _a[2];
    console.log(firstTopping, secondTopping, thirdTopping);
}
logToppings(vtoppings);
