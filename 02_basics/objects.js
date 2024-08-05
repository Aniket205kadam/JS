// singleton => construction
// Object.create

//objetc literals

const mySymbol = Symbol("key1")

const JsUser = {
    name: "Aniket",
    "full name": "Aniket Kadam",
    [mySymbol]: "myKey1",
    age: 19,
    location: "Devgad",
    email: "aniket@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser.lastLoginDays);

// console.log(JsUser["email"]);

// console.log(JsUser.full name);//error
// console.log(JsUser["full name"]);
// console.log(JsUser[mySymbol]);


JsUser.email = "aniket@google.com";

// Object.freeze(JsUser) // stop the changes

JsUser.email = "aniket@microsoft.com";

// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello js users");
}

JsUser.greeting2 = function() {
    console.log(`Hello js users, ${this.name}`);
}

// console.log(JsUser);
console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greeting()); //Hello js users

console.log(JsUser.greeting2()); //Hello js users, Aniket

