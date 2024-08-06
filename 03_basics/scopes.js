//  let c = 300 //Cannot redeclare block-scoped variable 'c'.
// var c = 300

//global scope
let data = "aniket"
let a = 300

//scope
{
    //local scope
    let a = 10

    const b = 20
    // var c = 30
    console.log("Username is: " + data);
    console.log("Inner a: ", a);
}

// console.log(a); //error
// console.log(b); //error
// console.log(c); //print the value 30 //that we are not use var

console.log("Outer a: ", a);

