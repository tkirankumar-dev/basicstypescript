
// Any Type
    let tCoupon; // by default it will be any
    tCoupon = 25;
    tCoupon = "Kiran";
    tCoupon = true;
    // any implicit assign should be avoided.
    // Dynamic variables should use any.
    console.log(tCoupon);
    // Implicit and Explicit types
    let implicitCoupon = "kiran"; // Inferred type
    let explicitCoupon: string = "kumar";
    // Be explicit when Type is implicitly typed to any and Assigning to a parent type
    // with team in place, explicit should be helpful.
    // applies to functions, variables, classes

// Void Type
    let selectedTopping: string = "Pepperoni";
    function selectTopping(topping: string): void {
    selectedTopping = topping;
    }
    selectTopping("bacon");
    console.log(selectedTopping);

// Never Type - the value will never occur
    function orderError(error: string): never {
    throw new Error(error); // this will be the last line
    //never going to return a value
    }
    // orderError('something went wrong');
    // Type 'null' is not assignable to type 'never'
    // let nothing: never = null;
    function checkNever(str: string): never {
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
    let sCoupon: string | null | undefined = "Pizza25";
    function removeCoupon(): void {
    // Type 'null' or 'undefined' is not assignable to type 'string' - this issue will come when let sCoupon: string and strictNullChecks is set to true
    sCoupon = null;
    }
    console.log(sCoupon);
    removeCoupon();
    console.log(sCoupon);

// Unions and Literal types
    let pizzaSize: string = "small";
    function selectSize(size: "small" | "medium" | "large"): void {
    pizzaSize = size;
    }
    // if we give wrong string - Argument of type '"medium1"' is not assignable to parameter of type '"small" | "medium" | "large"'
    selectSize("medium");
    console.log(`pizza Size: ${pizzaSize}`);
// Functional Types

    // Sample 1
    function sumOrder(price: number, quantity: number): number {
    return price * quantity;
    }

    // Sample 2
    let sumOrder1: Function;
    sumOrder1 = (price: number, quantity: number): number => {
    return price * quantity;
    };

    // Sample 3
    let sumOrder2: (price: number, quantity: number) => number;
    // after n number of lines
    sumOrder2 = (x, y) => x * y;

    // Sample 4
    let sumOrder3: (price: number, quantity: number) => number = (x, y) => x * y;

    const sumOrder3Val = sumOrder3(5, 4);
    console.log(`Total Sum: ${sumOrder3Val}`);

// Functions and Optional Arguments
    let sumOrder4: (price: number, quantity?: number) => number;
    sumOrder4 = (x, y) => {
    if (y) {
        return x * y;
    } else {
        return x;
    }
    };
    const sumOrder4Val = sumOrder4(25); // quantity parameter is optional
    console.log(`Total Sum: ${sumOrder4Val}`);

// Functions and Default Params
    let sumOrder5: (price: number, quantity?: number) => number;
    sumOrder5 = (x, y = 5) => x * y;
    const sumOrder5Val = sumOrder4(25); // quantity parameter is optional
    console.log(`Total Sum: ${sumOrder5Val}`);

// Object Types
    // Variable 'pizzaObj' implicitly has type 'any' in some locations where its type cannot be determined
    // Inferr type from usage
    let pizzaObj: { name: any; price: number; getName: () => string };
    pizzaObj = {
    name: "Plain Old Pepperoni",
    price: 30,
    getName(): string {
        // Variable 'pizzaObj' implicitly has an 'any' type
        return pizzaObj.name;
    }
    };

// Array Types and Generics
    const sizes = ['small', 'medium', 'large']; // Implicit type declaration
    const sizesExplicitDeclare: string[] = ['small', 'medium', 'large']; // Explicit type declaration
    const sizesExplicitArrayStrDeclare: Array<string> = ['small', 'medium', 'large']; // Explicit array type declaration

// Tuple Type for Arrays 
    var empId: number = 1;
    var empName: string = "Steve";        

    // Tuple type variable examples
    var employee: [number, string] = [1, "Steve"];
    var person: [number, string, boolean] = [1, "Steve", true];

    var user: [number, string, boolean, number, string];// declare tuple variable
    user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable

    // Tuple Variable with union types
    let checkPizza:(string | number | boolean)[] = ['Peperoni'];
    checkPizza.push(10);
    checkPizza.push(10.25); // This has been considered as number
    checkPizza.push(true);
    console.log(checkPizza);


    // Tuple Array
    var employeeArray: [number, string][];
    employeeArray = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
    console.log(employeeArray);