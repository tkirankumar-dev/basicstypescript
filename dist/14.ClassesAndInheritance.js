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
var iSizes = /** @class */ (function () {
    function iSizes(sizes) {
        this.sizes = sizes;
    }
    Object.defineProperty(iSizes.prototype, "availableSizes", {
        get: function () {
            return this.sizes;
        },
        set: function (sizes) {
            this.sizes = sizes;
        },
        enumerable: true,
        configurable: true
    });
    return iSizes;
}());
var xPizza = /** @class */ (function (_super) {
    __extends(xPizza, _super);
    // All declarations of 'name' must have identical modifiers.
    // This error means that already this variable is used somewhere
    function xPizza(iname, sizes) {
        var _this = _super.call(this, sizes) || this;
        _this.iname = iname;
        _this.sizes = sizes;
        _this.toppings = [];
        return _this;
    }
    xPizza.prototype.addTopping = function (topping) {
        this.toppings.push(topping);
    };
    return xPizza;
}(iSizes));
var ipizza = new xPizza('Pepperoni', ['small', 'medium']);
console.log(ipizza.availableSizes);
ipizza.availableSizes = ['small', 'medium', 'large'];
console.log(ipizza.availableSizes);
ipizza.addTopping('thin crust');
console.log("Name: " + ipizza.iname + ", Sizes: " + ipizza.sizes + ", \n            toppings: " + ipizza.toppings);
