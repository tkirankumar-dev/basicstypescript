"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var pizzaVal = {
    name: 'Pepperoni'
};
var toppingsVal = ['thincrust'];
//Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
var target = { a: 1, b: 5 };
var source = { b: 4, c: 5 };
var returnedTarget = Object.assign(target, source);
console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
var javaScriptOrder = Object.assign(pizzaVal, { toppingsVal: toppingsVal });
var spreadOpertorOrder = __assign(__assign({}, pizzaVal), { toppingsVal: toppingsVal });
console.log(spreadOpertorOrder);
console.log(javaScriptOrder);
