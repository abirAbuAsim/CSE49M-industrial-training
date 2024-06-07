// Variable 
// Reserved keyword

// Step 01
let message; // Declaration 

// Step 02
message = "Hello"; // Assignment 

// Step 03
console.log(message); // Call the Variable


// Step 01 + Step 02 : Initialization
let message2 = "Hello";

// Block Scope 
{

}

// Multiple variable
let user = 'John';
let age = 27;
let status = 'Single'; // Recommend

// Var vs Let
var user2 = 'John'; // Old way, not recommended

// Hoisting - Uttolon kora

// variable naming convention: userBirthday -> firstSecond

// Constant
// 1. Uppercase constant
const COLOR_RED = "#FF0000";
console.log(COLOR_RED);

// 2. normal constant
const pageLoadTime = function () {}; // 


// Data Type, 8 Types
// 1. Primitive: 7 types, String, Number, Decimal, ....
// 2. Non-primitive: 1 type, Object


// String 
let welcomeMessage = "Welcome";
let welcomeMessage2 = 'Welcome';

// String Interpolation, using backtick
let firstName = "Arman";
let welcomeTime = "Morning";
let month = "May";
let date = "23"
let welcomeMessageOld = "Dear " + firstName + ", Good " + welcomeTime + ". Today is May 23, Time is 12.30AM";
let welcomeMessageAdvanced = `Dear ${firstName}, Good ${welcomeTime}. Today is May 23, Time is 12.30AM`;
console.log(welcomeMessageOld);
console.log(welcomeMessageAdvanced);


// Null value
let userAge = null;
console.log(userAge);

// Data Type
let age3 = '50';
console.log(typeof number);

// Type Conversion 
let differentTypes = false + 500; // Implicit type conversion or coercion
console.log(differentTypes);