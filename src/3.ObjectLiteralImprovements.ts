const pizza = {
  name: "Pepperoni",
  price: 15,
  /*
    getName(){
        return this.name;
    }*/
  getName: function() {
    return this.name;
  }
};
console.log(pizza.getName());
const toppings = ["thincrust"];
const order = { pizza, toppings };
//'=' can only be used in an object literal property inside a destructuring assignment
// We should be using : instead of =
const order1 = {
  pizza: pizza,
  toppings: toppings
};
console.log(order);
console.log(order1);
function createOrder(
  pizza: { name: string; price: number },
  toppings: string[]
) {
  return { pizza, toppings };
}
console.log(createOrder(pizza, toppings));
