const myObject = {
    java: 'java by oracle',
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// console.log(myObject['java']);

for (const key in myObject) {
    // console.log(key);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ['java', 'javascript', 'kotlin', 'python'];

for (let ln in programming) {
    // console.log(ln); //return the index number
    // console.log(programming[ln]);
    
}

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States America");
map.set('Fr', "France");
map.set('IN', "India");

// Its not working
// for (const key in map) {
//     console.log(key);
// }