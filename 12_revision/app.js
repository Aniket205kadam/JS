// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 4000);

// console.log("three");
// console.log("four");

// callbacks
// function sum(a, b) {
//     console.log(a+b);
// }

// function calculator(a, b, sumcallback) {
//     sumcallback(a, b);
// }

// calculator(1, 2, sum); // yesa function jo dusare function ke argument me pass hota hai use callback kahate hai

// callback hell
// function getData(dataId, getNextData) {
//     //2s
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// callback hell
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });

// Promises -> Promise is for "eventual" competion of task. It is an object in JS. It is a solution to callback hell.
// *resolve & reject are callbacks provided by JS
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Promise");
//         // reject("Username not found!");
//         resolve({username: "aniket", email: "ak@kadam.com"})
//     }, 5000);
// });

// promise.then((result) => {
//     console.log("Promise fulfilled: ", result)
// })

// promise.catch((error) => {
//     console.log("Error ouccored: ", error);
// })

// Async-Await -> async function always returns a promise.
// await pauses the execution of its surrounding async function util the promise is settled.
function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 4000);
    });
}

// IIFE
(async function () {
    console.log("First request");
    await api();
    console.log("Second request");
    await api();
})();

console.log("next work....");