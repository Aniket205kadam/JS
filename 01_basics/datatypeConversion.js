let score = 33
score = "45"

score = "45abc"

// score = null
// score = undefined
score = true

let valueInNumber = Number(score)

// console.log(typeof(score))
// console.log(typeof(valueInNumber))
// console.log("valueInNumber is: " + valueInNumber) //return NaN => not a number

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// let isLoggedIn = 1 //true
// let isLoggedIn = 0 //false
// let isLoggedIn = 123 //true
// let isLoggedIn = "aniket" //true
let isLoggedIn = "" //false

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

//string

let someNumber = 33;
let boolValue = true

let stringNumber = String(someNumber)
let stringBool = String(boolValue)

console.log(stringNumber);
console.log(typeof(stringNumber));

console.log(stringBool)
console.log(typeof(stringBool))