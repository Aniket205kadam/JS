const coding = ['java', 'js', 'ruby', 'python', 'cpp'];

/* forEach() function not return the anything */
// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item; 
// });

// console.log(values); // undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const values = myNums.filter( (num) => num > 4);
const values = myNums.filter( (num) => {
    // return true //return all the items
    return num > 4;
});

// console.log(values);

const newValues = coding.filter( (ln) => (ln === 'js' || ln === 'java'))

// console.log(newValues);

const newNums = [];

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num);
    }
})

// console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => (bk.genre.toLowerCase() === 'history'));

userBooks = books.filter( (bk) => (bk.publish >= 1995 && bk.genre.toLowerCase() === 'history'));

userBooks = books.filter( (bk) => (bk.edition >= 2004));

console.log(userBooks);