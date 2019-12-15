// in Javascript new Number(); new Boolean(); new String();
    // in typescript number boolean string

// Number Types, arguments and functions 
    const pizzaCost: number = 10; // assign specific variable
    const pizzaToppings: number = 5;
    // function return statement and arguments
    function calculatePrice(cost: number, toppings: number): number{
        return cost  + 1.5 * toppings;
    }

    const cost: number = calculatePrice(pizzaCost, pizzaToppings);

    console.log(`Pizza Cost: ${cost}`); // Compliant
    // Template strings (above line) should be used instead of concatenation
    console.log("Pizza Cost: " + cost); // Noncompliant

    var date = new Date();
    console.log("Today is ${date}"); // Noncompliant
    console.log(`Today is ${date}`);

    /* 
    If the radix parameter is omitted, JavaScript assumes the following:

    If the string begins with "0x", the radix is 16 (hexadecimal)
    If the string begins with "0", the radix is 8 (octal). This feature is deprecated
    If the string begins with any other value, the radix is 10 (decimal)
    */

    var a = parseInt("10") + "\n";
    var b = parseInt("10.00") + "\n";
    var c = parseInt("10.33") + "\n";
    var d = parseInt("34 45 66") + "\n";
    // Leading and trailing spaces are ignored in parseInt() function 
    var e = parseInt("   60   ") + "\n";
    var f = parseInt("40 years") + "\n";
    var g = parseInt("He was 40") + "\n";

    var h = parseInt("10", 10)+ "\n"; // base 10
    var i = parseInt("010")+ "\n"; // base 8 (octal)
    var j = parseInt("10", 8)+ "\n"; // base 8 (octal)
    var k = parseInt("0x10")+ "\n"; // base 16 (hexa decimal)
    var l = parseInt("10", 16)+ "\n"; // base 16

    var n = a + b + c + d + e + f + g + "\n" + h + i + j + k +l;
    console.log(n);

// String Types & String literals
    const coupon: string = 'pizza25'; // double quote also valid
    function normalizeCoupon(code: string): string{
        return code.toUpperCase();
    }
    const couponMessage: string = `Final
    Coupon is:
    ${normalizeCoupon(coupon)}`; // multi line string from es6
    console.log(couponMessage);

    //A string literal type can be considered a subtype of the string type. This means that a string literal type is assignable to a plain string, but not vice-versa.
    const eventName: "click" | "mouseover" | "onkeypress" | "onkeydown" = "click";
    //treat a variable that has a string literal type like a variable of type string. You can access properties, call methods, and use operators, just as you would with regular strings:
    eventName.length; // 5
    eventName.toUpperCase(); // "CLICK"
    eventName + "!"; // "click!"
    // You cannot assign the type string to a string literal type. A variable of type string can generally contain an arbitrary string value; therefore, the compiler cannot ensure that the value is valid for a given string literal type:
    // const vevent: string = "something entirely different";

    // Error: Type 'string' is not assignable to type '"click" | "mouseover"'. Type 'string' is not assignable to type '"mouseover"'.
    // const eventType: "click" | "mouseover" = vevent;

// Boolean Type, Boolean Literals
    const npizzas: number = 2;
    function offerDiscount(orders: number): boolean{
        return orders >= 3;
    }

    if(offerDiscount(npizzas)){
        console.log('You are entitled to a discount');
    }
    else{
        console.log('Order more than 3 pizzas for a discount');
    }

    const TRUE: true = true; // OK
    console.log(TRUE);
    
    