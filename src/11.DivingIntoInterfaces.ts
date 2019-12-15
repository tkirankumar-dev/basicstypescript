// Creating Interfaces
    /* 
        // Create a contract between variable and type and shape of the typethat we estially telling typescript essentially what it looks like
        type Pizza = {name: string, sizes: string[]};
        let pizza: Pizza;
        function createPizza(name: string, sizes: string[]): Pizza{
            return {
                name,
                sizes
            }
        }
        pizza = createPizza('Peperroni, ['small','medium']);
    */
   interface iPizza {name: string, sizes: string[]};
   interface pizzas{
       data: iPizza[]
   }
   let pizzaInfo: iPizza;
   function createPizza(name: string, sizes: string[]): iPizza{
       return {
           name,
           sizes
       };
   }
   pizzaInfo = createPizza('Peperroni', ['small', 'medium']);
   console.log(pizzaInfo);

// Interfaces with Function Types
   interface PizzaExt{
       name: string,
       sizes: string[],
       getAvailableSizes(): string[]
   }

   type getAvailableSizes = () => string[];

   let pizzaExt: PizzaExt;
   function createPizzaExt(name: string, sizes: string[]): PizzaExt{
       return {
           name, 
           sizes,
           getAvailableSizes(){
               return this.sizes
           }
       };
   }
   pizzaExt = createPizzaExt('Peperroni', ['small', 'medium']);
   console.log(pizzaExt);
   console.log(pizzaExt.getAvailableSizes());
   
// Extending Interfaces
   interface TshirtSizes{
       sizes: string[];
   }

   interface TShirt extends TshirtSizes{
        brand: string,
        getAvailableTShirtSizes(): string[]
   }

   type getAvailableTShirtSizes = () => string[];

   let tshirt: TShirt;
   function addTShirt(brand: string, sizes: string[]): TShirt{
       return {
           brand,
           sizes,
           getAvailableTShirtSizes(){
               return this.sizes
           }
       };
   }

   tshirt = addTShirt('Max', ['small', 'medium']);
   console.log(tshirt);

// Interfaces and Optional Properties
   interface ShirtSize{
       sizes: string[];
   }

   interface Shirt extends ShirtSize{
       brand: string;
       quantity?: number;
       getAvailableShirtSizes(): string[];
   }

   type getAvailableShirtSizes = () => string[];

   let shirt: Shirt;

   function availableShirts(brand: string, sizes: string[]): Shirt{
       return {
           brand,
            sizes,
            getAvailableShirtSizes(){
                return this.sizes
            }
       };
   }

   shirt = availableShirts('Max',['small', 'medium', 'large']);
   shirt.quantity = 5;
   console.log(shirt);

// Interfaces with Index Signatures
   interface customertype{
       types: string[];
   }
   interface customer extends customertype {
        name: string;
        visits?: number;
        getCustomerTypes(): string[];
        [key: number]: string;
   }

   type getCustomerTypes = () => string[];

   let customer: customer;

   function customerDetails(name: string, types: string[]): customer{
       return{
           name,
           types,
           getCustomerTypes(){
               return this.types
           }
       };
   }

   customer = customerDetails('Kiran', ['gold', 'silver']);
   customer.visits = 2;
   customer[1] = "Kumar";
   customer[2] = "Vijay";
   console.log(customer);