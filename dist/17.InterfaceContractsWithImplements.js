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
var dSizes = /** @class */ (function () {
    function dSizes(sizes) {
        this.sizes = sizes;
    }
    Object.defineProperty(dSizes.prototype, "availableSizes", {
        get: function () {
            return this.sizes;
        },
        set: function (sizes) {
            this.sizes = sizes;
        },
        enumerable: true,
        configurable: true
    });
    return dSizes;
}());
var dPizza = /** @class */ (function (_super) {
    __extends(dPizza, _super);
    function dPizza(name, sizes) {
        var _this = _super.call(this, sizes) || this;
        _this.name = name;
        _this.toppings = [];
        return _this;
    }
    dPizza.prototype.updateSizes = function (sizes) {
        this.sizes = sizes;
    };
    dPizza.prototype.addTopping = function (topping) {
        this.toppings.push(topping);
    };
    return dPizza;
}(dSizes));
var dpizza = new dPizza('Pepperoni', ['small', 'medium']);
console.log(dpizza.availableSizes);
dpizza.availableSizes = ['medium', 'large'];
console.log(dpizza.availableSizes);
dpizza.addTopping('thin crust');
dpizza.updateSizes(['small', 'large']);
//Sizes: ${bpizza.sizes} - as sizes are defined as protected in super class
// and in bPizza we have removed public
console.log("Name: " + dpizza.name + ", Sizes: " + dpizza.availableSizes + ", \n            toppings: " + dpizza.toppings);
