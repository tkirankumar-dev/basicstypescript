"use strict";
;
var pizzaInfo;
function createPizza(name, sizes) {
    return {
        name: name,
        sizes: sizes
    };
}
pizzaInfo = createPizza('Peperroni', ['small', 'medium']);
console.log(pizzaInfo);
var pizzaExt;
function createPizzaExt(name, sizes) {
    return {
        name: name,
        sizes: sizes,
        getAvailableSizes: function () {
            return this.sizes;
        }
    };
}
pizzaExt = createPizzaExt('Peperroni', ['small', 'medium']);
console.log(pizzaExt);
console.log(pizzaExt.getAvailableSizes());
var tshirt;
function addTShirt(brand, sizes) {
    return {
        brand: brand,
        sizes: sizes,
        getAvailableTShirtSizes: function () {
            return this.sizes;
        }
    };
}
tshirt = addTShirt('Max', ['small', 'medium']);
console.log(tshirt);
var shirt;
function availableShirts(brand, sizes) {
    return {
        brand: brand,
        sizes: sizes,
        getAvailableShirtSizes: function () {
            return this.sizes;
        }
    };
}
shirt = availableShirts('Max', ['small', 'medium', 'large']);
shirt.quantity = 5;
console.log(shirt);
var customer;
function customerDetails(name, types) {
    return {
        name: name,
        types: types,
        getCustomerTypes: function () {
            return this.types;
        }
    };
}
customer = customerDetails('Kiran', ['gold', 'silver']);
customer.visits = 2;
customer[1] = "Kumar";
customer[2] = "Vijay";
console.log(customer);
