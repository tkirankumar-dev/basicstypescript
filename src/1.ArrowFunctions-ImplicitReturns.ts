const pizzas = [{ name: "Pepperonni", toppings: ["thincrust"] }];
/* // General example
const mappedPizzas = pizzas.map(function(pizza){
    return pizza.name.toUpperCase();
});
*/
/* // Arrow Function - Ignores the scope
const mappedPizzas = pizzas.map(pizza => {
    return pizza.name.toUpperCase();
});
*/
// Below is implicit Return
const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

console.log(mappedPizzas);
