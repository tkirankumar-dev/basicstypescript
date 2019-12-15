// Type Aliases
    // Assign any kind of Type to Type alias
    // Type keyword - type alias
    type Size = 'small' | 'medium' | 'large';
    // type for function structure
    type callBack = (size: Size) => void;

    // union type and default literanl
    // Cannot assign to 'pizzaSizeVal' if it is a constant.
    let pizzaSizeVal: Size = 'medium';
    // Arrow function
    const selectedSize: callBack = x => {
        pizzaSizeVal = x;
    }
    selectedSize('medium');
    console.log(pizzaSizeVal);

// Type Assertions
    // We can instruct Typescript what we will get values from dataset / callback function
    type Pizza = {name: string; toppings: number};
    const pizzaConst: Pizza = {name: 'Blazing Inferno', toppings: 5};
    const serialized = JSON.stringify(pizzaConst);
    function getNameFromJSON(obj: string) : string {
        // return (<Pizza>JSON.parse(obj)).name; // Old Way
        return (JSON.parse(obj) as Pizza).name;
    }
    console.log(getNameFromJSON(serialized));