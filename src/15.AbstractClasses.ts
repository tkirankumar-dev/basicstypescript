abstract class AbstractSizes{
    // Constructor implementation is missing
    // Its just expecting {} to end the constructor.
    constructor(public sizes: string[]) {};
    set availableSizes(sizes: string[]){
        this.sizes = sizes;
    }
    get availableSizes(){
        return this.sizes;
    }
}
// export keyword can also be used to export the abstract class. 
// To extend sizes is fine. 
// If its not abstract we can also create instances of sizes else where. 
// now cannot create an instane of an abstract class -  AbstractSizes
class aPizza extends AbstractSizes{
    public toppings: string[] = [];
    constructor(readonly name: string, public sizes: string[]){
        super(sizes);
    }
    public addTopping(topping: string){
        this.toppings.push(topping);
    }
}

const apizza = new aPizza('Pepperoni', ['small', 'medium']);
console.log(apizza.availableSizes);
apizza.availableSizes = ['small', 'medium', 'large'];
console.log(apizza.availableSizes);
apizza.addTopping('thin crust');
console.log(`Name: ${apizza.name}, Sizes: ${apizza.sizes}, 
            toppings: ${apizza.toppings}`);