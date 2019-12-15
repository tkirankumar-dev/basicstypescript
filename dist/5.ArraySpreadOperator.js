"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//Cannot redeclare block-scoped variable 'toppings'
//If we have same parameter declared in anyother ts file.. this error comes.
var topping = ['thincrust', 'chilli'];
var newtoppings = ['pepperoni'];
//Doesnot create referene and it creates copy
// ... are called Spread Attributes as the name represents it allows an expression to be expanded.
var parts = ['two', 'three'];
var numbers = __spreadArrays(['one'], parts, ['four', 'five']); // ["one", "two", "three", "four", "five"]
console.log(numbers);
var allToppings = __spreadArrays(topping, newtoppings);
var toppingsAll = __spreadArrays(newtoppings, topping);
console.log(allToppings);
console.log(toppingsAll);
