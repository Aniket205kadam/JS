class User {
    constructor(username) {
        console.log("Parent class is called!");
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        console.log("Child class is called!");
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }

    logMe() {
        console.log("Now this method is override by the child class");
    }
}

//const chai = new Teacher("aniket", "aniket@gmail.com", "1234");

// chai.logMe();
// chai.addCourse();

const masalChai = new User("rohit");
masalChai.logMe();

console.log(masalChai instanceof User);