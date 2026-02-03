/* 

Datatypes present in JS are as follows:
    1. String
    2. Number
    3. BigInt
    4. Object
    6. Undefined
    7. null
    8. Symbol

*/

/* 

Assignment of variable can be done using these following keywords:
    1. var - basic way of assigning variable, used in legacy softwares, has became obsolete nowadays
    2. let - modern way for assigning variables, vastly used instead of var
    3. const - assigns a constant value to a variable which can't be changed later on

*/

/*

Differnces b/w var,let,const

VAR:
    1. Function scoped
    2. Can be re-declared and updated
    3. Hoisted to the top of the function scope and initialized with undefined      

LET:        
    1. Block scoped         
    2. Can be updated but not re-declared within the same scope
    3. Hoisted to the top of the block scope but not initialized
    
CONST:
    1. Block scoped
    2. Cannot be updated or re-declared
    3. Hoisted to the top of the block scope but not initialized

*/




// Example of var
var a = 10;
console.log(a); // Output: 10

var a = 20; // Re-declaration allowed
console.log(a); // Output: 20

a = 30; // Update allowed
console.log(a); // Output: 30   

// Example of let   
let b = 15;
console.log(b); // Output: 15                   
b = 25; // Update allowed
console.log(b); // Output: 25

// let b = 35; // Re-declaration not allowed, will throw an error

// Example of const
const c = 50;
console.log(c); // Output: 50

// c = 60; // Update not allowed, will throw an error
// const c = 70; // Re-declaration not allowed, will throw an error     
