//Destructuring the object or rename the properties
const vPizza = {
    name: 'Pepperoni',
    toppings: ['thincrust']
};
function vorder({name: pizzaName, toppings: pizzaToppings}: any){
    return {pizzaName, pizzaToppings}
}
//If we put { } then only the vPizza object will take pizzaName as variable.. otherwise it will take complete object.
const {pizzaName} = vorder(vPizza);
console.log(pizzaName);

//Destructuring Array
const vtoppings = ['Pepperoni', 'Becon', 'Chilli'];
const [firstTopping, secondTopping, thirdTopping] = vtoppings;
console.log(firstTopping, secondTopping, thirdTopping);

function logToppings([firstTopping, secondTopping, thirdTopping]: any){
    console.log(firstTopping, secondTopping, thirdTopping);
}

logToppings(vtoppings);