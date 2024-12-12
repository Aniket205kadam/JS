const user = {
    username: 'aniket',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log('Got user details from database');   
        // console.log(`Username: ${username}`); // ReferenceError: username is not defined
        console.log(`Username: ${this.username}`);
        console.log(`Login Count: ${this.loginCount}`);
        console.log(this);
    }
}

const user2 = {
    username: 'aniket',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log('Got user details from database');   
        // console.log(`Username: ${username}`); // ReferenceError: username is not defined
        console.log(`Username: ${this.username}`);
        console.log(`Login Count: ${this.loginCount}`);
        console.log(this);
    }
}

// so there is the problem of object literal if we make anotehr object then write again and this is not proper way

// console.log(user.username);
// user.getUserDetails();
// console.log(this);

// constructor
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greating = function() {
        console.log(`Welcome ${this.username}`)
    }

    // return this;
}

const UserOne = new User("aniket", 12, true);
const UserTwo = new User("rohit", 13, false);
// console.log(UserOne);
// console.log(UserTwo);
// UserOne.greating();

// console.log(UserOne.constructor);
// console.log(UserOne instanceof User); //output: true
