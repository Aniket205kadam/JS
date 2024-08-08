const user = {
    username: "aniket",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()

let user1 = user;

user1.username = "Rohit";
user1.price = 10000;

// user1.welcomeMessage();

// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //{} => this in the node evn, because don't have context in the global
//if we are run this on console then see in the image "this.png"
/**
 * reason: In the browers we see the "Window" object, because window is the 
 * global object
 */

// function chai() {
//     let username = "aniket"
//     // console.log(this);
//     /**
//      * When we print "this" keyword inside the method then give some
//      * value see in the "thisKeywordInMethod.png"
//      */
//     console.log(this.username); //undefined
// }

// chai();

// const chai1 = function () {
//     let username = "aniket"
//     // console.log(this.username);
//     console.log(this);
    
// }

/* arrow function */

const chai = () => {
    let username = "aniket"
    //console.log(this.username); //undefined
    console.log(this); //{}
    
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 40));

/* implicit return */

// const addTwo = (num1, num2) => num1 + num2

// console.log(addTwo(2, 1));

const addTwo = (num1, num2) => (num1 + num2)
//if we are rap (num1 + num2) in the () the not write return, but
//if we are use {} then write the return keyword

// console.log(addTwo(2, 1));

// const getUser = () => {username: "aniket"} //this function act as the void function

// console.log(getUser());//undefined

const getUser = () => ({username: "aniket"})

console.log(getUser()); //{ username: 'aniket' }


const myArray = [2, 3, 4, 5, 6]

myArray.forEach((i) => {console.log(i)})
