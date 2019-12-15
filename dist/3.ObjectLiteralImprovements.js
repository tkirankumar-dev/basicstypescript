"use strict";
var pizza = {
    name: "Pepperoni",
    price: 15,
    /*
      getName(){
          return this.name;
      }*/
    getName: function () {
        return this.name;
    }
};
console.log(pizza.getName());
var toppings = ["thincrust"];
var order = { pizza: pizza, toppings: toppings };
//'=' can only be used in an object literal property inside a destructuring assignment
// We should be using : instead of =
var order1 = {
    pizza: pizza,
    toppings: toppings
};
console.log(order);
console.log(order1);
function createOrder(pizza, toppings) {
    return { pizza: pizza, toppings: toppings };
}
console.log(createOrder(pizza, toppings));
