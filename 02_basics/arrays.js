//array

// const myArr = [0, 1, 2, 3, 4, 5, true, "aniket"]
const myArr = [0, 1, 2, 3, 4, 5]

let myHeors = ["Iron-man", "Captain-america", "spiderman", "thor", "hulk"]

let myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr[5]);
// console.log(myHeors[0]);
// console.log(myArr2);

let numbers = new Array();
let count = 10

for (let i = 0; i < 10; i++) {
    numbers[i] = count++
}

// console.log(numbers)

//Array methods

let arr = [1, 2, 3, 4, 5]

// arr.push(6);
// arr.push(7); //add element in the last index
// console.log(arr)

// arr.pop(); //remove the last value

// arr.unshift(9) //add element in the first position//[ 9, 1, 2, 3, 4, 5 ]
// arr.shift() //remove the first index value //[ 2, 3, 4, 5 ]

// console.log(arr.includes(9));
// console.log(arr.indexOf(3));

const newArr = arr.join()


// console.log(arr);
// console.log(typeof arr);
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice

console.log("A ", arr);

const myn1 = arr.slice(1, 3)

console.log(myn1);
console.log("B ", arr);


const myn2 = arr.splice(1, 3)

console.log(myn2);
console.log("C ", arr);