// Basics of TypeScript

// 1. Type Annotations
let message: string = "Hello, TypeScript!";
console.log(message);

// 2. Basic Types
let isDone: boolean = false;
let count: number = 42;
var Username: string = "Alice";

// 3. Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

// 4. Tuples
let tuple: [string, number] = ["Alice", 30];

// 5. Enums
enum Color {
    RED,
    GREEN,
    BLUE
}
let c: Color = Color.GREEN;

// 6. Any Type
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// 7. Void Type
function warnUser(): void {
    console.log("This is a warning message.");
}

// 8. Null and Undefined
let u: undefined = undefined;
let n: null = null;

// 9. Never Type
function error(message: string): never {
    throw new Error(message);
}

// 10. Type Assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

console.log(`Message: ${message}`);
console.log(`Is Done: ${isDone}`);
console.log(`Count: ${count}`);
console.log(`Username: ${Username}`);
console.log(`Numbers: ${numbers}`);
console.log(`Names: ${names}`);
console.log(`Tuple: ${tuple}`);
console.log(`Color: ${c}`);
console.log(`Not Sure: ${notSure}`);
warnUser();
console.log(`Undefined: ${u}`);
console.log(`Null: ${n}`);
console.log(`String Length: ${strLength}`);