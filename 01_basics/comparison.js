// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

console.log("2" > 1) //js automaticaly convert the "2" to 2 in number
console.log("02" > 1) //js automaticaly convert the "02" to 2 in number

console.log(null > 0);
console.log(null == 0);
console.log(null < 0);
console.log(null >= 0);
// console.log(0 == 0);

/* 
The reason is that an equality check == and comparisons >< >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 true and (1) null > 0 is false.
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 
console.log("2" === 2);
/*  === operator is used to check for both strict equality and type equality.*/

