const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Aync task is compelete')
        resolve()
    }, 1000)
})

//resolve ka connection hai .then() ke sath
promiseOne.then(function(){
    console.log('Promise consumed');
})

//new style
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task 2');
        resolve();
    }, 1000)
}).then(function() {
    console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: 'Chai', email: 'chai@chaiaurcode.com'})
    }, 1000)
})


promiseThree.then(function(user) {
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({username: 'aniket', email: 'aniketkadam@gmail.com'})
        } else {
            reject('ERROR: User not found!')
        }
    } ,2000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    //this username is coming for the upper 'then'
    console.log('username: ', username);
})
.catch((error) => {
    console.error(error);
})
.finally(() => {
    console.log('The promise either resolved or rejected');
})
// console.log(username);

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({username: 'javascript', password: '12345678'})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 6000)
});

// this is another way to apply the promise, but the async can't handle error so we can handle the error expilicity
async function  consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

consumePromiseFive();


// console.log('One');
// console.log('One');
// console.log('One');
// console.log('One');
// console.log('One');

// async function getAllUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(response);
    
//     const data = await response.json()
//     console.log(data);
    
// }

// getAllUsers();

fetch('https://api.github.com/users/aniket205kadam')
.then((response) => {
    return response.json()
})
.then((data) => {
    //data is return by the upper .then()
    console.log('Data: ', data);
})
.catch((error) => {
    console.error('ERROR: ', error);
})

// this feach() method fun first then run this upper code...!!!


// fetch()

// jari server se 404 error aata hai ho bhi onFulFiled[] me hi submit hota hai, kyuki hamari request server pe ja rahi hai, agar ham server pe ja hi nahi sake to ham onRejection[] me submit hoti hai