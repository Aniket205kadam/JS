const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = myNumbers.map( (num) => num + 10);

// const newNumbers = [];
// myNumbers.forEach( (num, index) => {
//     newNumbers[index] = num + 10;
// });

// console.log(newNumbers);

// const myNums = myNumbers
//                         .map( (num) => num * 10)
//                         .map( (num) => num + 1)
//                         .filter( (num) => num >= 40)

// console.log(myNums);

const myNums = myNumbers
                        .map( (num) => num * 10)
                        .map( (num) => num + 1)
                        .filter( (num) => num >= 40)
                        .forEach( (num) => console.log(num));



