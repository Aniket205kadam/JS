/*
primitive =>
    7 type:
        String
        Number
        Boolean
        null
        undefined
        Symbol
        BigInt

Reference (Non primitive)
    Array
    Objects
    Functions
*/
// JavaScript is a dynamically typed language.

let outsideTemp = null
// console.log(outsideTemp)

let userEmail = undefined; // this is same as the let userEmail;

// Symbol

const id = Symbol('123')
const anotherId = Symbol('123')

console.table([id, anotherId])

console.log(id === anotherId)

//BigInt

const bigNumber = 534363729302232323n
console.log(typeof(bigNumber))
console.log("Value: " + bigNumber)

// Array

const heros = ["shaktiman", "naagraj", "doga"];

console.log("heros: " + typeof(heros))

//object

let myObj = {
    name: "aniket",
    age: 18
}

console.log("myObj: " + typeof(myObj))

// function => In js also we treat the function as the variable

let myFunction = function(){
    console.log("Inside the function")
}

console.log("myFunction: " + typeof(myFunction)) //it actual is a function object

console.log(myObj)

//+++++++++++++++++++++++++++++ Stack and Heap memory ++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myUsername = "aniket205kadam";

let anotherName = myUsername;
anotherName = "aniket-kadam";

console.log("\n" + anotherName);
console.log(myUsername);

let userOne = {
    email: "user@google.com",
    upi: "user@bl"
}

let userTwo = userOne;

userTwo.email = "aniket@google.com"

console.log(userOne)
console.log(userTwo)
