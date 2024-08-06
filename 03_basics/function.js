function sayMyName() {
    console.log("A")
    console.log("N")
    console.log("I")
    console.log("K")
    console.log("E")
    console.log("T")
}

// sayMyName() -> this is function execution
// sayMyName -> this is reference execution

// sayMyName //if you run this then it is not executed
// sayMyName() //now method is executed

//                      parameters
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }

// addTwoNumbers() //NaN

//           arguments
// addTwoNumbers(2, 3) //5
// addTwoNumbers(2, "4") //24
// addTwoNumbers(2, "a") //2a
// addTwoNumbers(2, null) //2

// const result = addTwoNumbers(3, 5)

// console.log("Result:", result); //Result: undefined

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result:", result); //Result: 8


// function loginUserMessage(username) {
//     if (!username) {
//         return "Please enter a username"
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("aniket")) //aniket just logged in
// console.log(loginUserMessage()) //undefined just logged in

//empty string("") => false
//undefined => false

function loginUserMessage(username = "sam") { 
    if (!username) {
        return "Please enter a username"
    }
    return `${username} just logged in`
}
//if the user not pass arg then default value `sam` is used, and if user pass the value then override this value
console.log(loginUserMessage()) //sam just logged in
console.log(loginUserMessage("aniket")) //aniket just logged in