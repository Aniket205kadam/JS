let myName = "aniket     ";


// console.log(myName.trueLength());

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.aniket = function() {
    console.error("Aniket is present in all obejct");
}

Array.prototype.heyAniket = function() {
    console.log(`Aniket says hello`);
}

// heroPower.aniket();
// means when we create any object then the aniket method is avialible for all the obejcts

// myHeros.aniket();
// myHeros.heyAniket();

// heroPower.heyAniket(); // does not have the access

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// console.warn(Teacher.name);
// console.warn(TASupport.isAvailable);

// modern syntax
// Object.setPrototypeOf(Teacher);

let anotherUsername = "ChaiAurCode   ";

String.prototype.trueLenght = function() {
    console.log(`${this}`)
    console.log(`True lenght is: ${this.trim().length}`)
}

anotherUsername.trueLenght();
"aniket".trueLenght();
