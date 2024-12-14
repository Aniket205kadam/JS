class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return this._password.toUpperCase();
    } // hamne getter likha to hame settter bhi likhan padega

    set password(value) {
        this._password = value; // ham password ko _password property overide karegi
    } 
}

const aniket = new User("aniket@gmail.com", "123");
aniket.password = "Aniket205";
aniket.email = "ak@gmail.com";
console.log(aniket.password)
console.log(aniket.email)
console.log(aniket)