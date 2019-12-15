"use strict";
var vdate = new Date();
//we can call instance methods like vdate.getFullYear()
console.log(vdate);
//here Date is called an instance method
var vdate1 = +new Date();
console.log(vdate1);
// Static method
var vdate2 = Date.now();
console.log(vdate2);
//--------------------------------------------------------------
var Coupon = /** @class */ (function () {
    function Coupon() {
    }
    Coupon.createCoupon = function (percentage) {
        return "PIZZA_RESTAURANT_" + percentage;
    };
    Coupon.allowed = ['Pepperoni', 'Blazing Inferno'];
    return Coupon;
}());
console.log(Coupon.allowed); // This is called as static property. 
// Static property are handy when we create 
// Utility Libraries / functions / classes that do particular 
// things such as dealing with data sets / mutating strings  
console.log(Coupon.createCoupon(25)); // This is called as static method. 
