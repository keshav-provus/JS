/*
Various string operations in JavaScript
*/

let myString = "Hello, World!";

// 1. Finding the length of a string
console.log("Length of the string:", myString.length); // Output: 13

// 2. Changing case
console.log("Uppercase:", myString.toUpperCase()); // Output: HELLO, WORLD!
console.log("Lowercase:", myString.toLowerCase()); // Output: hello, world!

// 3. Extracting a substring
console.log("Substring (0-5):", myString.substring(0, 5)); // Output: Hello

// 4. Splitting a string
let newString = "A quick brown fox";
let words = newString.split(" ");
console.log("Splitted words:", words); // Output: [ 'A', 'quick', 'brown', 'fox' ], returns an array of words based on the delimiter 


// 5. Replacing a substring
let replacedString = myString.replace("World", "JavaScript");
console.log("Replaced String:", replacedString); // Output: Hello, JavaScript!  

// 6. Finding the index of a substring
console.log("Index of 'World':", myString.indexOf("World")); // Output: 7

// 7. Concatenating string
let greet = "Hello";
let place = "Everyone";
let concatenatedString = greet.concat(", ", place, "!");
console.log("Concatenated String:", concatenatedString); // Output: Hello, Everyone!

// 8. String template literals - backtick syntax
let name = "Keshav";
let templateLiteral = `Welcome, ${name}, to JavaScript programming!`;
console.log("Template Literal:", templateLiteral); // Output: Welcome, Keshav, to JavaScript programming!

// 9. Reversing a string
let string = "JavaScript";
let reversedString = string.split("").reverse().join("");
console.log("Reversed String:", reversedString); // Output: tpircSavaJ, .join() works on arrays to convert them back to strings