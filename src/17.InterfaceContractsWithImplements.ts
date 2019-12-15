interface cSizes{
    availableSizes: string[];
}

abstract class dSizes implements cSizes {
    constructor(protected sizes: string[]){}
    set availableSizes(sizes: string[]){
        this.sizes = sizes;
    }
    get availableSizes(){
        return this.sizes;
    }
}

interface cPizza extends cSizes{
    readonly name: string;
    toppings: string[];
    updateSizes(sizes: string[]): void;
    addTopping(topping: string): void;
}

class dPizza extends dSizes implements cPizza{
    public toppings: string[] = [];
    constructor(readonly name: string, sizes: string[]){
        super(sizes);
    }
    public updateSizes(sizes: string[]){
        this.sizes = sizes;
    }
    public addTopping(topping: string){
        this.toppings.push(topping);
    }
}

const dpizza = new dPizza('Pepperoni', ['small', 'medium']);
console.log(dpizza.availableSizes);
dpizza.availableSizes = ['medium', 'large'];
console.log(dpizza.availableSizes);
dpizza.addTopping('thin crust');
dpizza.updateSizes(['small', 'large'])
//Sizes: ${bpizza.sizes} - as sizes are defined as protected in super class
// and in bPizza we have removed public
console.log(`Name: ${dpizza.name}, Sizes: ${dpizza.availableSizes}, 
            toppings: ${dpizza.toppings}`);