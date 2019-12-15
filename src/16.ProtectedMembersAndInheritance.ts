abstract class bSizes{
    // Constructor implementation is missing
    // Its just expecting {} to end the constructor.
    constructor(protected sizes: string[]) {};
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
class bPizza extends bSizes{
    public toppings: string[] = [];
    constructor(readonly name: string, sizes: string[]){
        super(sizes);
    }
    public updatedSizes(sizes: string[]){
        this.sizes = sizes;
    }
    public addTopping(topping: string){
        this.toppings.push(topping);
    }
}

const bpizza = new bPizza('Pepperoni', ['small', 'medium']);
console.log(bpizza.availableSizes);
bpizza.availableSizes = ['medium', 'large'];
console.log(bpizza.availableSizes);
bpizza.addTopping('thin crust');
bpizza.updatedSizes(['small', 'large'])
//Sizes: ${bpizza.sizes} - as sizes are defined as protected in super class
// and in bPizza we have removed public
console.log(`Name: ${bpizza.name}, Sizes: ${bpizza.availableSizes}, 
            toppings: ${bpizza.toppings}`);