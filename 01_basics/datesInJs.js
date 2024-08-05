// Dates

let myDate = new Date()
// console.log(myDate); //2024-08-04T13:30:22.271Z => this is not the readable form

// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());

// console.log(typeof(myDate));
//                          year, month, date
let myCreateDate = new Date(2023, 0, 23)
//month started from the 0
// console.log(myCreateDate.toDateString());
//                                        hour, min
let myCreateDate2 = new Date(2024, 0, 23, 5, 3)
// console.log(myCreateDate2.toLocaleString());

let myCreateDate3 = new Date("01-14-2023")
// console.log(myCreateDate3.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); //1722779662051

// console.log(myCreateDate3.getTime());

// console.log(Date.now()); //1722780073821 => mill-sec

// console.log(Math.floor(Date.now()/1000)); //1722780129 => sec

let newDate = new Date()

console.log(newDate);

console.log(newDate.getMonth() + 1);
console.log(newDate.getDate() + 1);

const formattedDate = newDate.toLocaleString('default', {
    weekday: 'long'
});

console.log(newDate);




