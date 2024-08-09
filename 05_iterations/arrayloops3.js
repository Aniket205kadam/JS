const coding = ['java', 'js', 'ruby', 'java', 'python', 'cpp'];

// coding.forEach((code) => {
//     console.log(code);
// });

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (code, index, arr) => {
//     console.log(code, index, arr)
// })

const myCoding = [
    {
        languageNmae: "java",
        languageFileName: ".java"
    },
    {
        languageNmae: "javascript",
        languageFileName: ".js"
    },
    {
        languageNmae: "python",
        languageFileName: ".py"
    }
];

myCoding.forEach( (language) => {
    console.log(`Language name is ${language.languageNmae} and file name is ${language.languageFileName}`);
})