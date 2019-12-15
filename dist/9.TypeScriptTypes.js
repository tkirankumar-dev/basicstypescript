"use strict";
// Any Type
var tCoupon; // by default it will be any
tCoupon = 25;
tCoupon = "Kiran";
tCoupon = true;
// any implicit assign should be avoided.
// Dynamic variables should use any.
console.log(tCoupon);
// Implicit and Explicit types
var implicitCoupon = "kiran"; // Inferred type
var explicitCoupon = "kumar";
// Be explicit when Type is implicitly typed to any and Assigning to a parent type
// with team in place, explicit should be helpful.
// applies to functions, variables, classes
// Void Type
var selectedTopping = "Pepperoni";
function selectTopping(topping) {
    selectedTopping = topping;
}
selectTopping("bacon");
console.log(selectedTopping);
// Never Type - the value will never occur
function orderError(error) {
    throw new Error(error); // this will be the last line
    //never going to return a value
}
// orderError('something went wrong');
// Type 'null' is not assignable to type 'never'
// let nothing: never = null;
function checkNever(str) {
    console.log("Hello");
    // with out below code, type script will return, A function returning 'never' cannot have a reachable end point
    // throw new Error();
    // or as below loop, which will never end.
    while (true) {
        console.log("I always does something and never ends.");
    }
}
// Null, Undefined, Strict Null checks
// in tsconfig.json string null checkes should be true to get below errors
var sCoupon = "Pizza25";
function removeCoupon() {
    // Type 'null' or 'undefined' is not assignable to type 'string' - this issue will come when let sCoupon: string and strictNullChecks is set to true
    sCoupon = null;
}
console.log(sCoupon);
removeCoupon();
console.log(sCoupon);
// Unions and Literal types
var pizzaSize = "small";
function selectSize(size) {
    pizzaSize = size;
}
// if we give wrong string - Argument of type '"medium1"' is not assignable to parameter of type '"small" | "medium" | "large"'
selectSize("medium");
console.log("pizza Size: " + pizzaSize);
// Functional Types
// Sample 1
function sumOrder(price, quantity) {
    return price * quantity;
}
// Sample 2
var sumOrder1;
sumOrder1 = function (price, quantity) {
    return price * quantity;
};
// Sample 3
var sumOrder2;
// after n number of lines
sumOrder2 = function (x, y) { return x * y; };
// Sample 4
var sumOrder3 = function (x, y) { return x * y; };
var sumOrder3Val = sumOrder3(5, 4);
console.log("Total Sum: " + sumOrder3Val);
// Functions and Optional Arguments
var sumOrder4;
sumOrder4 = function (x, y) {
    if (y) {
        return x * y;
    }
    else {
        return x;
    }
};
var sumOrder4Val = sumOrder4(25); // quantity parameter is optional
console.log("Total Sum: " + sumOrder4Val);
// Functions and Default Params
var sumOrder5;
sumOrder5 = function (x, y) {
    if (y === void 0) { y = 5; }
    return x * y;
};
var sumOrder5Val = sumOrder4(25); // quantity parameter is optional
console.log("Total Sum: " + sumOrder5Val);
// Object Types
// Variable 'pizzaObj' implicitly has type 'any' in some locations where its type cannot be determined
// Inferr type from usage
var pizzaObj;
pizzaObj = {
    name: "Plain Old Pepperoni",
    price: 30,
    getName: function () {
        // Variable 'pizzaObj' implicitly has an 'any' type
        return pizzaObj.name;
    }
};
// Array Types and Generics
var sizes = ['small', 'medium', 'large']; // Implicit type declaration
var sizesExplicitDeclare = ['small', 'medium', 'large']; // Explicit type declaration
var sizesExplicitArrayStrDeclare = ['small', 'medium', 'large']; // Explicit array type declaration
// Tuple Type for Arrays 
var empId = 1;
var empName = "Steve";
// Tuple type variable examples
var employee = [1, "Steve"];
var person = [1, "Steve", true];
var user; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable
// Tuple Variable with union types
var checkPizza = ['Peperoni'];
checkPizza.push(10);
checkPizza.push(10.25); // This has been considered as number
checkPizza.push(true);
console.log(checkPizza);
// Tuple Array
var employeeArray;
employeeArray = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
console.log(employeeArray);
