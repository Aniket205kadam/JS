//IIFE => Immediately Invoked Function Expressions

(function chai() {
    //named IIFE
    console.log(`DB CONNECTED`);
})();

//code editor automaticly add the ; at end of the every statement
// chai()

( (username) => {
    console.log(`DB CONNECTED TWO ${username}`);
})("aniket");

/**
 * OUTPUT:
 * DB CONNECTED
 * DB CONNECTED TWO aniket
 */

/**
 * The function is defined and immediately executed right 
 * after it's created.
 * -----------------------
 * Sometimes, issues arise due to pollution of the global scope.
 *  To avoid the pollution caused by global declarations,
 *  we use IIFEs (Immediately Invoked Function Expressions).
 * 
 * (Hindi)
 * global scope ke pollution  se problem hoti hai kahi bar, 
 * so us global ke jo bhi declaration hai uske pollution hata 
 * ne ke liye we are use the IIFE
 * ------------------------------------------
 * The semicolon ; at the end of the IIFE (Immediately Invoked Function Expression)
 *  is used to prevent potential issues that can arise from automatic semicolon insertion (ASI) in JavaScript.
 */

