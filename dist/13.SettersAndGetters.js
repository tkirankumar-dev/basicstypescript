"use strict";
// Setter = element.className
// getter = console.log(element.className)
// setter and getters are always public
var Sizes = /** @class */ (function () {
    function Sizes(sizes) {
        this.sizes = sizes;
    }
    Object.defineProperty(Sizes.prototype, "availableSizes", {
        get: function () {
            return this.sizes;
        },
        set: function (sizes) {
            this.sizes = sizes;
        },
        enumerable: true,
        configurable: true
    });
    return Sizes;
}());
var sizesAvailable = new Sizes(['small', 'medium']);
//invoke getter
console.log(sizesAvailable.availableSizes);
//invoke setter
sizesAvailable.sizes = ['small', 'medium', 'large'];
console.log(sizesAvailable.availableSizes);
