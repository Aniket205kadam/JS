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

// console.log(stringNumber);
// console.log(typeof(stringNumber));

// console.log(stringBool)
// console.log(typeof(stringBool))

// **************************** Operation ************************************

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2**2) //2^2

let str1 = "hello"
let str2 = " aniket"
let str3 = str1 + str2
// console.log(str3)

/*
//var vs let
var varName = "java"
let letName = "java"


if (true) {
    var varName = "javascript"
    let letName = "javascript"
    console.log("Inside scope varName: " + varName)
    console.log("Inside scope letName: " + letName)
}

console.log("outside scope varName: " + varName)
console.log("outside scope letName: " + letName)
*/

//string converstions

// console.log(1 + "2") //12
// console.log("1" + 2) //12
// console.log("1" + 2 + 2) //122
// console.log(2 + 2 + "1") //41
// console.log((3 + 4) * (5 % 3)) //14

// console.log(true)//true
// console.log(+true)//1
// console.log(true + false) //1 => 1 + 0
// console.log(true + 1) //2
// console.log(+"")

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

// console.table([num1, num2, num3])

//pre or post
//inc or dec
let gameCounter = 100
gameCounter++
console.log(gameCounter)

console.log("post")
gameCounter = 100
console.log(gameCounter++)
console.log(gameCounter)

console.log("pre")
gameCounter = 100
console.log(++gameCounter)
console.log(gameCounter)