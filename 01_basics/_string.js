const name = "aniket"
const repoCount = 30

// console.log(name + repoCount + " value")

//here use backticks
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('aniket-hc')

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length) //the length property is not a method
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-9, 1)
console.log(anotherString)

const newStringOne = "   aniket   ";
console.log(newStringOne);
console.log(newStringOne.trim() + "|");
console.log(newStringOne.trimStart() + "|");
console.log(newStringOne.trimEnd() + "|");

const url = "https://aniket.dev/aniket%20kadam"

const newUrl = url.replace('%20', '-');
console.log(newUrl)

console.log(url.includes('aniket'))

//string convert to array
let str = "aniket-kadam-dev"

let strArr = str.split('-')
console.log(strArr)

console.log(str.blink())

console.log(str.link())
