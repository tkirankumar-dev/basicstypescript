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
var AbstractSizes = /** @class */ (function () {
    // Constructor implementation is missing
    // Its just expecting {} to end the constructor.
    function AbstractSizes(sizes) {
        this.sizes = sizes;
    }
    ;
    Object.defineProperty(AbstractSizes.prototype, "availableSizes", {
        get: function () {
            return this.sizes;
        },
        set: function (sizes) {
            this.sizes = sizes;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractSizes;
}());
// export keyword can also be used to export the abstract class. 
// To extend sizes is fine. 
// If its not abstract we can also create instances of sizes else where. 
// now cannot create an instane of an abstract class -  AbstractSizes
var aPizza = /** @class */ (function (_super) {
    __extends(aPizza, _super);
    function aPizza(name, sizes) {
        var _this = _super.call(this, sizes) || this;
        _this.name = name;
        _this.sizes = sizes;
        _this.toppings = [];
        return _this;
    }
    aPizza.prototype.addTopping = function (topping) {
        this.toppings.push(topping);
    };
    return aPizza;
}(AbstractSizes));
var apizza = new aPizza('Pepperoni', ['small', 'medium']);
console.log(apizza.availableSizes);
apizza.availableSizes = ['small', 'medium', 'large'];
console.log(apizza.availableSizes);
apizza.addTopping('thin crust');
console.log("Name: " + apizza.name + ", Sizes: " + apizza.sizes + ", \n            toppings: " + apizza.toppings);
