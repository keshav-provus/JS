/*
Hoisting in JS
*/

// Varaible Hoisting

console.log(a); // undefined, won't give ReferenceError because of hoisting
var a = 10;
console.log(a); // 10

// Example of let and const (not hoisted)

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;         
console.log(b); // 20

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;         
console.log(c); // 30  





// Function Hoisting

console.log(sum(5, 10)); // 15, function declaration is hoisted

function sum(x, y) {
  return x + y;
}

// Example of function expression (not hoisted)

console.log(multiply(5, 10)); // TypeError: multiply is not a function


var multiply = function (x, y) {
  return x * y;
};

console.log(multiply(5, 10)); // 50  