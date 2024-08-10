const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myTotal = myNumber.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval ${currval} = total is: ${acc + currval}`);
//     return acc + currval;
// }, 0);

const initialValue = 0;
const myTotal = myNumber.reduce( (accumulator, currentValue) => accumulator + currentValue, initialValue)

// console.log(`Total is: ${myTotal}`);

const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'py course',
        price: 999
    },
    {
        itemName: 'mobile dev course',
        price: 5999
    },
    {
        itemName: 'data science course',
        price: 12999
    }
];

// let courcePrice = 0;
// shoppingCart.forEach( (cource) => {
//     courcePrice += cource.price;
// })

// console.log(courcePrice);

const totalPrice = shoppingCart.reduce((accumulator, currentObject) => (accumulator + currentObject.price), 0);

console.log(`Total price of your course is: ${totalPrice.toLocaleString()}`);


// forEach()
// filter()
// map()
// reduce()