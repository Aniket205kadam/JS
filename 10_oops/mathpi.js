const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);
//output: {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// this value can't to be override
// console.log(Math.PI); // 3.141592653589793
// Math.PI = 5
// console.log(Math.PI); // 3.141592653589793

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log(`chai nhi bni`)
    }
}

// console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name")); 
// output:
// {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

// chai.name = "aniket"; //{ name: 'aniket', price: 250, isAvailable: true }

// console.log(chai);

// Object.defineProperty(chai, 'name' , {
//     writable: false,
//     enumerable: false,
//     configurable: false
// });

// chai.name = "aniket"; // now value is not set

// console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name")); 
// output:
// {
//     value: 'ginger chai',
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

for (let [key, value] of Object.entries(chai)) {
    // console.log(`${key} : ${value}`); // yaha pe mhara function bhi print ho raha hai
    if (typeof value !== 'function')
        console.log(`${key} : ${value}`); 
}

Object.defineProperty(chai, 'name', {
    enumerable: false
});
// ab ham for loop me name ko print nahi kar sakte hai
// kyu ki hamane enumerable ko false kiya hai

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function')
        console.log(`${key} : ${value}`); 
} // now name print nahi ho raha hai