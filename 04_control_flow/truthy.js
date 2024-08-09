// const userEmail = "aniket@gmail.com"; //Got user email
// const userEmail = ""; //Don't have user email
const userEmail = []; //Got user email

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
    
}

/**
 * String have the value then it is true
 * but the string are the empty then it is false
 * 
 * array have empyt then true
 */

//rules:

// falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values:
// true, "0", 'false'/"false", " ", [], {}, function(){} -> empty function

//correct way to check array
if (userEmail.length === 0) {
    console.log("Array is empty");
}

//object
const emptyObj = {
    username: "aniket",
    rollNo: 12
}

if (Object.keys(emptyObj).length !== 0) {
    console.log("Object is not empty");
} else {
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null, undefined

let val1;

// val1 = 5 ?? 10
// console.log(val1); //5

// val1 = null ?? 10
// console.log(val1); //10

// val1 = null ?? null;
// console.log(val1); //null

// val1 = undefined ?? 15;
// console.log(val1); //15

// val1 = null ?? 10 ?? 20;
// console.log(val1); //10

// val1 = null ?? undefined; // undefined
// val1 = undefined ?? null; //null
// console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice > 80 ? console.log("More than 80") : console.log("Less than 80")
