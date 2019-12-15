class iSizes{
    constructor(public sizes: string[]){}
    set availableSizes(sizes: string[]){
        this.sizes = sizes;
    }
    get availableSizes(){
        return this.sizes;
    }
}

class xPizza extends iSizes{
    public toppings: string[] = [];
    // All declarations of 'name' must have identical modifiers.
    // This error means that already this variable is used somewhere
    constructor(readonly iname: string, public sizes: string[]){
        super(sizes);
    }
    public addTopping(topping: string){
        this.toppings.push(topping);
    }
}

const ipizza = new xPizza('Pepperoni', ['small', 'medium']);
console.log(ipizza.availableSizes);
ipizza.availableSizes = ['small', 'medium', 'large'];
console.log(ipizza.availableSizes);
ipizza.addTopping('thin crust');
console.log(`Name: ${ipizza.iname}, Sizes: ${ipizza.sizes}, 
            toppings: ${ipizza.toppings}`);
