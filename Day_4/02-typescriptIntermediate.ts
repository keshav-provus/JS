// Intermediate TypeScript

// 1. Union Types
let unionType: string | number = "Hello";
unionType = 42; // valid

// 2. Intersection Types
interface A {
    a: string;
}
interface B {
    b: number;
}
type AB = A & B;
let ab: AB = { a: "Hello", b: 42 };

// 3. Type Aliases
type StringOrNumber = string | number;
let aliasType: StringOrNumber = "Hello";
aliasType = 42; // valid

// 4. Literal Types
let literalType: "Hello" | "World" = "Hello";
literalType = "World"; // valid

// 5. Function Types
function add(x: number, y: number): number {
    return x + y;
}

// 6. Default Parameters
function greetWithDefault(name: string = "stranger"): string {
    return `Hello, ${name}!`;
}

// 7. Rest Parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// 8. Generics
function identity<T>(arg: T): T {
    return arg;
}

// 9. Type Guards
function isString(value: any): value is string {
    return typeof value === "string";
}

let value: any = "Hello";
if (isString(value)) {
    console.log(`Value is a string of length ${value.length}`);
} else {
    console.log("Value is not a string");
}       