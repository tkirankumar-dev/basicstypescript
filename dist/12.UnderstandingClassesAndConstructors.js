"use strict";
/*  What class is?
    class is a syntactic sugar for creating our own
    constructor function and prototype inheritance.
    .prototype in javascript
*/
/*
function ClassName(name: string){
    // strict should be false
    this.name = name;
    this.toppings = [];
}
ClassName.prototype.addTopping = function addTopping(topping: string){
    this.toppings.push(topping);
}
*/
var ClassName = /** @class */ (function () {
    function ClassName(name) {
        this.toppings = [];
        this.name = name;
    }
    ClassName.prototype.addTopping = function (topping) {
        this.toppings.push(topping);
    };
    return ClassName;
}());
var classobj = new ClassName('CustomerManagement');
classobj.addTopping('RegisterNode');
console.log(classobj);
// Public and Private Members 
// • Private should be ideally to keep inside internally to a function or a class.
// • Public can be access
var ClassName1 = /** @class */ (function () {
    function ClassName1(name) {
        this.name = name;
        this.toppings = [];
    }
    // If we put this as private.. this can be use only in this class.
    ClassName1.prototype.addTopping = function (topping) {
        this.toppings.push(topping);
    };
    return ClassName1;
}());
var classobj1 = new ClassName1('CustomerManagement');
classobj1.addTopping('RegisterNode');
console.log(classobj1);
// Readonly Members
var ClassName2 = /** @class */ (function () {
    function ClassName2(name) {
        this.name = name;
        this.toppings = [];
        this.nodesCount = 4;
    }
    // If we put this as private.. this can be use only in this class.
    ClassName2.prototype.addTopping = function (topping) {
        this.toppings.push(topping);
    };
    return ClassName2;
}());
var classobj2 = new ClassName2('CustomerManagement');
classobj2.addTopping('RegisterNode');
console.log("Name: " + classobj2.name + ", Nodes: " + classobj2.nodesCount + ", toppings: " + classobj2.toppings);
