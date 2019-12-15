"use strict"
// Setter = element.className
// getter = console.log(element.className)
// setter and getters are always public
class Sizes{
    constructor(public sizes: string[]){}
    set availableSizes(sizes: string[]){
        this.sizes = sizes;
    }
    get availableSizes(){
        return this.sizes;
    }
}

const sizesAvailable = new Sizes(['small', 'medium']);
//invoke getter
console.log(sizesAvailable.availableSizes);
//invoke setter
sizesAvailable.sizes = ['small', 'medium', 'large'];
console.log(sizesAvailable.availableSizes);
