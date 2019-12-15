const vdate = new Date();
//we can call instance methods like vdate.getFullYear()
console.log(vdate);
//here Date is called an instance method
const vdate1 = +new Date();
console.log(vdate1);
// Static method
const vdate2 = Date.now();
console.log(vdate2);

//--------------------------------------------------------------

class Coupon{
    static allowed = ['Pepperoni', 'Blazing Inferno'];
    static createCoupon(percentage: number){
        return `PIZZA_RESTAURANT_${percentage}`;
    }
}
console.log(Coupon.allowed); // This is called as static property. 
        // Static property are handy when we create 
        // Utility Libraries / functions / classes that do particular 
        // things such as dealing with data sets / mutating strings  
console.log(Coupon.createCoupon(25)); // This is called as static method. 