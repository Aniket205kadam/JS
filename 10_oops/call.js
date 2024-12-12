function setUsername(username) {
    // complex db calls
    this.username = username;
    console.log("this method is called!");
}

function createUser(username, email, password) {
    // setUsername(username); // ye call nahi huva hai isaka sirf refernse gaya hai, means usaka executation context jayab ho raha hai
    setUsername.call(this, username);

    this.email = email;
    this.password = password;
    //output: createUser { email: 'chai@google.com', password: '1234' }
}

const chai = new createUser("chai", "chai@google.com", "1234");
console.log(chai);