// function calculateCartPrice(...nums) { // now this is rest operator, also it called spread operator
//     let totalPrice = 0;
//     for (let index = 0; index < nums.length; index++) {
//         totalPrice += nums[index]
//     }
//     return totalPrice
// }

// console.log(calculateCartPrice(200, 400, 500) + "RS");


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)); //[ 500, 2000 ]


const user = {
    username: "aniket",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

let myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2, 3, 4, 5, 6]));
