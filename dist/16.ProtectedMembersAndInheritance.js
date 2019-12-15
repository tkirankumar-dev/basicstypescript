"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var bSizes = /** @class */ (function () {
    // Constructor implementation is missing
    // Its just expecting {} to end the constructor.
    function bSizes(sizes) {
        this.sizes = sizes;
    }
    ;
    Object.defineProperty(bSizes.prototype, "availableSizes", {
        get: function () {
            return this.sizes;
        },
        set: function (sizes) {
            this.sizes = sizes;
        },
        enumerable: true,
        configurable: true
    });
    return bSizes;
}());
// export keyword can also be used to export the abstract class. 
// To extend sizes is fine. 
// If its not abstract we can also create instances of sizes else where. 
// now cannot create an instane of an abstract class -  AbstractSizes
var bPizza = /** @class */ (function (_super) {
    __extends(bPizza, _super);
    function bPizza(name, sizes) {
        var _this = _super.call(this, sizes) || this;
        _this.name = name;
        _this.toppings = [];
        return _this;
    }
    bPizza.prototype.updatedSizes = function (sizes) {
        this.sizes = sizes;
    };
    bPizza.prototype.addTopping = function (topping) {
        this.toppings.push(topping);
    };
    return bPizza;
}(bSizes));
var bpizza = new bPizza('Pepperoni', ['small', 'medium']);
console.log(bpizza.availableSizes);
bpizza.availableSizes = ['medium', 'large'];
console.log(bpizza.availableSizes);
bpizza.addTopping('thin crust');
bpizza.updatedSizes(['small', 'large']);
//Sizes: ${bpizza.sizes} - as sizes are defined as protected in super class
// and in bPizza we have removed public
console.log("Name: " + bpizza.name + ", Sizes: " + bpizza.availableSizes + ", \n            toppings: " + bpizza.toppings);
