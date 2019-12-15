/*  What class is?
    class is a syntactic sugar for creating our own 
    constructor function and prototype inheritance.
    .prototype in javascript
*/
/*
function ClassName(name: string){
    // strict should be false
    this.name = name;
    this.toppings = [];
}
ClassName.prototype.addTopping = function addTopping(topping: string){
    this.toppings.push(topping);
}
*/

class ClassName{
    name: string;
    toppings: string[] = [];
    constructor(name: string){
        this.name = name;
    }
    addTopping(topping: string){
        this.toppings.push(topping);
    }
}
const classobj = new ClassName('CustomerManagement');
classobj.addTopping('RegisterNode');
console.log(classobj);

// Public and Private Members 
    // • Private should be ideally to keep inside internally to a function or a class.
    // • Public can be access
    class ClassName1{
        private toppings: string[] = [];
        constructor(private name: string){}
        // If we put this as private.. this can be use only in this class.
        public addTopping(topping: string){
            this.toppings.push(topping);
        }
    }

    const classobj1 = new ClassName1('CustomerManagement');
    classobj1.addTopping('RegisterNode');
    console.log(classobj1);

// Readonly Members
class ClassName2{
    readonly toppings: string[] = [];
    readonly nodesCount: number;
    constructor(readonly name: string){
        this.nodesCount = 4;
    }
    // If we put this as private.. this can be use only in this class.
    public addTopping(topping: string){
        this.toppings.push(topping);
    }
}

const classobj2 = new ClassName2('CustomerManagement');
classobj2.addTopping('RegisterNode');
console.log(`Name: ${classobj2.name}, Nodes: ${classobj2.nodesCount}, toppings: ${classobj2.toppings}`);
