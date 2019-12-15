"use strict";
//Pass any number of arguments into single variable
function sumAll(arr) {
    return arr.reduce(function (prev, next) { return prev + next; });
}
var sum = sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(sum);
// JavaScript array reduce function rather than being something specific to TypeScript.
// Function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
function sumAllExt(message) {
    var arr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arr[_i - 1] = arguments[_i];
    }
    console.log(message); // argument [0]
    return arr.reduce(function (prev, next) { return prev + next; });
}
var sumExt = sumAllExt("Hello! ", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(sumExt);
