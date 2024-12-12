class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`;
    }
}

const aniket = new User("aniket");
// console.log(aniket.createId()) // not accessable for the object
// console.log(User.createId()) // here we can access the static method just using the class name

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }
}

const hitesh = new Teacher("hitesh", "hitesh@gamil.com");

// hitesh.createId();