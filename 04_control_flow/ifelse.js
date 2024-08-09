// if

const isUserLoggedIn = true
const temperature = 41

// if (isUserLoggedIn) {
//     console.log("User is LogIn");
// }

// if (temperature < 50) {
//     console.log("temparature is less than 50");
// } else {
//     console.log("temparature is greater than 50");
// }

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); //power is not defined

//short-hand notation

const balance = 1000

// if (balance > 500) console.log("Your balance is greater than $1000");
// if (balance > 500) console.log("Your balance is greater than $1000"),
//                    console.log("test"); //bad


// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 999) {
//     console.log("less than 999");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || debitCard) {
    console.log("User logged in");
    
}

//conditional rendering

