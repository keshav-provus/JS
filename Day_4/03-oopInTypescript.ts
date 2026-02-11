class Cake{
    public flavor: string;
    public weight: number;
    public layers: number;
    public Price: number;

    
    constructor(flavor: string, weight: number, layers: number, price?: number) {
        this.flavor = flavor;
        this.weight = weight;
        this.layers = layers;
        if(typeof price === "number"){
            this.Price = price;
        } 
        else {
            this.Price = this._calculatePrice();
        }
    }



    private _calculatePrice(): number {
        return this.weight * 10 + this.layers * 5;
    }

    public getPrice(): number {
        //console.log(this.Price);
        return this.Price;
    }   

}

const chocolateCake = new Cake("Chocolate", 2, 3);
console.log(`Flavor: ${chocolateCake.flavor}`);
console.log(`Weight: ${chocolateCake.weight} kg`);
console.log(`Layers: ${chocolateCake.layers}`);
console.log(`Price: $${chocolateCake.Price}`);

const vanillaCake = new Cake("Vanilla", 1.5, 2, 25);
console.log(`Flavor: ${vanillaCake.flavor}`);
console.log(`Weight: ${vanillaCake.weight} kg`);
console.log(`Layers: ${vanillaCake.layers}`);
console.log(`Price: $${vanillaCake.Price}`);


// This and super keyword


class A{
    public name: string;

    constructor(name: string){
        this.name = name;
    }

    public greet(): void {
        console.log(`Hello, I am ${this.name}`);
    }
}

class B extends A{
    public age: number;

    constructor(name: string, age: number){
        super(name); // Super should be called before accessing 'this' in the constructor of a derived class, because it initializes the 'this' context of the derived class.
        this.age = age;
    }

    public greet(): void {
        super.greet();
        console.log(`I am ${this.age} years old`);
    }
}

const person = new B("Alice", 30);
person.greet();


// Abstract Classes and Interfaces

abstract class Shape {
    abstract area(): number;

    // Class which contains one or more abstract methods must be declared as abstract. Abstract classes cannot be instantiated directly, but they can be subclassed. The abstract method must be implemented in the derived class, otherwise it will throw an error.
}

class Circle extends Shape {
    public radius: number;

    constructor(radius: number){
        super();
        this.radius = radius;
    }

    public area(): number {
        return Math.PI * this.radius * this.radius;
    }

    // Area function must be implemented in the derived class, otherwise it will throw an error.
}


// Interfaces

interface Vehicle {
    make: string;
    model: string;
    year: number;
    getDetails(): string;
}

class Car implements Vehicle {
    public make: string;
    public model: string;
    public year: number;
    
    constructor(make: string, model: string, year: number){
        this.make = make;
        this.model = model;
        this.year = year;
    }   

    public getDetails(): string {
        return `Car: ${this.year} ${this.make} ${this.model}`;
    }
}

// Interfaces can also be used to define the shape of an object, and can be implemented by classes to ensure they adhere to a specific structure.

// Composition

class Engine {
    public horsepower: number;

    constructor(horsepower: number){
        this.horsepower = horsepower;
    }
}

class CarWithEngine {
    public make: string;
    public model: string;
    public year: number;
    public engine: Engine;

    constructor(make: string, model: string, year: number, engine: Engine){ // we pass an instance of Engine to the CarWithEngine class, which allows us to use the properties and methods of the Engine class within the CarWithEngine class.
        this.make = make;
        this.model = model;
        this.year = year;
        this.engine = engine;
    }

    public getDetails(): string {
        return `Car: ${this.year} ${this.make} ${this.model} with ${this.engine.horsepower} HP`;
    }
}

const myEngine = new Engine(300);
const myCar = new CarWithEngine("Toyota", "Supra", 2020, myEngine);
console.log(myCar.getDetails());


// Composition is considered a better design principle than inheritance in many cases, as it allows you to create complex objects by combining simpler ones, rather than relying on a rigid class hierarchy. This promotes flexibility and reusability, as you can easily swap out components without affecting the overall structure of the system. Inheritance can lead to tight coupling between classes, making it harder to maintain and extend the codebase over time.


// Interface merging

interface User {
    name: string;
    age: number;
}

interface User {
    email: string;
}

const user: User = {
    name: "User",
    age: 25,
    email: "user@a.com"
}

// In TypeScript, when two interfaces with the same name are declared, they are automatically merged into a single interface. This allows you to extend the properties of an existing interface without modifying its original declaration. In the example above, the User interface is declared twice, and the properties from both declarations are combined into a single User interface that includes name, age, and email.

