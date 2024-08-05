const marvelHeros = [
    "thor",
    "Ironman",
    "spiderman"
]

const dcHeros = [
    "superman",
    "flash",
    "batman"
]

// marvelHeros.push(dcHeros) //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// let allHeros = marvelHeros.concat(dcHeros)

// console.log(allHeros); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

const all_new_heros = [...marvelHeros, ...dcHeros]
/*
(...)
The spread operator is a syntax feature that allows you to expand an array or an object into individual elements or key-value pairs.
*/
// console.log(all_new_heros);
// console.log(...marvelHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// let usableAnotherArray = another_array.flat(1) //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
// let usableAnotherArray = another_array.flat(2) //[
// 1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

let usableAnotherArray = another_array.flat(Infinity)// all deap clear
console.log(usableAnotherArray); 


console.log(Array.isArray("Aniket"))
console.log(Array.isArray(["Aniket"]))
console.log(Array.from("aniket")) //[ 'a', 'n', 'i', 'k', 'e', 't' ]

console.log(Array.from({name: "aniket"}))//[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]
